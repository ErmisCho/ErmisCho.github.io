"""Generate GitHub social-preview cards (1280x640) in the ermischo.github.io visual language.

Palette and type are lifted from src/styles/global.css so the cards match the site
rather than merely coordinating with it.

Why this exists: a repo with no social preview falls back to GitHub's auto-generated
card, which uses the owner avatar — that is what made the LinkedIn Featured cards look
like a cropped portrait. Same class of bug as the site shipping no og:image.

Usage:
    pip install pillow
    mkdir fonts && cd fonts
    curl -sLo Outfit.ttf https://github.com/google/fonts/raw/main/ofl/outfit/Outfit%5Bwght%5D.ttf
    curl -sLo Inter.ttf  https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf
    cd .. && python make_previews.py

Then upload each out/<repo>.png at github.com/ErmisCho/<repo>/settings -> Social
preview. There is no API for this; the web UI is the only route. Uploading takes effect
immediately, but it does NOT refresh an existing LinkedIn Featured card — LinkedIn
caches the image at add time, so those cards must be deleted and re-added.
"""
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1280, 640
MARGIN = 90

BG = (5, 5, 5)
ACCENT_1 = (79, 70, 229)    # --accent-1 indigo
ACCENT_3 = (139, 92, 246)   # --accent-3 violet
ACCENT_2 = (236, 72, 153)   # --accent-2 pink
TEXT_PRIMARY = (240, 240, 240)
TEXT_SECONDARY = (160, 160, 160)
LABEL = (110, 110, 118)

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, "fonts")
OUT = os.path.join(HERE, "out")

CARDS = [
    dict(
        repo="rag-pipeline",
        title="RAG Pipeline",
        tagline="Asynchronous documentation ingestion and citation-backed retrieval",
        chips=["FastAPI", "RabbitMQ", "Redis", "Pinecone", "Docker"],
    ),
    dict(
        repo="campaign-event-analytics-pipeline",
        title="Campaign Event Analytics",
        tagline="Validated batch pipeline: quarantine, deduplication, partitioned Parquet",
        chips=["Python", "Parquet", "DuckDB", "FastAPI", "pytest"],
    ),
    dict(
        repo="agentic-rag",
        title="Agentic RAG",
        tagline="LangGraph workflow that routes, grades evidence, and bounds retries",
        chips=["LangGraph", "Gemini", "Ollama", "Python"],
    ),
    dict(
        repo="dachapply",
        title="DACHApply",
        tagline="Deployed job-intelligence platform with AI-assisted evaluation",
        chips=["Django", "React", "PostgreSQL", "Docker", "Azure"],
    ),
    dict(
        repo="crm-backend-optimization",
        title="CRM Backend Optimization",
        tagline="Django/PostgreSQL performance study over 3M synthetic records",
        chips=["Django", "PostgreSQL", "Indexing", "Benchmarks"],
    ),
]


def font(name, size, weight):
    f = ImageFont.truetype(os.path.join(FONTS, name), size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        # Inter exposes optical size first, then weight.
        f.set_variation_by_axes([min(32, size), weight])
    return f


def text_w(draw, s, f):
    box = draw.textbbox((0, 0), s, font=f)
    return box[2] - box[0]


def horizontal_gradient(size, stops):
    """3-stop horizontal gradient as an RGB image."""
    w, h = size
    grad = Image.new("RGB", (w, 1))
    px = grad.load()
    a, b, c = stops
    for x in range(w):
        t = x / max(1, w - 1)
        if t < 0.5:
            u = t / 0.5
            col = tuple(int(a[i] + (b[i] - a[i]) * u) for i in range(3))
        else:
            u = (t - 0.5) / 0.5
            col = tuple(int(b[i] + (c[i] - b[i]) * u) for i in range(3))
        px[x, 0] = col
    return grad.resize((w, h))


def radial_glow(size, centre, radius, colour, peak):
    """Soft radial bloom, mirroring the hero photo glow on the site."""
    w, h = size
    small = max(1, radius // 6)
    layer = Image.new("L", (w // 4, h // 4), 0)
    d = ImageDraw.Draw(layer)
    cx, cy, r = centre[0] // 4, centre[1] // 4, radius // 4
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=peak)
    layer = layer.filter(ImageFilter.GaussianBlur(small))
    layer = layer.resize((w, h), Image.LANCZOS)
    tint = Image.new("RGB", (w, h), colour)
    return tint, layer


def gradient_text(base, xy, s, f, stops):
    """Draw text filled with a horizontal gradient, like the site's hero name.

    The ramp spans the glyphs' own bounding box, not the canvas, so a short title
    like "DACHApply" shows the same full indigo-violet-pink sweep as a wide one.
    """
    mask = Image.new("L", base.size, 0)
    ImageDraw.Draw(mask).text(xy, s, font=f, fill=255)
    bbox = mask.getbbox()
    if bbox is None:
        return
    grad = Image.new("RGB", base.size, stops[0])
    grad.paste(horizontal_gradient((bbox[2] - bbox[0], bbox[3] - bbox[1]), stops),
               (bbox[0], bbox[1]))
    base.paste(grad, (0, 0), mask)


def wrap(draw, s, f, max_w):
    words, lines, cur = s.split(), [], ""
    for word in words:
        trial = (cur + " " + word).strip()
        if text_w(draw, trial, f) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def build(card):
    img = Image.new("RGB", (W, H), BG)

    # Two offset blooms in the top-right corner. Kept dim and localised: the site's
    # background is near-black with a glow behind the photo, not a violet wash.
    for centre, radius, colour, peak in (
        ((1180, 120), 300, ACCENT_3, 105),
        ((1265, 330), 240, ACCENT_1, 70),
    ):
        tint, mask = radial_glow((W, H), centre, radius, colour, peak)
        img = Image.composite(Image.blend(img, tint, 0.5), img, mask)

    d = ImageDraw.Draw(img)

    # Handle
    f_label = font("Inter.ttf", 24, 500)
    d.text((MARGIN, 76), "github.com/ErmisCho", font=f_label, fill=LABEL)

    # Title, auto-fitted so long names never overflow the safe area.
    max_title_w = W - 2 * MARGIN
    size = 92
    while size > 46:
        f_title = font("Outfit.ttf", size, 800)
        if text_w(d, card["title"], f_title) <= max_title_w:
            break
        size -= 3
    f_title = font("Outfit.ttf", size, 800)

    f_tag = font("Inter.ttf", 31, 400)
    tag_lines = wrap(d, card["tagline"], f_tag, W - 2 * MARGIN - 120)[:2]

    # Centre the title/tagline/chips group in the space below the handle, so short
    # and long titles both sit on a balanced page.
    ch, gap_title, gap_chips, line_h = 54, 40, 58, 46
    block_h = size + gap_title + len(tag_lines) * line_h + gap_chips + ch
    y = 132 + max(0, (H - 132 - 40 - block_h) // 2)

    gradient_text(img, (MARGIN, y), card["title"], f_title, (ACCENT_1, ACCENT_3, ACCENT_2))
    d = ImageDraw.Draw(img)
    y += size + gap_title

    for line in tag_lines:
        d.text((MARGIN, y), line, font=f_tag, fill=TEXT_SECONDARY)
        y += line_h

    # Stack chips, styled after the site's glass pills.
    f_chip = font("Inter.ttf", 25, 500)
    x, cy = MARGIN, y + gap_chips - line_h + 20
    pad_x = 24
    for chip in card["chips"]:
        cw = text_w(d, chip, f_chip) + pad_x * 2
        if x + cw > W - MARGIN:
            break
        d.rounded_rectangle((x, cy, x + cw, cy + ch), radius=16,
                            fill=(20, 20, 26), outline=(56, 52, 74), width=2)
        box = d.textbbox((0, 0), chip, font=f_chip)
        d.text((x + pad_x, cy + (ch - (box[3] - box[1])) / 2 - box[1]),
               chip, font=f_chip, fill=TEXT_PRIMARY)
        x += cw + 14

    # Gradient rule along the bottom edge.
    bar = horizontal_gradient((W, 10), (ACCENT_1, ACCENT_3, ACCENT_2))
    img.paste(bar, (0, H - 10))

    return img


os.makedirs(OUT, exist_ok=True)
for card in CARDS:
    path = os.path.join(OUT, card["repo"] + ".png")
    build(card).save(path, optimize=True)
    print("%-40s %s" % (card["repo"] + ".png", os.path.getsize(path) // 1024, ))
print("\nwrote %d cards to %s" % (len(CARDS), OUT))
