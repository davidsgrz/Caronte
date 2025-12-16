#!/bin/sh
set -e

cd /root/admin/node/proyectos/iaw

echo "Arrancando Node..."
exec node app.js
