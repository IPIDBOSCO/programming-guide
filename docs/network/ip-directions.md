---
title: Direcciones IP y DNS
---

# Direcciones IP

Una dirección IP (por sus siglas en inglés, Internet Protocol, Protocolo de Internet) es una etiqueta numérica asignada a cada dispositivo conectado a una red que utiliza el Protocolo de Internet para la comunicación. Las direcciones IP sirven para identificar y localizar dispositivos en una red, permitiendo la transferencia de datos entre ellos.

Por ejemplo, una dirección IP típica en formato IPv4 se ve así: `

```
192.168.100.53
```

Por decirlo de manera simple, una dirección IP es como la dirección postal de tu casa, pero para dispositivos en una red. Permite que los datos enviados a través de Internet o una red local lleguen al dispositivo correcto. Sin una dirección IP, los dispositivos no podrían comunicarse entre sí, porque los datos no tendrían un destino claro.

Las direcciones IP pueden ser de dos tipos principales: IPv4 e IPv6.

## IPv4

IPv4 (Protocolo de Internet versión 4) es la versión más comúnmente utilizada de direcciones IP. Utiliza un esquema de direccionamiento de 32 bits, lo que permite aproximadamente 4.3 mil millones de direcciones únicas. Las direcciones IPv4 se representan en formato decimal punteado, dividido en cuatro octetos (grupos de 8 bits).

La dirección IPv4 se compone de dos partes principales:
1. **Parte de red**: Identifica la red a la que pertenece el dispositivo.
2. **Parte de host**: Identifica el dispositivo específico dentro de esa red.

Para ponerlo más simple, la parte de red es como el nombre de tu vecindario, y la parte de host es como el número de tu casa dentro de ese vecindario.

Para poder determinar cuál es la parte de red y cuál es la parte de host en una dirección IP, se utiliza una `máscara de subred`. La máscara de subred es un conjunto de bits que "enmascara" la dirección IP para dividirla en las dos partes mencionadas anteriormente.

Por ejemplo, si tenemos la dirección IP `192.168.100.100` con una máscara de subred de `255.255.255.0`, la parte de red sería `192.168.100` y la parte de host sería `100`. Cualquier dispositivo con una dirección IP que comience con `192.168.100` pertenecería a la misma red local.

<table>
<tbody>
  <tr>
  <td>192</td>
  <td>168</td>
  <td>100</td>
  <td>53</td>
  </tr>
  <tr>
  <td colspan="3">Parte de red</td>
  <td>Parte de host</td>
  </tr>
  </tbody>
</table>

La máscara de subred puede representarse también en notación CIDR (Classless Inter-Domain Routing), que indica el número de bits utilizados para la parte de red. Por ejemplo, una máscara de subred de `255.255.255.0` se representa como `/24` en notación CIDR porque emplea 24 bits para la parte de red. Así, la dirección `192.168.100.100/24` indica que los primeros 24 bits (192.168.100) son la porción de red y el resto identifica al host dentro de esa red.

Otras máscaras de subred comunes incluyen:
<table>
  <tbody>
  <tr>
    <th>Máscara de Subred</th>
    <th>Notación CIDR</th>
    <th>Bits de Red</th>
    <th>Bits de Host</th>
  </tr>
  <tr>
    <td>255.255.255.0</td>
    <td>/24</td>
    <td>24</td>
    <td>8</td>
  </tr>
  <tr>
    <td>255.255.0.0</td>
    <td>/16</td>
    <td>16</td>
    <td>16</td>
  </tr>
  <tr>
    <td>255.0.0.0</td>
    <td>/8</td>
    <td>8</td>
    <td>24</td>
  </tr>
  <tr>
    <td>255.255.255.128</td>
    <td>/25</td>
    <td>25</td>
    <td>7</td>
  </tr>
  </tbody>
</table>

Aunque la IPv4 ha sido la versión predominante durante muchos años, está limitada en cuanto a la cantidad de direcciones disponibles. Con el crecimiento exponencial de dispositivos conectados a Internet, se ha vuelto necesario adoptar una nueva versión del protocolo IP.

## IPv6

IPv6 (Protocolo de Internet versión 6) es la versión más reciente del Protocolo de Internet, diseñada para reemplazar a IPv4 debido a la escasez de direcciones disponibles. IPv6 utiliza un esquema de direccionamiento de 128 bits, lo que permite una cantidad prácticamente ilimitada de direcciones únicas. Las direcciones IPv6 se representan en formato hexadecimal y se dividen en ocho grupos de cuatro dígitos separados por dos puntos.

Un ejemplo de dirección IPv6 es:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

Al igual que en IPv4, las direcciones IPv6 también se dividen en una parte de red y una parte de host, y se utilizan máscaras de subred para definir estas partes. Sin embargo, la notación CIDR en IPv6 puede variar más debido a la mayor longitud de las direcciones.

Aunque IPv6 ofrece muchas ventajas sobre IPv4, como una mayor capacidad de direccionamiento y mejoras en la seguridad y eficiencia del enrutamiento, su adopción ha sido gradual debido a la infraestructura existente basada en IPv4. Sin embargo, con el tiempo, se espera que IPv6 se convierta en el estándar predominante para las comunicaciones en red. Muchos ordenadores y dispositivos modernos ya son compatibles con IPv6, y los proveedores de servicios de Internet están trabajando para facilitar la transición.

## DNS (Sistema de Nombres de Dominio)

Como podemos ver, las direcciones IP son el identificador único de cada computador, si yo quiero conectarme a una web para vir videos de gatos, lo buscaría por ejemplo en `youtube.com`, pero los computadores no entienden nombres, ellos entienden números (direcciones IP). Aquí es donde entra en juego el DNS (Domain Name System, Sistema de Nombres de Dominio).

El DNS es un sistema que traduce los nombres de dominio legibles por humanos (como `youtube.com`) en direcciones IP que las computadoras pueden entender (como `142.251.15.136`). Cuando escribes un nombre de dominio en tu navegador, el DNS se encarga de buscar la dirección IP correspondiente para que tu dispositivo pueda conectarse al servidor correcto y cargar la página web.

El DNS funciona de manera similar a una agenda telefónica. Cuando quieres llamar a alguien, buscas su nombre en la agenda para encontrar su número de teléfono. De manera similar, cuando quieres visitar un sitio web, tu computadora consulta el DNS para encontrar la dirección IP asociada con ese nombre de dominio.

Esto es para ayudar a las personas a navegar por Internet de manera más fácil, ya que es mucho más sencillo recordar nombres como `google.com` en lugar de una serie de números.

### Componentes de un DNS

El sistema DNS está compuesto por varios componentes clave:

- **Servidor DNS**: Responsable de almacenar y proporcionar información sobre los nombres de dominio y sus direcciones IP correspondientes. Cuando un usuario solicita acceder a un sitio web, su dispositivo consulta un servidor DNS para obtener la dirección IP asociada con el nombre de dominio. Los más comunes son los servidores DNS públicos como los de Google (`8.8.8.8`) o Cloudflare (`1.1.1.1`).
- **Zona DNS**: Una zona DNS es una porción del espacio de nombres de dominio que es administrada por un servidor DNS específico. Contiene registros DNS que mapean nombres de dominio a direcciones IP y otros recursos.
- **Registros DNS**: Son entradas en una zona DNS que proporcionan información específica sobre un dominio.
- **Resolución DNS**: Es el proceso mediante el cual un nombre de dominio se traduce en una dirección IP. Este proceso puede involucrar múltiples servidores DNS, comenzando desde el servidor raíz hasta los servidores autoritativos para el dominio específico.

## mDNS

El mDNS (Multicast DNS) es una extensión del DNS que permite la resolución de nombres de dominio en redes locales sin necesidad de un servidor DNS centralizado. Utiliza mensajes multicast para permitir que los dispositivos en la misma red local se descubran y resuelvan nombres de dominio entre sí.

Los nombres de dominios se forman usando el nombre del host y terminado con `.local`. Por ejemplo, si tengo un computador llamado `mi-pc`, su nombre mDNS sería `mi-pc.local`.

Esto facilita mucho la configuración de redes domésticas o pequeñas oficinas, ya que los dispositivos pueden encontrarse y comunicarse sin necesidad de configurar manualmente direcciones IP o servidores DNS.

Hay tomar en cuenta al usar mDNS, que los sistemas operativos Windows no pueden resolver nombre de mDNS dado que no cuentan con soporte nativo para este protocolo. Sin embargo, existen aplicaciones de terceros que pueden agregar esta funcionalidad a Windows, como Bonjour de Apple o Avahi para sistemas basados en Linux. Aunque las versiones más recientes de Windows 10 y Windows 11 han mejorado la compatibilidad con mDNS.

## Dirección MAC

Una dirección MAC (Media Access Control, Control de Acceso al Medio) es un identificador único asignado a la interfaz de red de un dispositivo para su identificación en una red local. A diferencia de las direcciones IP, que pueden cambiar dependiendo de la red a la que se conecte el dispositivo, las direcciones MAC son fijas y están grabadas en el hardware del dispositivo puestas por el fabricante.

Una dirección MAC se compone de 48 bits y se representa comúnmente en formato hexadecimal, dividido en seis grupos de dos dígitos separados por dos puntos o guiones. Un ejemplo de dirección MAC es:

```
00:1A:2B:3C:4D:5E
```

Aunque las direcciones MAC no son utilizadas para la comunicación a través de Internet, son esenciales para la comunicación dentro de redes locales (LAN). Los dispositivos utilizan las direcciones MAC para identificar y comunicarse entre sí en la misma red física.

::: info Nota
Es posible que un usuario cambie la dirección MAC de su dispositivo mediante software, un proceso conocido como "MAC spoofing". Esto puede ser útil por razones de privacidad o para evitar restricciones basadas en direcciones MAC en ciertas redes.
:::

## Comandos útiles

### Linux

#### 1. Información de interfaces

- **Ver interfaces de red y su estado**
``` bash
ip addr
```

- **Ver interfaces en modo resumen**
``` bash
ip -br addr
```

- **Ver rutas (tabla de enrutamiento)**
``` bash
ip route
```

#### 2. Configuración rápida (temporal)

- **Asignar IP manual**
``` bash
sudo ip addr add 192.168.1.50/24 dev eth0
```

- **Activar / desactivar una interfaz**
``` bash
sudo ip link set eth0 up
sudo ip link set eth0 down
```

#### 3. Diagnóstico de conectividad

- **Ping**
``` bash
ping 8.8.8.8
ping google.com
```

- **Rastrear ruta**
``` bash
traceroute google.com
```

o:

``` bash
tracepath google.com
```

#### 4. DNS
- **Consultar dominio**
``` bash
dig google.com
```

- **Solo IP**
``` bash
dig +short google.com
```

#### 5. Puertos y servicios
- **Ver puertos abiertos**
``` bash
ss -tulpn
```

- **Probar puerto remoto**
``` bash
nc -vz 192.168.1.20 22
```

#### 6. Escaneo básico de red
- **Descubrir dispositivos**
``` bash
nmap -sn 192.168.1.0/24
```

#### 7. Captura de paquetes
- **Capturar tráfico**
``` bash
sudo tcpdump -i eth0
```

- **Guardar captura**
``` bash
sudo tcpdump -i wlan0 -w captura.pcap
```
