import os
from PIL import Image

def resize_image(src, dest, size):
    if not os.path.exists(src):
        return
    img = Image.open(src)
    img = img.resize((size, size), Image.Resampling.LANCZOS)
    img.save(dest)

# For Google, the main favicon needs to be a multiple of 48
# 192x192 is 48 * 4, which is perfect for Google Search and also Android
resize_image("public/favicon.png", "public/favicon-v2.png", 192)
resize_image("public/favicon.png", "public/apple-touch-icon-v2.png", 180)
