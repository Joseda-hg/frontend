Set-Location C:\DevSpace\Joseda.dev\frontend
npm run build
Remove-Item -Path C:\DevSpace\Joseda.dev\backend\build -Recurse
Move-Item -Path C:\DevSpace\Joseda.dev\frontend\build -Destination C:\DevSpace\Joseda.dev\backend\build 

sleep 3000