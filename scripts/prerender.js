import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/reviews',
    '/blog',
    '/gallery',
    '/contact',
    '/terms',
    '/privacy',
    // Services
    '/services/landscape-design',
    '/services/terrace-garden',
    '/services/lawn-installation',
    '/services/vertical-garden',
    '/services/water-features',
    '/services/gazebo-garden',
    '/services/commercial-landscaping',
    '/services/garden-maintenance',
    '/services/rock-garden',
    '/services/cascade-design',
    // Projects
    '/projects/semmozhi-poonga',
    '/projects/moongilkaadu',
    '/projects/abhasa',
    '/projects/gujans-paripalana',
    '/projects/ktvr-knowledge-park',
    '/projects/srivari-villas',
    '/projects/abhasa-wellness-sowripalayam',
    '/projects/aswath-associates',
    '/projects/maheshwari-marbles'
];

async function main() {
    console.log('Starting preview server...');

    // Start vite preview
    const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
        cwd: path.resolve(__dirname, '..'),
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe']
    });

    let port = 4173;
    let serverReady = false;

    // Listen for output to know when ready
    server.stdout.on('data', (data) => {
        const output = data.toString();
        // console.log(`[Preview]: ${output.trim()}`); // Uncomment to debug
        if (output.includes('Local:')) {
            const match = output.match(/Local:\s+http:\/\/localhost:(\d+)/);
            if (match) {
                port = parseInt(match[1]);
                serverReady = true;
            } else {
                // Fallback or default found
                serverReady = true;
            }
        }
    });

    server.stderr.on('data', (data) => {
        // console.error(`[Preview Error]: ${data.toString()}`)
    });

    console.log('Waiting for server...');
    // Wait up to 10s for server
    for (let i = 0; i < 20; i++) {
        if (serverReady) break;
        await new Promise(r => setTimeout(r, 500));
    }

    console.log(`Server assumed ready at port ${port}`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Mock Googlebot
    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    for (const route of routes) {
        const url = `http://localhost:${port}${route}`;
        console.log(`Prerendering: ${route}`);
        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait for React to mount and fetch data
            try {
                await page.waitForSelector('#root', { timeout: 5000 });
                // Check for footer to ensure full page loaded
                await page.waitForSelector('footer', { timeout: 5000 });
            } catch (e) {
                console.warn(`Timeout waiting for selector on ${route}, saving anyway...`);
            }

            // Wait a bit for animations
            await new Promise(r => setTimeout(r, 1000));

            const content = await page.content();

            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const filePath = path.join(distDir, routePath);

            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, content);
            console.log(`Saved: ${filePath}`);
        } catch (e) {
            console.error(`Error at ${route}:`, e);
        }
    }

    await browser.close();
    server.kill();
    process.exit(0);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
