
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const assetsDir = path.join(srcDir, 'assets');

// Helper to recursively list files
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// 1. Get all actual image files in src/assets
const allAssetFiles = getAllFiles(assetsDir).filter(f => /\.(png|jpg|jpeg|webp|svg)$/i.test(f));
console.log(`Total image files in src/assets: ${allAssetFiles.length}`);

// 2. Scan source code for references
const sourceFiles = getAllFiles(srcDir).filter(f => /\.(tsx|ts|js|jsx|css|scss|html)$/i.test(f));

let content = "";
sourceFiles.forEach(f => {
    content += fs.readFileSync(f, 'utf8') + "\n";
});

// 3. Check usage
const usedFiles = [];
const unusedFiles = [];

allAssetFiles.forEach(filePath => {
    // Normalize path to check against code imports
    // Code usually uses "@/assets/..." or usage like "assets/..."
    // We want to match the part after "assets" essentially, or the full name if unique.

    const relativeToAssets = path.relative(assetsDir, filePath).replace(/\\/g, '/');
    const filename = path.basename(filePath);

    // We search for the relative path (most robust) or just filename (fallback, but risky for dupes)
    // Imports are typically: "@/assets/Folder/file.webp" or "../assets/Folder/file.webp"

    // Create a few search patterns
    // 1. "Folder/file.webp" (common in partial strings)
    // 2. "file.webp" (if imported directly, though generic names like img1.webp are risky)

    // Given the project uses "@/assets/...", searching for the relative path from assets is best.
    // e.g. "Aswath assocites/img1.webp" inside the content.

    const searchPattern = relativeToAssets;

    if (content.includes(searchPattern)) {
        usedFiles.push(filePath);
    } else {
        // Double check filename alone? 
        // If content has "img1.webp", we don't know WHICH img1.webp it is.
        // But looking at previous greps, imports are explicit:
        // import ... from "@/assets/Gunjan Builders/img5.webp";
        // So the full relative path SHOULD be there.
        // There is one exception: dynamic imports or string construction.
        // "assets/services/landscape/" + imageKey
        // But `services-data.ts` has explicit keys that mapped to imports in `ServiceDetail.tsx`.

        // Let's assume explicit imports for now.
        unusedFiles.push(filePath);
    }
});

console.log(`Total used files: ${usedFiles.length}`);
console.log(`Total unused files: ${unusedFiles.length}`);

console.log("\n--- UNUSED FILES ---");
unusedFiles.forEach(f => console.log(path.relative(rootDir, f)));

// Create a list for the AI to read
const report = {
    used: usedFiles.map(f => path.relative(rootDir, f)),
    unused: unusedFiles.map(f => path.relative(rootDir, f))
};

fs.writeFileSync(path.join(rootDir, 'image_usage_report.json'), JSON.stringify(report, null, 2));
