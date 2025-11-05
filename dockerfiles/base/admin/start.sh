#!/bin/bash



newUser() {
        useradd -rm -d /home/david -s /bin/bash david
    
    echo "david:1234" | chpasswd
    echo "BIENVENIDO DAVID..." >> /home/david/BIENVENIDA_DAVID.txt
}

main() {
    newUser
#Encargada de mantener el contenedor en ejecución y que no muera
    tail -f /dev/null
}

main
   
