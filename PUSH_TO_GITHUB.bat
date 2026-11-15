@echo off
setlocal
cd /d "%~dp0"
set "REPO=https://github.com/domnup/sergiu_constructii.git"

echo -------------------------------------------
echo Sergiu Constructii Proiect - GitHub upload
echo -------------------------------------------

where git >nul 2>&1
if errorlevel 1 (
  echo ERROR: Git is not installed or cannot be found in PATH.
  echo Install Git for Windows from https://git-scm.com/download/win
  goto :end
)

if not exist ".git" (
  git init
  if errorlevel 1 goto :failed
)

git branch -M main
if errorlevel 1 goto :failed

for /f "delims=" %%I in ('git remote get-url origin 2^>nul') do set "OLD_ORIGIN=%%I"
if defined OLD_ORIGIN (
  if /I not "%OLD_ORIGIN%"=="%REPO%" (
    echo ERROR: An origin remote already exists and points somewhere else:
    echo %OLD_ORIGIN%
    echo Please verify the remote before pushing.
    goto :end
  )
) else (
  git remote add origin "%REPO%"
  if errorlevel 1 goto :failed
)

git add -A
if errorlevel 1 goto :failed

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Initial Sergiu Constructii Proiect website"
  if errorlevel 1 (
    echo Commit failed. If Git asks for author identity, configure:
    echo git config --global user.name "Your Name"
    echo git config --global user.email "you@example.com"
    goto :failed
  )
)

git push -u origin main
if errorlevel 1 goto :failed

echo.
echo SUCCESS: Website files have been pushed to %REPO%
goto :end

:failed
echo.
echo Upload not completed. Check the Git error above.
:end
pause
endlocal
