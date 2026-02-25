import os
from PIL import Image

def convert_to_ico(src, dest):
    if not os.path.exists(src):
        print(f"File {src} not found.")
        return
    img = Image.open(src)
    # The recommended sizes for ICO are 16x16, 32x32, 48x48, 64x64, 128x128, 256x256
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    img.save(dest, format='ICO', sizes=icon_sizes)
    print(f"Successfully created {dest}")

convert_to_ico("public/logo.png", "public/favicon.ico")
