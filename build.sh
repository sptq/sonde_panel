#/bin/bash
git reset --hard HEAD
git pull

npm install
npm run build

cd web

npm install
npm run build

cd ..

pm2 restart all