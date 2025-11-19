#!/bin/bash
set -e

make_ssh(){
    sed -i 's/#Port 22/Port 2345/' /etc/ssh/sshd_config
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /
}


#etc/init.d/ssh start &
#exec /usr/sbin/sshd -D &  #dejar ssh en background