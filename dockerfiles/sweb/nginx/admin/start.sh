#!/bin/sh
set -e

echo "Comprobando configuración nginx..."
nginx -t

echo "Arrancando nginx en foreground..."
exec nginx -g 'daemon off;'