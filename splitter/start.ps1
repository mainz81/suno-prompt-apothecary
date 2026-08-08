$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Python = Join-Path $Root ".venv\Scripts\python.exe"
if (-not (Test-Path $Python)) { Write-Host "Run setup.ps1 first." -ForegroundColor Yellow; Read-Host; exit 1 }
$env:SUNO_SPLITTER_PYTHON = $Python
Start-Process "http://127.0.0.1:47921"
node (Join-Path $Root "server.mjs")
