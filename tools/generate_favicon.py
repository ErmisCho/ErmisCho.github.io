from PIL import Image, ImageDraw, ImageFont

# Colors
bg_color = (5, 5, 5)  # #050505
text_color = (139, 92, 246)  # violet #8b5cf6

# Create 32x32
img32 = Image.new('RGB', (32, 32), bg_color)
draw32 = ImageDraw.Draw(img32)
try:
    font32 = ImageFont.truetype("arial.ttf", 24)
except:
    font32 = ImageFont.load_default()
draw32.text((16, 16), "EC", fill=text_color, anchor="mm", font=font32)
img32.save('favicon-32x32.png')

# Create 16x16
img16 = Image.new('RGB', (16, 16), bg_color)
draw16 = ImageDraw.Draw(img16)
try:
    font16 = ImageFont.truetype("arial.ttf", 12)
except:
    font16 = ImageFont.load_default()
draw16.text((8, 8), "EC", fill=text_color, anchor="mm", font=font16)
img16.save('favicon-16x16.png')

# Create apple-touch-icon 180x180
img180 = Image.new('RGB', (180, 180), bg_color)
draw180 = ImageDraw.Draw(img180)
try:
    font180 = ImageFont.truetype("arial.ttf", 120)
except:
    font180 = ImageFont.load_default()
draw180.text((90, 90), "EC", fill=text_color, anchor="mm", font=font180)
img180.save('apple-touch-icon.png')

# For ICO, create from 32x32
img32.save('favicon.ico')
