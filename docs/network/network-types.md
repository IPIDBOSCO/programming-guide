---
title: Tipos de redes
---

# Tipos de redes

Las redes pueden clasificarse en varios tipos según su alcance, topología y tecnología utilizada.

## Clasificación por alcance

1. **Red de Área Personal (PAN)**: Es la red más pequeña, diseñada para conectar dispositivos personales como teléfonos, tabletas y computadoras dentro de un rango corto, generalmente unos pocos metros.
2. **Red de Área Local (LAN)**: Conecta dispositivos dentro de un área limitada, como una oficina, hogar o edificio. Las LAN suelen utilizar tecnologías como Ethernet y Wi-Fi.
3. **Red de Área Metropolitana (MAN)**: Cubre un área geográfica más amplia que una LAN, como una ciudad o un campus universititario. Las MAN suelen utilizar tecnologías como fibra óptica y conexiones de alta velocidad.
4. **Red de Área Amplia (WAN)**: Cubre grandes distancias geográficas, conectando múltiples LAN y MAN. Internet es el ejemplo más grande de una WAN.

![Tipos de redes](/assets/network/Network-types.png)

## Clasificación por topología

La topología de una red se refiere a la disposición física o lógica de los dispositivos y cómo están conectados entre sí.

### Topología Punto a Punto

En esta topología, dos dispositivos están directamente conectados entre sí. Es simple y eficiente para conexiones directas.

![Topología Punto a Punto](/assets/network/topology-p2p.png)

#### Ventajas:
- Fácil de implementar y mantener.
- Baja latencia debido a la conexión directa.
#### Desventajas:
- No es escalable para redes más grandes.

### Topología en Estrella

En esta topología, todos los dispositivos están conectados a un dispositivo central, como un switch o un router.

![Topología en Estrella](/assets/network/topology-star.png)

#### Ventajas:
- Fácil de gestionar y expandir.
- Si un dispositivo falla, no afecta a los demás.

#### Desventajas:
- El dispositivo central es un punto único de fallo.
- Los recursos pueden ser limitados por la capacidad del dispositivo central.

### Topología en Bus

En esta topología, todos los dispositivos están conectados a un único cable compartido, conocido como bus. El bus es bidireccional y los datos se transmiten en ambas direcciones.

![Topología en Bus](/assets/network/topology-bus.png)

#### Ventajas:
- Fácil de implementar y económico.
- Requiere menos cableado que otras topologías.

#### Desventajas:
- Si el bus falla, toda la red se cae.
- Difícil de diagnosticar problemas en la red.

### Topología en Anillo

En esta topología, cada dispositivo está conectado a otros dos dispositivos, formando un anillo cerrado. Los datos circulan en una dirección alrededor del anillo.

![Topología en Anillo](/assets/network/topology-ring.png)

#### Ventajas:
- Puede manejar grandes volúmenes de tráfico.
- Cada dispositivo actúa como un repetidor, lo que puede mejorar la señal.

#### Desventajas:
- Si un dispositivo falla, puede afectar a toda la red si no hay mecanismos de redundancia.
- Difícil de expandir y mantener.

### Topología en Malla

En esta topología, cada dispositivo está conectado a varios otros dispositivos, creando una red de conexiones redundantes.

![Topología en Malla](/assets/network/topology-mesh.png)

#### Ventajas:
- Alta redundancia y fiabilidad.
- Si un dispositivo falla, los datos pueden redirigirse a través de otras rutas.

#### Desventajas:
- Costosa y compleja de implementar.
- Requiere más cableado y configuración.

### Topología en Árbol

La topología en árbol es una combinación de topologías en estrella y bus. Los dispositivos están organizados en niveles jerárquicos, con un dispositivo central en la parte superior.

![Topología en Árbol](/assets/network/topology-tree.png)

#### Ventajas:
- Escalable y fácil de gestionar.
- Permite segmentar la red en subredes.
#### Desventajas:
- Si un nodo superior falla, puede afectar a todos los nodos inferiores.
- Requiere mucho cableado.

### Topología Híbrida

La topología híbrida combina dos o más topologías básicas para aprovechar sus ventajas y minimizar sus desventajas.

![Topología Híbrida](/assets/network/topology-hybrid.png)

#### Ventajas:
- Flexible y escalable.
- Puede adaptarse a diferentes necesidades de red.

#### Desventajas:
- Puede ser compleja de diseñar y gestionar.
- Requiere más recursos y planificación.

## Clasificación por tecnología

1. **Redes Cableadas**: Utilizan cables físicos, como cables Ethernet o fibra óptica, para conectar dispositivos. Son conocidas por su alta velocidad y fiabilidad.
2. **Redes Inalámbricas**: Utilizan señales de radio para conectar dispositivos sin cables físicos. Ejemplos incluyen Wi-Fi, Bluetooth y redes celulares.
3. **Redes Híbridas**: Combinan tecnologías cableadas e inalámbricas para aprovechar las ventajas de ambas.

