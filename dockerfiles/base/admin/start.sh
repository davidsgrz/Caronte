#!/bin/bash
#carga las variables de entronno desde el docker compose
set -e

check_usuario() {
    if grep -q "${USUARIO}" /etc/passwd
    then
                echo "El usuario ${USUARIO} existe" >> /root/logs/informe.log
                return 1
    else
                echo "El usuario ${USUARIO} no existe" >> /root/logs/informe.log
                return 0
    fi
}
check_home() {
        if [ ! -d "/home/${USUARIO}" ]
        then
                echo "/home/${USUARIO} no existe" >> /root/logs/informe.log
                return 0
        else
                echo "/home/${USUARIO} existe" >> /root/logs/informe.log
                return 1
        fi
}

newUser() {
        check_usuario
        if [ "$?" -eq 0 ]
        then
            check_home
            if [ "$?" -eq 0 ]
            then
                    useradd -rm -d "/home/${USUARIO}" -s /bin/bash "${USUARIO}"
                    echo "${USUARIO}:${PASSWORD}" | chpasswd
                    echo "BIENVENIDO ${USUARIO}..." > /home/"${USUARIO}"/BIENVENIDA_DAVID.txt
            else
                    echo "${USUARIO} no creado,existe home" >> /root/logs/informe.log
            fi
            else
                    echo "${USUARIO} no creado,existe en psswd" >> /root/logs/informe.log
        fi
}

main() {
    mkdir -p /root/logs
    touch /root/logs/informe.log
    newUser
#Encargada de mantener el contenedor en ejecución y que no muera
    tail -f /dev/null
}

main
   
