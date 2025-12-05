---
title: comandos IP
---

# Comandos IP

El comando `ip` es una herramienta poderosa y versátil utilizada para gestionar y configurar interfaces de red, rutas y túneles en sistemas basados en Unix/Linux. Forma parte del paquete `iproute2` y es el sucesor moderno de comandos más antiguos como `ifconfig` y `route`.

## Uso básico

El comando básico para usar `ip` es el siguiente:

```bash
ip [opciones] objeto comando [argumentos]
```

Donde:
- `objeto`: Especifica el tipo de objeto que deseas gestionar, como `link` (interfaces de red), `addr` (direcciones IP), `route` (rutas), entre otros.
  - `link` → interfaz física (Ethernet/WiFi)
  - `addr` → direcciones IP
  - `route` → tabla de rutas
  - `neigh` → caché ARP/NDP
  - `maddr` → multicast
  - `rule` → reglas de routing avanzado
- `comando`: Especifica la acción que deseas realizar, como `show` (mostrar), `add` (agregar), `del` (eliminar), etc.
- `argumentos`: Son los parámetros adicionales necesarios para el comando específico.

## Ejemplos comunes

### Mostrar interfaces de red

Para mostrar todas las interfaces de red y su estado, puedes usar:

```bash
ip a
```

O más detalladamente:

```bash
ip addr show
```

Mostrará una lista de todas las interfaces de red, junto con su estado (UP/DOWN), dirección MAC y otra información relevante. Se vería algo así:

```nginx
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever

2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 3c:52:82:1a:b3:7e brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.45/24 brd 192.168.100.255 scope global dynamic noprefixroute enp3s0
       valid_lft 86312sec preferred_lft 86312sec
    inet6 fe80::3e52:82ff:fe1a:b37e/64 scope link 
       valid_lft forever preferred_lft forever

3: wlp2s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 4a:7c:12:9d:24:11 brd ff:ff:ff:ff:ff:ff

4: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:6f:c1:12:83 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
``` 

Esto muestra las interfaces de red disponibles, sus direcciones IP y su estado actual.

#### Interpretación de resultados

Al interpretar los resultados de `ip addr show`, hay varios aspectos a considerar:
- **Número de interfaz**: El número al inicio (por ejemplo, `1: lo`, `2: enp3s0`) indica el identificador de la interfaz.
- **Estado de la interfaz**: Las etiquetas entre `< >` indican el estado y las capacidades de la interfaz (por ejemplo, `UP`, `DOWN`, `BROADCAST`, `MULTICAST`).
- **Dirección MAC**: La dirección física de la interfaz, mostrada después de `link/ether`.
- **Direcciones IP**: Las direcciones IPv4 e IPv6 asignadas a la interfaz, junto con su prefijo de red (por ejemplo, `/24` para IPv4).

La interfaz `lo` es la interfaz de loopback, utilizada para la comunicación interna del sistema. Las demás interfaces, como `enp3s0` y `wlp2s0`, representan interfaces físicas o virtuales de red. La interfaz `docker0` es una interfaz virtual creada por Docker para la comunicación entre contenedores.

### Asignar una dirección IP a una interfaz

Para asignar una dirección IP a una interfaz específica, puedes usar el siguiente comando:

```bash
sudo ip addr add 192.168.1.50/24 dev enp3s0
```

Este comando asigna la dirección IP `192.168.1.50` con una máscara de subred `/24` a la interfaz `enp3s0`.

### Eliminar una dirección IP de una interfaz

Para eliminar una dirección IP de una interfaz, puedes usar:

```bash
sudo ip addr del 192.168.1.50/24 dev enp3s0
```

Este comando elimina la dirección IP `192.168.1.50` de la interfaz `enp3s0`.

### Mostrar la tabla de rutas

Para mostrar la tabla de rutas del sistema, puedes usar:

```bash
ip route show
```

Esto mostrará las rutas configuradas en el sistema, incluyendo la ruta predeterminada y las rutas específicas para diferentes redes.

### Agregar una ruta

Para agregar una ruta a una red específica, puedes usar:

```bash
sudo ip route add 10.0.0.0/24 via 192.168.1.1
```

Este comando agrega una ruta para la red `10.0.0.0/24` a través del gateway `192.168.1.1`.

### Eliminar una ruta

Para eliminar una ruta, puedes usar:

```bash
sudo ip route del 10.0.0.0/24 via 192.168.1.1
```

Este comando elimina la ruta para la red `10.0.0.0/24` que pasa por el gateway `192.168.1.1`.

## Conclusión

El comando `ip` es una herramienta esencial para la gestión de redes en sistemas Unix/Linux. Su versatilidad y potencia permiten a los administradores de sistemas y usuarios avanzados configurar y supervisar sus interfaces de red, direcciones IP y rutas de manera eficiente. Familiarizarse con este comando es fundamental para cualquier persona que trabaje con redes en entornos basados en Unix.

Hay muchas más opciones y funcionalidades disponibles con el comando `ip`, por lo que se recomienda consultar la página del manual (`man ip`) para obtener información detallada sobre todas sus capacidades.
