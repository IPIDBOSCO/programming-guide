---
title: ping
---

# ping

La herramienta `ping` es una de las más básicas y útiles para diagnosticar problemas de conectividad en redes. Su función principal es enviar paquetes ICMP (Internet Control Message Protocol) a un host específico y esperar una respuesta. Esto permite verificar si el host está accesible y medir la latencia de la conexión.

## Uso básico

El comando básico para usar `ping` es el siguiente:

```bash
ping <dirección_ip_o_nombre_de_host>
```

Por ejemplo, para hacer ping a Google, puedes usar:

```bash
ping google.com
```

mostrará una salida similar a esta:

```nginx
PING google.com (74.125.138.102) 56(84) bytes of data.
64 bytes from yi-in-f102.1e100.net (74.125.138.102): icmp_seq=1 ttl=107 time=34.8 ms
64 bytes from yi-in-f102.1e100.net (74.125.138.102): icmp_seq=2 ttl=107 time=35.0 ms
64 bytes from yi-in-f102.1e100.net (74.125.138.102): icmp_seq=3 ttl=107 time=35.4 ms
64 bytes from yi-in-f102.1e100.net (74.125.138.102): icmp_seq=4 ttl=107 time=35.9 ms
64 bytes from yi-in-f102.1e100.net (74.125.138.102): icmp_seq=5 ttl=107 time=35.3 ms

--- google.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 8059ms
rtt min/avg/max/mdev = 34.782/35.284/35.874/0.370 ms
```

Esto enviará paquetes ICMP a `google.com` y mostrará el tiempo que tarda en recibir una respuesta. Para detener el comando, puedes presionar `Ctrl + C`.

### ¿Qué significan los resultados?

- `icmp_seq`: Número de secuencia del paquete ICMP enviado.
- `ttl`: Tiempo de vida del paquete, que indica cuántos saltos (routers) ha atravesado el paquete.
- `time`: Tiempo en milisegundos que tardó en recibir una respuesta.
- `packet loss`: Porcentaje de paquetes que no recibieron respuesta.

## Interpretación de resultados

Al interpretar los resultados de `ping`, hay varios aspectos a considerar:

- **Latencia**: Un tiempo de respuesta bajo (por ejemplo, menos de 100 ms) indica una buena conexión. Tiempos más altos pueden indicar congestión en la red o problemas de conectividad.
- **Pérdida de paquetes**: Si ves un porcentaje significativo de pérdida de paquetes, puede indicar problemas en la red, como congestión o fallos en el hardware.
- **TTL**: Un valor de TTL muy bajo puede indicar que el paquete está siendo redirigido a través de muchos routers, lo que puede aumentar la latencia.

## Opciones comunes

El comando `ping` tiene varias opciones útiles que puedes utilizar:

- `-c <número>`: Especifica el número de paquetes a enviar. Por ejemplo, `ping -c 4 google.com` enviará solo 4 paquetes, por defecto envía paquetes indefinidamente.
- `-i <segundos>`: Establece el intervalo entre el envío de cada paquete. Por defecto, es 1 segundo.
- `-s <tamaño>`: Especifica el tamaño del paquete en bytes. Por defecto, es 56 bytes.
- `-W`: Muestra solo el resumen al final, sin mostrar cada respuesta individual.
- `-q`: Modo silencioso, solo muestra el resumen al final.

Por ejemplo, si quieres enviar 5 paquetes, en intervalos de medio segundo, sería:

```bash
ping -c 5 -i 0.5 google.com
```

::: tip 💡 Ayuda
Puedes consultar más opciones ejecutando `ping --help` o revisando la página del manual con `man ping`.
:::
