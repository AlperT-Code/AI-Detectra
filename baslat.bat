@echo off
title AI Detector - Sunucu
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Sunucu baslatiliyor...
echo Tarayicida ac: http://localhost:3000
echo Durdurmak icin bu pencerede Ctrl+C
echo.
start "" /min cmd /c "timeout /t 2 /nobreak >nul & start "" http://localhost:3000"
node server.js
pause
