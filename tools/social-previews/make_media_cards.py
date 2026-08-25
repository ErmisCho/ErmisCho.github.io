"""Composed preview cards: text on the left, a real image on the right.

Companion to make_previews.py, for the two cases where a picture beats a wordmark:

  profile.png  - the GitHub profile link. GitHub serves the account avatar as og:image
                 for profile URLs, and LinkedIn crops that to 1.91:1, which decapitates
                 a portrait. Here the face is centred by construction.
  sms.png      - SMS Spam Detection. A frame of the real app (showing the 94.16% F1
                 metric and a live classification) is evidence; a marketing mockup is
                 decoration. Note GitHub and LinkedIn previews do NOT animate, so a GIF
                 must be reduced to one well-chosen frame.

Layout, palette and type match make_previews.py so all cards read as one set.
"""
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageSequence

W, H = 1280, 640
MARGIN = 90

BG = (5, 5, 5)
ACCENT_1 = (79, 70, 229)
ACCENT_3 = (139, 92, 246)
ACCENT_2 = (236, 72, 153)
TEXT_SECONDARY = (160, 160, 160)
TEXT_PRIMARY = (240, 240, 240)
LABEL = (110, 110, 118)

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, "fonts")
OUT = os.path.join(HERE, "out")

PROFILE_JPG = os.path.join(HERE, "..", "..", "assets", "images", "profile.jpg")
SMS_GIF = r"C:\Users\Administrator\Backup\Projects\sms-spam-ham-analysis\docs\assets\messageguard-demo.gif"
SMS_FRAME = 119  # first frame showing a completed SPAM verdict with the confidence bar


def font(name, size, weight):
    f = ImageFont.truetype(os.path.join(FONTS, name), size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        f.set_variation_by_axes([min(32, size), weight])
    return f


def text_w(d, s, f):
    b = d.textbbox((0, 0), s, font=f)
    return b[2] - b[0]


def horizontal_gradient(size, stops):
    w, h = size
    g = Image.new("RGB", (w, 1))
    px = g.load()
    a, b, c = stops
    for x in range(w):
        t = x / max(1, w - 1)
        if t < 0.5:
            u = t / 0.5
            px[x, 0] = tuple(int(a[i] + (b[i] - a[i]) * u) for i in range(3))
        else:
            u = (t - 0.5) / 0.5
            px[x, 0] = tuple(int(b[i] + (c[i] - b[i]) * u) for i in range(3))
    return g.resize((w, h))


def gradient_text(base, xy, s, f, stops):
    mask = Image.new("L", base.size, 0)
    ImageDraw.Draw(mask).text(xy, s, font=f, fill=255)
    bb = mask.getbbox()
    if bb is None:
        return
    grad = Image.new("RGB", base.size, stops[0])
    grad.paste(horizontal_gradient((bb[2] - bb[0], bb[3] - bb[1]), stops), (bb[0], bb[1]))
    base.paste(grad, (0, 0), mask)


def rounded(img, radius):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width, img.height), radius=radius, fill=255)
    img.putalpha(mask)
    return img


def base_card():
    img = Image.new("RGB", (W, H), BG)
    for centre, radius, colour, peak in (
        ((900, 300), 380, ACCENT_3, 120),
        ((1180, 480), 300, ACCENT_1, 80),
    ):
        small = max(1, radius // 6)
        layer = Image.new("L", (W // 4, H // 4), 0)
        cx, cy, r = centre[0] // 4, centre[1] // 4, radius // 4
        ImageDraw.Draw(layer).ellipse((cx - r, cy - r, cx + r, cy + r), fill=peak)
        layer = layer.filter(ImageFilter.GaussianBlur(small)).resize((W, H), Image.LANCZOS)
        img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), colour), 0.5), img, layer)
    return img


def compose(title, tagline, chips, media, media_box, radius=24):
    """media_box = (x, y, w, h); the image is fitted inside, preserving aspect."""
    img = base_card()

    m = media.copy()
    mx, my, mw, mh = media_box
    m.thumbnail((mw, mh), Image.LANCZOS)
    m = rounded(m.convert("RGB"), radius)

    # Glow behind the media so it lifts off the near-black ground.
    glow = Image.new("L", (W, H), 0)
    px, py = mx + (mw - m.width) // 2, my + (mh - m.height) // 2
    ImageDraw.Draw(glow).rounded_rectangle(
        (px - 10, py - 10, px + m.width + 10, py + m.height + 10), radius=radius + 8, fill=150)
    glow = glow.filter(ImageFilter.GaussianBlur(28))
    img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), ACCENT_3), 0.45), img, glow)
    img.paste(m, (px, py), m)

    d = ImageDraw.Draw(img)
    d.text((MARGIN, 76), "github.com/ErmisCho", font=font("Inter.ttf", 24, 500), fill=LABEL)

    max_w = mx - MARGIN - 50
    size = 66
    while size > 34:
        f_title = font("Outfit.ttf", size, 800)
        if max(text_w(d, w, f_title) for w in title.split()) <= max_w:
            break
        size -= 2
    f_title = font("Outfit.ttf", size, 800)

    f_tag = font("Inter.ttf", 25, 400)
    words, lines, cur = tagline.split(), [], ""
    for word in words:
        t = (cur + " " + word).strip()
        if text_w(d, t, f_tag) <= max_w or not cur:
            cur = t
        else:
            lines.append(cur); cur = word
    if cur:
        lines.append(cur)
    lines = lines[:3]

    title_lines, cur = [], ""
    for word in title.split():
        t = (cur + " " + word).strip()
        if text_w(d, t, f_title) <= max_w or not cur:
            cur = t
        else:
            title_lines.append(cur); cur = word
    if cur:
        title_lines.append(cur)

    ch, line_h, tl_h = 48, 36, int(size * 1.15)
    block = len(title_lines) * tl_h + 30 + len(lines) * line_h + 44 + ch
    y = 150 + max(0, (H - 150 - 60 - block) // 2)

    for tl in title_lines:
        gradient_text(img, (MARGIN, y), tl, f_title, (ACCENT_1, ACCENT_3, ACCENT_2))
        y += tl_h
    d = ImageDraw.Draw(img)
    y += 30

    for ln in lines:
        d.text((MARGIN, y), ln, font=f_tag, fill=TEXT_SECONDARY)
        y += line_h
    y += 44

    f_chip = font("Inter.ttf", 22, 500)
    x = MARGIN
    for chip in chips:
        cw = text_w(d, chip, f_chip) + 40
        if x + cw > mx - 40:
            break
        d.rounded_rectangle((x, y, x + cw, y + ch), radius=14,
                            fill=(20, 20, 26), outline=(56, 52, 74), width=2)
        b = d.textbbox((0, 0), chip, font=f_chip)
        d.text((x + 20, y + (ch - (b[3] - b[1])) / 2 - b[1]), chip, font=f_chip, fill=TEXT_PRIMARY)
        x += cw + 12

    img.paste(horizontal_gradient((W, 10), (ACCENT_1, ACCENT_3, ACCENT_2)), (0, H - 10))
    return img


os.makedirs(OUT, exist_ok=True)

# --- GitHub profile: face centred by construction, not by a scraper's crop ---
portrait = Image.open(PROFILE_JPG).convert("RGB")
# Face centre measured at ~(695, 400) in the 1280x1920 original.
portrait = portrait.crop((380, 90, 1010, 720))
compose(
    "Ermis Chorinopoulos",
    "Senior Software Engineer - AI, Backend & Search Systems. Python, FastAPI, Django, RAG/Search.",
    ["Python", "FastAPI", "Django", "RAG"],
    portrait,
    (760, 130, 400, 400),
    radius=28,
).save(os.path.join(OUT, "profile.png"), optimize=True)
print("wrote profile.png")

# --- SMS: a real verdict from the deployed UI, not a mockup ---
gif = Image.open(SMS_GIF)
frames = list(ImageSequence.Iterator(gif))
shot = frames[min(SMS_FRAME, len(frames) - 1)].convert("RGB")
compose(
    "SMS Spam Detection",
    "Duplicate-safe evaluation at 94.16% SPAM F1, served through FastAPI and React.",
    ["scikit-learn", "FastAPI", "React", "Azure"],
    shot,
    (640, 150, 560, 360),
    radius=16,
).save(os.path.join(OUT, "sms-spam-detection-nlp.png"), optimize=True)
print("wrote sms-spam-detection-nlp.png")
