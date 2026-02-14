# Image Compression Script for Green Falls Website
# Converts large PNG/JPG images to optimized WebP format

Write-Host "🖼️  GREEN FALLS IMAGE COMPRESSION TOOL" -ForegroundColor Green
Write-Host "=" * 50

# Check if Sharp CLI is available (best quality WebP converter)
$sharpAvailable = $false
try {
    npm list -g sharp-cli 2>&1 | Out-Null
    $sharpAvailable = $true
    Write-Host "✅ Sharp CLI found" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Installing Sharp CLI for high-quality compression..." -ForegroundColor Yellow
    npm install -g sharp-cli
    $sharpAvailable = $true
}

# Find all large images (>500KB)
Write-Host "`n📊 Scanning for large images..." -ForegroundColor Cyan
$assetsPath = "src/assets"
$largeImages = Get-ChildItem -Path $assetsPath -Recurse -Include *.png,*.jpg,*.jpeg | Where-Object { $_.Length -gt 512000 }

Write-Host "Found $($largeImages.Count) images larger than 500KB`n" -ForegroundColor Yellow

$totalSaved = 0
$processedCount = 0

foreach ($image in $largeImages) {
    $originalSize = [math]::Round($image.Length / 1KB, 2)
    $outputPath = $image.FullName -replace '\.(png|jpg|jpeg)$', '_optimized.webp'
    
    Write-Host "Processing: $($image.Name) ($originalSize KB)" -ForegroundColor White
    
    try {
        # Use Sharp CLI for best quality
        if ($sharpAvailable) {
            npx sharp-cli -i "$($image.FullName)" -o "$outputPath" --webp-quality 82 --webp-effort 6
        } else {
            # Fallback to ImageMagick if available
            magick "$($image.FullName)" -quality 82 -define webp:method=6 "$outputPath"
        }
        
        if (Test-Path $outputPath) {
            $newSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
            $saved = $originalSize - $newSize
            $savedPercent = [math]::Round(($saved / $originalSize) * 100, 1)
            $totalSaved += $saved
            $processedCount++
            
            Write-Host "  ✓ Compressed: $originalSize KB → $newSize KB (saved ${savedPercent}%)" -ForegroundColor Green
            
            # Replace original if compression is good (>20% savings)
            if ($savedPercent -gt 20) {
                $backupPath = $image.FullName + ".backup"
                Move-Item $image.FullName $backupPath -Force
                Move-Item $outputPath ($image.FullName -replace '\.(png|jpg|jpeg)$', '.webp') -Force
                Write-Host "  📦 Backed up original as: $($image.Name).backup" -ForegroundColor Gray
            }
        }
    } catch {
        Write-Host "  ✗ Error: $_" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "`n" + ("=" * 50)
Write-Host "🎉 COMPRESSION COMPLETE!" -ForegroundColor Green
Write-Host "Processed: $processedCount images"
Write-Host "Total saved: $([math]::Round($totalSaved / 1024, 2)) MB"
Write-Host "`n⚡ Your website will load MUCH faster now!" -ForegroundColor Cyan
