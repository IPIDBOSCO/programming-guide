---
title: SSH (Secure Shell)
---

# SSH (Secure Shell)

SSH, o Secure Shell, es un protocolo de red que permite la comunicación segura entre dos dispositivos a través de una red no segura, como Internet. Fue desarrollado en 1995 por Tatu Ylönen como una alternativa segura a los protocolos de acceso remoto no cifrados, como Telnet y rlogin. SSH utiliza técnicas de cifrado para garantizar la confidencialidad e integridad de los datos transmitidos, así como la autenticación de los usuarios.

El protocolo SSH opera en el puerto 22 por defecto y se utiliza comúnmente para acceder de forma remota a servidores, administrar sistemas y transferir archivos de manera segura.

## Características principales de SSH

- **Cifrado**: SSH utiliza algoritmos de cifrado robustos, como AES (Advanced Encryption Standard) y RSA (Rivest-Shamir-Adleman), para proteger los datos transmitidos entre el cliente y el servidor.
- **Autenticación**: SSH soporta varios métodos de autenticación, incluyendo contraseñas, claves públicas y privadas, y autenticación basada en certificados.
- **Integridad de datos**: SSH utiliza códigos de autenticación de mensajes (MAC) para garantizar que los datos no hayan sido alterados durante la transmisión.
- **Túneles seguros**: SSH permite la creación de túneles seguros para redirigir el tráfico de red a través de una conexión cifrada, lo que es útil para proteger aplicaciones que no tienen cifrado nativo.
- **Transferencia de archivos**: SSH incluye herramientas como SCP (Secure Copy) y SFTP (SSH File Transfer Protocol) para la transferencia segura de archivos entre dispositivos.

## Usos comunes de SSH

El uso más común de SSH es el acceso remoto a servidores y sistemas, lo que permite a los administradores gestionar y configurar sistemas de forma segura desde cualquier ubicación.

Por ejemplo, un administrador de sistemas puede utilizar SSH para iniciar sesión en un servidor Linux y ejecutar comandos, editar archivos de configuración y supervisar el rendimiento del sistema. El comando básico para conectarse a un servidor remoto utilizando SSH es:

```bash
ssh usuario@direccion_ip_o_dominio
```

Además del acceso remoto, SSH se utiliza para:

- **Transferencia segura de archivos**: Utilizando SCP o SFTP para copiar archivos entre dispositivos de manera segura.
- **Túneles SSH**: Redirigir el tráfico de aplicaciones a través de una conexión SSH cifrada.
- **Automatización de tareas**: Utilizando scripts que emplean SSH para realizar tareas administrativas de forma automática.
- **Acceso a redes privadas**: Utilizando SSH para acceder a recursos en una red privada a través de una conexión segura.

SSH es una herramienta esencial para la administración de sistemas y la seguridad en redes, y su uso se ha vuelto estándar en entornos de TI debido a su capacidad para proteger las comunicaciones y garantizar la integridad de los datos.

## Creación de claves SSH

Una de las características más poderosas de SSH es el uso de claves públicas y privadas para la autenticación. Este método es más seguro que el uso de contraseñas, ya que las claves son mucho más difíciles de adivinar o comprometer. Para crear un par de claves SSH, se puede utilizar el siguiente comando en una terminal:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@ejemplo.com"
```

Este comando genera un par de claves RSA de 4096 bits, generalmente se guardan en la carpeta `~/.ssh/`. Cuando se está creando una clave ssh, se puede optar por añadir una frase de contraseña (passphrase) para mayor seguridad.

La clave pública se puede copiar al servidor remoto de destino, el proceso para registrar la clave pública varia según la plataforma que se use. Una vez que la clave pública está en el servidor, se puede iniciar sesión sin necesidad de una contraseña, siempre que se tenga acceso a la clave privada correspondiente.

Si se desea remover el acceso por clave pública, simplemente se debe eliminar la clave pública en el servidor remoto.

::: tip 🗒️ Nota
En sistemas basados en Unix/Linux, el ssh suele estar preinstalado. En Windows, se puede utilizar el cliente SSH integrado en PowerShell o instalar herramientas como PuTTY o Git Bash que incluyen soporte para SSH.
:::
