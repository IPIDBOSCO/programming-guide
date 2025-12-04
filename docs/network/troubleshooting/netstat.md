---
title: Netstat
---

# Netstat

La herramienta `netstat` (network statistics) es una utilidad de red que proporciona información sobre las conexiones de red activas, las tablas de enrutamiento y las estadísticas de la interfaz. Es una herramienta esencial para monitorear el estado de la red y diagnosticar problemas relacionados con las conexiones.

::: danger ⚠️ IMPORTANTE
En sistemas modernos, `netstat` puede estar obsoleto y ser reemplazado por herramientas como `ss` (socket statistics) que ofrecen funcionalidades similares con mejor rendimiento. Aquí vamos a usar `ss` como alternativa recomendada.
:::

## Uso básico

El comando básico para usar `ss` es el siguiente:

```bash
ss [opciones]
```

Por ejemplo, para ver todas las conexiones de red activas, puedes usar:

```bash
ss -t state established
```

Esto mostrará una lista de todas las conexiones de red, incluyendo las conexiones TCP y UDP, junto con sus estados.

```nginx
Netid State      Recv-Q Send-Q   Local Address:Port               Peer Address:Port
nl    UNCONN     0      0        rtnl:kernel                      *
nl    UNCONN     0      0        rtnl:route                       *
nl    UNCONN     0      0        rtnl:link                        *
udp   UNCONN     0      0        0.0.0.0:68                       0.0.0.0:*
udp   UNCONN     0      0        127.0.0.1:5353                   0.0.0.0:*
tcp   LISTEN     0      128      0.0.0.0:22                       0.0.0.0:*
tcp   LISTEN     0      128      127.0.0.1:5432                   0.0.0.0:*
tcp   ESTAB      0      0        192.168.1.10:22                  192.168.1.25:54321
unix  LISTEN     0      5        /run/systemd/journal/stdout      *
unix  LISTEN     0      70       /run/user/1000/bus               *               
```

## Opciones comunes

El comando `ss` tiene varias opciones útiles que puedes utilizar:
- `-a`: Muestra todas las conexiones y puertos de escucha.
- `-t`: Muestra solo las conexiones TCP.
- `-u`: Muestra solo las conexiones UDP.
- `-n`: Muestra las direcciones y puertos en formato numérico, evitando la resolución de nombres.
- `-p`: Muestra el PID y el nombre del programa al que pertenece cada conexión (requiere permisos de superusuario).
- `-r`: Muestra la tabla de enrutamiento.
- `-i`: Muestra las estadísticas de las interfaces de red.
- `-s`: Muestra estadísticas de protocolos.

Por ejemplo, si ejecutamos `ss -tunlp`, obtendremos una lista de todas las conexiones TCP y UDP en estado de escucha, junto con los programas asociados.

```nginx
ss -tunlp
Netid       State        Recv-Q  Send-Q     Local Address:Port           Peer Address:Port        Process
udp         UNCONN       0       0              0.0.0.0:5353                 0.0.0.0:*            
udp         UNCONN       0       0              0.0.0.0:68                   0.0.0.0:*            
udp         UNCONN       0       0            127.0.0.1:123                  0.0.0.0:*             users:(("chronyd",pid=512,fd=5))
udp         UNCONN       0       0                 [::]:5353                   [::]:*               
udp         UNCONN       0       0                [::1]:123                    [::]:*              users:(("chronyd",pid=512,fd=6))
tcp         LISTEN       0       128            0.0.0.0:22                  0.0.0.0:*              users:(("sshd",pid=820,fd=3))
tcp         LISTEN       0       128          127.0.0.1:5432                0.0.0.0:*              users:(("postgres",pid=1042,fd=7))
tcp         LISTEN       0       128          127.0.0.1:631                 0.0.0.0:*             
tcp         LISTEN       0       128               [::]:22                     [::]:*              users:(("sshd",pid=820,fd=4))
tcp         LISTEN       0       128              [::1]:631                    [::]:*               
tcp         LISTEN       0       128              [::1]:8000                   [::]:*              users:(("python3",pid=2150,fd=9))
```

::: tip 💡 Ayuda
Para ver todas las opciones disponibles para `ss`, puedes consultar la página del manual ejecutando `ss --help` o `man ss` en la terminal.
:::

## Interpretación de resultados

Al interpretar los resultados de `ss`, hay varios aspectos a considerar:
- **Netid**: Indica el tipo de conexión (tcp, udp, unix, etc.).
- **State**: Muestra el estado de la conexión (LISTEN, ESTAB, UNCONN, etc.).
- **Local Address:Port**: Muestra la dirección local y el puerto asociado a la conexión.
- **Peer Address:Port**: Muestra la dirección remota y el puerto asociado a la conexión.
- **Process**: Muestra el nombre del programa y el PID asociado a la conexión (si se usa la opción `-p`).

## Consideraciones adicionales

- `ss` puede requerir permisos de superusuario para mostrar cierta información, especialmente al usar la opción `-p`.
- La herramienta `ss` es más rápida y eficiente que `netstat`, especialmente en sistemas con muchas conexiones activas.
- En sistemas donde `netstat` aún está disponible, puedes usarlo de manera similar, pero se recomienda migrar a `ss` para un mejor rendimiento y funcionalidad.
