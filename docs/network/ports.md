---
title: Puertos de red
---

# Puertos de red

En el contexto de las redes informáticas, un puerto es un punto de comunicación lógico que permite a los dispositivos enviar y recibir datos a través de una red. Los puertos son utilizados por los protocolos de transporte, como TCP (Transmission Control Protocol) y UDP (User Datagram Protocol), para identificar aplicaciones o servicios específicos en un dispositivo.

## Tipos de puertos

Existen dos tipos principales de puertos:

1. **Puertos TCP**: Utilizados por el protocolo TCP, que es orientado a la conexión y garantiza la entrega de datos en el orden correcto. Los puertos TCP son comúnmente utilizados para aplicaciones que requieren una comunicación confiable, como la navegación web (puerto 80 para HTTP y puerto 443 para HTTPS), el correo electrónico (puerto 25 para SMTP) y la transferencia de archivos (puerto 21 para FTP).

2. **Puertos UDP**: Utilizados por el protocolo UDP, que es sin conexión y no garantiza la entrega de datos. Los puertos UDP son comúnmente utilizados para aplicaciones que requieren una comunicación rápida y eficiente, como la transmisión de video en tiempo real, los juegos en línea y el DNS (puerto 53).

## Rango de puertos

Los puertos se identifican mediante números que van desde 0 hasta 65535. Estos números se dividen en tres rangos principales:

- **Puertos bien conocidos (0-1023)**: Estos puertos están reservados para servicios y aplicaciones estándar, como HTTP (puerto 80), HTTPS (puerto 443), FTP (puerto 21) y SSH (puerto 22).
- **Puertos registrados (1024-49151)**: Estos puertos están asignados a aplicaciones y servicios específicos que no son tan comunes como los que utilizan los puertos bien conocidos.
- **Puertos dinámicos o privados (49152-65535)**: Estos puertos son utilizados por aplicaciones y servicios temporales o personalizados, y no están asignados oficialmente a ningún servicio.

## Uso de puertos

Los puertos permiten que múltiples aplicaciones y servicios funcionen simultáneamente en un mismo dispositivo sin interferir entre sí. Por ejemplo, un servidor web puede utilizar el puerto 80 para manejar solicitudes HTTP, mientras que un servidor de correo electrónico en el mismo dispositivo puede utilizar el puerto 25 para enviar correos electrónicos.

Cuando un dispositivo envía datos a través de una red, incluye el número de puerto en la cabecera del paquete de datos para indicar a qué aplicación o servicio deben dirigirse esos datos. El dispositivo receptor utiliza este número de puerto para enrutar los datos al proceso adecuado.

```
http://direccion_ip:puerto
```

Por ejemplo, para acceder a un servidor web que escucha en el puerto 8080 en la ip 10.0.0.5, se utilizaría una URL como `http://10.0.0.5:8080`.

## Seguridad y puertos

El uso de puertos también tiene implicaciones de seguridad. Los puertos abiertos en un dispositivo pueden ser objetivos para ataques cibernéticos, ya que los atacantes pueden intentar explotar vulnerabilidades en los servicios que escuchan en esos puertos. Por lo tanto, es importante gestionar y monitorear los puertos abiertos en un dispositivo o red, utilizando firewalls y otras medidas de seguridad para proteger contra accesos no autorizados.

Además, es recomendable cerrar los puertos que no se utilizan para minimizar la superficie de ataque y reducir el riesgo de comprometer la seguridad de la red.

## Port forwarding

El port forwarding, o redirección de puertos, es una técnica utilizada para permitir el acceso a servicios específicos en una red privada desde una red externa, como Internet. Esto se logra configurando un router o firewall para redirigir las solicitudes entrantes en un puerto específico hacia una dirección IP y puerto internos en la red privada. Por ejemplo, si se tiene un servidor web alojado en una red doméstica y se desea acceder a él desde Internet, se puede configurar el router para redirigir las solicitudes entrantes en el puerto 80 hacia la dirección IP interna del servidor web.

El port forwarding es comúnmente utilizado para alojar servidores de juegos, servidores web, cámaras de seguridad y otros servicios accesibles desde fuera de la red local. Sin embargo, es importante configurar el port forwarding de manera segura para evitar exponer servicios sensibles a posibles ataques desde el exterior.
