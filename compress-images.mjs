import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🖼️  GREEN FALLS IMAGE COMPRESSION TOOL\n' + '='.repeat(50));

// Function to get file size in KB
const getFileSizeKB = (filePath) => {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(2);
};

// Function to recursively find all images
const findImages = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findImages(filePath, fileList);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            const sizeKB = parseFloat(getFileSizeKB(filePath));
            if (sizeKB > 500) { // Only process files larger than 500KB
                fileList.push({ path: filePath, size: sizeKB });
            }
        }
    });

    return fileList;
};

const assetsPath = join(__dirname, 'src', 'assets');
const largeImages = findImages(assetsPath);

console.log(`\n📊 Found ${largeImages.length} images larger than 500KB\n`);

let totalOriginal = 0;
let totalCompressed = 0;

// Process each image
for (const img of largeImages) {
    const imgDir = dirname(img.path);
    const imgName = path.basename(img.path, path.extname(img.path));
    const imgExt = path.extname(img.path);

    console.log(`Processing: ${path.basename(img.path)} (${img.size} KB)`);

    try {
        // Compress to WebP
        const webpFiles = await imagemin([img.path], {
            destination: imgDir,
            plugins: [
                imageminWebp({
                    quality: 80,
                    method: 6,
                })
            ]
        });

        if (webpFiles.length > 0) {
            const webpPath = webpFiles[0].destinationPath;
            const webpSize = parseFloat(getFileSizeKB(webpPath));
            const savedPercent = ((img.size - webpSize) / img.size * 100).toFixed(1);

            totalOriginal += img.size;
            totalCompressed += webpSize;

            console.log(`  ✓ WebP created: ${img.size} KB → ${webpSize} KB (saved ${savedPercent}%)`);

            // Also compress the original if it's PNG
            if (imgExt.toLowerCase() === '.png') {
                await imagemin([img.path], {
                    destination: imgDir,
                    plugins: [
                        imageminPngquant({
                            quality: [0.75, 0.85],
                        })
                    ]
                });
                console.log(`  ✓ PNG optimized`);
            }

            // Compress JPEG
            if (['.jpg', '.jpeg'].includes(imgExt.toLowerCase())) {
                await imagemin([img.path], {
                    destination: imgDir,
                    plugins: [
                        imageminMozjpeg({
                            quality: 82,
                        })
                    ]
                });
                console.log(`  ✓ JPEG optimized`);
            }
        }
    } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
    }

    console.log('');
}

const totalSaved = totalOriginal - totalCompressed;
const savedPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);

console.log('\n' + '='.repeat(50));
console.log('🎉 COMPRESSION COMPLETE!');
console.log(`Total original: ${(totalOriginal / 1024).toFixed(2)} MB`);
console.log(`Total WebP: ${(totalCompressed / 1024).toFixed(2)} MB`);
console.log(`Total saved: ${(totalSaved / 1024).toFixed(2)} MB (${savedPercent}%)`);
console.log('\n⚡ Your website will load MUCH faster now!');
