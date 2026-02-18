
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const reportPath = path.join(rootDir, 'image_usage_report.json');
const backupDir = path.join(rootDir, 'unused_assets_cleanup');

if (!fs.existsSync(reportPath)) {
    console.error("Report file not found!");
    process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const unusedFiles = report.unused;

if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
}

console.log(`Moving ${unusedFiles.length} unused files to ${backupDir}...`);

let movedCount = 0;
unusedFiles.forEach(relPath => {
    const fullPath = path.join(rootDir, relPath);

    // Construct backup path, preserving folder structure (optional, flat might be messy due to name collisions)
    // Let's preserve folder structure to avoid collision "img1.webp" from different folders.
    const destPath = path.join(backupDir, relPath.replace(/^src\\assets\\/, '').replace(/^src\/assets\//, ''));

    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    try {
        if (fs.existsSync(fullPath)) {
            fs.renameSync(fullPath, destPath);
            movedCount++;
        }
    } catch (e) {
        console.error(`Failed to move ${relPath}: ${e.message}`);
    }
});

console.log(`Successfully moved ${movedCount} files.`);
// Remove empty directories in src/assets
// (Exercise for later if needed, but keeping them is harmless)
