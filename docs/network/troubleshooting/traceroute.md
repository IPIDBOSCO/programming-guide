---
title: Traceroute
---

# Traceroute

La herramienta `traceroute` es una utilidad de red que permite rastrear la ruta que toman los paquetes de datos desde tu computadora hasta un destino específico en la red. Es especialmente útil para diagnosticar problemas de conectividad y para identificar dónde pueden estar ocurriendo retrasos o bloqueos en la ruta hacia un host.

## Uso básico

El comando básico para usar `traceroute` es el siguiente:

```bash
traceroute <dirección_ip_o_nombre_de_host>
```

::: info 📝 Nota para usuarios de Windows
En Windows, la herramienta equivalente a `traceroute` se llama `tracert`. El uso básico es similar:

```powershell
tracert <dirección_ip_o_nombre_de_host>
```
:::

Por ejemplo, para rastrear la ruta hacia Google, puedes usar:

```bash
traceroute google.com
```

Esto mostrará una salida similar a esta:

```nginx
traceroute to google.com (x.x.x.x), 30 hops max, 60 byte packets
 1  router.local (x.x.x.x)  1.123 ms  0.987 ms  1.045 ms
 2  isp-gateway.example (x.x.x.x)  10.456 ms  10.789 ms  11.123 ms
 3  ...
 ...
```

Cada línea representa un "salto" (hop) en la ruta hacia el destino, mostrando la dirección IP del router y los tiempos de respuesta para cada intento.

## Interpretación de resultados

Al interpretar los resultados de `traceroute`, hay varios aspectos a considerar:
- **Hops**: Cada línea numerada representa un salto en la ruta. El número de saltos puede indicar la distancia (en términos de routers) entre tu computadora y el destino.
- **Tiempos de respuesta**: Los tiempos (en milisegundos) indican cuánto tiempo tardó cada paquete en llegar a ese salto y regresar. Tiempos altos pueden indicar congestión o problemas en esa parte de la red.
- **Asteriscos (*)**: Si ves asteriscos en lugar de tiempos, significa que no se recibió respuesta del router en ese salto. Esto puede deberse a que el router está configurado para no responder a solicitudes de traceroute, o a problemas de conectividad.

## Opciones comunes

El comando `traceroute` tiene varias opciones útiles que puedes utilizar:
- `-m <número>`: Establece el número máximo de saltos (hops) que se rastrearán. Por defecto, es 30.
- `-q <número>`: Especifica el número de consultas por salto. Por defecto, se envían 3 consultas por salto.
- `-I`: Utiliza paquetes ICMP en lugar de UDP para el rastreo. Esto puede ser útil si los routers en la ruta bloquean paquetes UDP.
- `-p <puerto>`: Especifica el puerto de destino para los paquetes UDP enviados. Por defecto, es 33434.

::: tip 💡 Consejo
Para ver todas las opciones disponibles para `traceroute`, puedes consultar la página del manual ejecutando `traceroute --help` o `man traceroute` en la terminal.
:::

## Consideraciones adicionales

- Algunos routers pueden estar configurados para no responder a las solicitudes de traceroute, lo que puede resultar en asteriscos en la salida.
- La herramienta `traceroute` puede requerir permisos de superusuario en algunos sistemas para enviar ciertos tipos de paquetes.
- En redes con firewalls o políticas de seguridad estrictas, es posible que algunas rutas no sean rastreables debido a bloqueos de tráfico.
- Recuerda que los resultados de `traceroute` pueden variar con el tiempo debido a cambios en la ruta de la red o la congestión del tráfico.
