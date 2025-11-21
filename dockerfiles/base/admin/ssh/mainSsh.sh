set -e

make_ssh(){
    sed -i 's/#Port 22/Port 2345/' /etc/ssh/sshd_config
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

    mkdir -p /home/${USUARIO}/.ssh
   # cp /root/common/id_ed25519.pub /home/${USUARIO}/.ssh/
    cat /root/common/id_rsa.pub >> /home/${USUARIO}/.ssh/authorized_keys
}

#etc/init.d/ssh start &
#exec /usr/sbin/sshd -D &  #dejar ssh en background