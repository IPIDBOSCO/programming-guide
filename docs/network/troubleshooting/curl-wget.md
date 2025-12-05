---
title: curl y wget
---

# curl y wget

`curl` y `wget` son herramientas de línea de comandos ampliamente utilizadas para transferir datos desde o hacia un servidor, utilizando diversos protocolos como HTTP, HTTPS, FTP, entre otros. Ambas herramientas son esenciales para probar la conectividad a servicios web y para descargar recursos directamente desde la terminal.

## curl

`curl` (Client URL) es una herramienta versátil que permite realizar solicitudes HTTP y otros tipos de transferencias de datos. Es especialmente útil para interactuar con APIs web, ya que permite enviar encabezados personalizados, datos en el cuerpo de la solicitud y manejar diferentes métodos HTTP como GET, POST, PUT, DELETE, entre otros.

Es usada para probar y depurar servicios web, así como para automatizar tareas relacionadas con la transferencia de datos.

### Ejemplos comunes de curl

- **Realizar una solicitud GET**:

```bash
curl https://api.ejemplo.com/recurso
```

- **Realizar una solicitud POST con datos JSON**:

```bash
curl -X POST https://api.ejemplo.com/recurso -H "Content-Type: application/json" -d '{"clave":"valor"}'
```

- **Descargar un archivo**:

```bash
curl -O https://ejemplo.com/archivo.zip
```

## wget

`wget` es una herramienta de línea de comandos diseñada principalmente para descargar archivos desde la web. Es especialmente útil para descargar archivos grandes, sitios web completos o para realizar descargas en segundo plano. `wget` soporta protocolos como HTTP, HTTPS y FTP.

### Ejemplos comunes de wget

- **Descargar un archivo**:

```bash
wget https://ejemplo.com/archivo.zip
```

- **Descargar un sitio web completo**:

```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://ejemplo.com
``` 

- **Descargar un archivo en segundo plano**:

```bash
wget -b https://ejemplo.com/archivo.zip
```

Ambas herramientas son poderosas y tienen sus propias fortalezas. `curl` es más adecuado para interactuar con APIs y realizar solicitudes HTTP complejas, mientras que `wget` es ideal para descargar archivos y sitios web completos de manera eficiente.

