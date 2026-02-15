
from PIL import Image
import os

def convert_logo():
    source_path = "public/logo.webp"
    
    if not os.path.exists(source_path):
        print(f"Error: {source_path} not found.")
        return

    try:
        img = Image.open(source_path)
        print(f"Opened {source_path}: size={img.size}, mode={img.mode}")
        
        # public/logo.png
        img.save("public/logo.png", format="PNG")
        print("Updated public/logo.png")
        
        # public/favicon.png
        img.save("public/favicon.png", format="PNG")
        print("Updated public/favicon.png")
        
        # public/apple-touch-icon.png
        img.save("public/apple-touch-icon.png", format="PNG")
        print("Updated public/apple-touch-icon.png")

        # public/favicon.ico
        # ICO usually needs specific sizes.
        icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
        img.save("public/favicon.ico", format="ICO", sizes=icon_sizes)
        print("Updated public/favicon.ico")
        
        # Also update src/assets/logo.png just in case
        if os.path.exists("src/assets"):
            img.save("src/assets/logo.png", format="PNG")
            print("Updated src/assets/logo.png")

    except Exception as e:
        print(f"Failed to convert: {e}")

if __name__ == "__main__":
    convert_logo()
