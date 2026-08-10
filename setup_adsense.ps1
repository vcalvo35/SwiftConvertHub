Set-Location "C:\Users\XPC\Documents\GitHub\SwiftConvertHub"

$adsenseScript = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6069037516718532" crossorigin="anonymous"></script>'
$adsenseMeta   = '<meta name="google-adsense-account" content="ca-pub-6069037516718532">'
$injection     = "  $adsenseMeta`n  $adsenseScript"

$htmlFiles = Get-ChildItem -Recurse -Filter "*.html"
$count = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($content -match 'ca-pub-6069037516718532') { continue }
    $newContent = $content -replace '(?i)(<head(?:\s[^>]*)?>)', "`$1`n$injection"
    if ($newContent -ne $content) {
        Set-Content $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
        $count++
    }
}
Write-Host "AdSense injected into $count HTML files"

$adsTxtPath = "ads.txt"
$adsEntry   = "google.com, pub-6069037516718532, DIRECT, f08c47fec0942fa0"
if (Test-Path $adsTxtPath) {
    $existing = Get-Content $adsTxtPath -Raw
    if ($existing -notmatch 'pub-6069037516718532') {
        Add-Content $adsTxtPath "`n$adsEntry"
        Write-Host "ads.txt updated"
    } else {
        Write-Host "ads.txt already has AdSense entry"
    }
} else {
    Set-Content $adsTxtPath -Value $adsEntry -Encoding UTF8
    Write-Host "ads.txt created"
}

Write-Host "`nVerification:"
$hits = Get-ChildItem -Recurse -Filter "*.html" | Select-String -Pattern "ca-pub-6069037516718532" -List | Measure-Object | Select-Object -ExpandProperty Count
Write-Host "  HTML files with AdSense: $hits"
Get-Content $adsTxtPath

git add -A
git commit -m "Add Google AdSense script, meta tag, and ads.txt to all pages"
git push
