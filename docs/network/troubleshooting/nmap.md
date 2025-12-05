---
title: nmap
---

# nmap

`nmap` (Network Mapper) es una herramienta de código abierto utilizada para el escaneo y auditoría de redes. Es ampliamente utilizada por administradores de sistemas y profesionales de seguridad para descubrir hosts y servicios en una red, así como para identificar posibles vulnerabilidades. Es usada para detectar dispositivos activos en una red, así como para saber que dispositivo no debería estar ahí.

`nmap` puede realizar escaneos de puertos, identificar sistemas operativos, detectar servicios en ejecución y mucho más. Es una herramienta poderosa para el análisis de seguridad y la gestión de redes. No viene instalada por defecto en la mayoría de sistemas, pero se puede instalar fácilmente desde los repositorios oficiales de la mayoría de distribuciones Linux, así como en macOS y Windows.

::: danger ⚠️ IMPORTANTE
El uso de `nmap` para escanear redes o dispositivos sin el permiso explícito del propietario puede ser ilegal y poco ético. Asegúrate de tener la autorización adecuada antes de utilizar esta herramienta en cualquier red o sistema.
:::

## Uso básico

El comando básico para usar `nmap` es el siguiente:

```bash
nmap [opciones] <objetivo>
```

Por ejemplo, para escanear una dirección IP específica, puedes usar:

```bash
nmap 192.168.100.0/24
```

Esto escaneará todos los dispositivos en la red `192.168.100.0/24` y mostrará los puertos abiertos y los servicios en ejecución.

```nginx
Starting Nmap 7.80 ( https://nmap.org ) at 2024-06-10 12:00 UTC
Nmap scan report for 192.168.100.43
Host is up (0.0010s latency).
Not shown: 995 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql
8080/tcp open  http-proxy
Nmap done: 256 IP addresses (10 hosts up) scanned in 3.45 seconds
```
