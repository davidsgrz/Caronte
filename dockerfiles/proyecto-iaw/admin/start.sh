#!/bin/bash

set -e


directorio_trabajo(){
    cd /root/admin/node/proyectos/piaw
}

crear_copiar(){
    npm install
    npm run build
    cp -r dist/* /var/www/html/
}

cargar_nginx(){
    nginx -t
    nginx -g 'daemon off;'
}


main(){
    directorio_trabajo
    crear_copiar
    cargar_nginx
}

main