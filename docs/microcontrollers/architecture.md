---
title: Arquitectura de microcontroladores
---

# Arquitectura de microcontroladores

![alt text](image.png)

Los microcontroladores son dispositivos compactos que integran varios componentes esenciales en un solo chip para realizar tareas específicas en sistemas embebidos. La arquitectura típica de un microcontrolador incluye los siguientes componentes principales:

1. **Unidad Central de Procesamiento (CPU)**: Es el cerebro del microcontrolador, responsable de ejecutar instrucciones y procesar datos. La CPU interpreta y ejecuta el código almacenado en la memoria.
2. **Memoria**:
   - **Memoria de Programa (Flash/ROM)**: Almacena el código del programa que se ejecuta en el microcontrolador. Es no volátil, lo que significa que retiene la información incluso cuando el dispositivo está apagado.
   - **Memoria de Datos (RAM)**: Utilizada para almacenar datos temporales y variables durante la ejecución del programa. Es volátil, por lo que pierde su contenido cuando se apaga el microcontrolador.
   - **Memoria EEPROM**: Una memoria no volátil que permite almacenar datos que deben conservarse entre reinicios, como configuraciones o calibraciones.
3. **Periféricos de Entrada/Salida (I/O)**: Estos pines permiten la comunicación del microcontrolador con el mundo exterior. Pueden configurarse como entradas o salidas para interactuar con sensores, actuadores y otros dispositivos.
4. **Temporizadores/Contadores**: Utilizados para medir intervalos de tiempo, generar retardos o contar eventos externos. Son esenciales para tareas de temporización y control.
5. **Convertidores Analógico-Digitales (ADC)**: Permiten al microcontrolador leer señales analógicas (como voltajes de sensores) y convertirlas en valores digitales que la CPU puede procesar.
6. **Convertidores Digital-Analógicos (DAC)**: Permiten al microcontrolador generar señales analógicas a partir de valores digitales, útiles para controlar dispositivos analógicos.
7. **Interfaces de Comunicación**: Incluyen protocolos como UART, SPI, I2C, CAN, entre otros, que permiten la comunicación con otros dispositivos y microcontroladores.
8. **Reloj del Sistema**: Proporciona la señal de temporización necesaria para sincronizar las operaciones del microcontrolador. Puede ser un oscilador interno o un cristal externo.
9. **Módulos Especializados**: Algunos microcontroladores incluyen módulos adicionales como controladores de motor, módulos de comunicación inalámbrica, entre otros, para aplicaciones específicas.

::: info 💡 Dato curioso
Antes los microcontrollers no solían tener FPU (Floating Point Unit) integrada, lo que limitaba su capacidad para realizar cálculos en punto flotante (números decimales) de manera eficiente. Hoy en día, muchos microcontroladores modernos incluyen FPU para mejorar el rendimiento en aplicaciones que requieren cálculos matemáticos complejos.
:::

## Arquitecturas comunes de microcontroladores

Existen varias arquitecturas de microcontroladores, cada una con sus propias características y ventajas. Algunas de las más comunes incluyen:
- **Arquitectura Harvard**: Separa las memorias de programa y datos, lo que permite acceder a ambas simultáneamente, mejorando el rendimiento.
- **Arquitectura Von Neumann**: Utiliza una única memoria para programa y datos, lo que simplifica el diseño pero puede limitar el rendimiento debido a la competencia por el acceso a la memoria.
- **Arquitectura RISC (Reduced Instruction Set Computer)**: Utiliza un conjunto reducido de instrucciones, lo que permite una ejecución más rápida y eficiente.
- **Arquitectura CISC (Complex Instruction Set Computer)**: Utiliza un conjunto más amplio de instrucciones, lo que puede facilitar la programación pero a costa de un rendimiento potencialmente menor.

La elección de la arquitectura adecuada depende de los requisitos específicos de la aplicación y las restricciones del sistema embebido en el que se utilizará el microcontrolador.
