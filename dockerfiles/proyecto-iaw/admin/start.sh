#!/bin/bash    
cd /root/admin/node/proyectos/iawprojects
# Instalar dependencias
npm install;
npm run build    
cp -r dist/* /var/www/html/
nginx -t
# Iniciar Nginx
nginx -g 'daemon off;'

