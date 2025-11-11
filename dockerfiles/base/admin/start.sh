#!/bin/bash
#carga las variables de entronno desde el docker compose
set -e

newUser() {
        useradd -rm -d /home/${USUARIO} -s /bin/bash ${USUARIO}
        echo "${USUARIO}:${PASSWORD}" | chpasswd
        echo "BIENVENIDO ${USUARIO}..." >> /home/${USUARIO}/BIENVENIDA_DAVID.txt
}

main() {
    newUser
#Encargada de mantener el contenedor en ejecución y que no muera
    tail -f /dev/null
}

main
   
