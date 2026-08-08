$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Venv = Join-Path $Root ".venv"
Write-Host "`nSuno Apothecary Vocal Splitter · First-time setup`n" -ForegroundColor Yellow
if (-not (Get-Command py -ErrorAction SilentlyContinue)) { throw "Python is required. Install Python 3.11 or 3.12, then run this again." }
if (-not (Test-Path $Venv)) { py -3.11 -m venv $Venv }
$Python = Join-Path $Venv "Scripts\python.exe"
& $Python -m pip install --upgrade pip
& $Python -m pip install torch torchaudio demucs
Write-Host "`nThe local two-stem engine is ready. Run start.ps1 whenever you want to split a song.`n" -ForegroundColor Green
