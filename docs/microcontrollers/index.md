---
title: Microcontroladores
next:
  title: Introducción a los microcontroladores
  link: /microcontrollers/before
---

# Microcontroladores

Los microcontroladores son pequeños dispositivos electrónicos que contienen un procesador, memoria y periféricos de entrada/salida integrados en un solo chip. Son ampliamente utilizados en sistemas embebidos para controlar dispositivos y realizar tareas específicas. También reciben el nombre de **"MCU"** (Microcontroller Unit).

A diferencia de las computadoras tradicionales, los microcontroladores están diseñados para ejecutar programas específicos y suelen tener recursos limitados en términos de memoria y potencia de procesamiento. Pero al ser compactos y eficientes, son ideales para aplicaciones en las que el espacio y el consumo de energía son críticos.

Los microcontroladores son muy versátiles y útiles, sin embargo, no hacen nada por sí mismos. Para que un microcontrolador pueda realizar tareas específicas, es necesario programarlo con instrucciones que le indiquen qué hacer.

El lenguaje de programación más comúnmente utilizado para programar microcontroladores es C/C++. Estos lenguajes permiten un control preciso sobre el hardware y son eficientes en términos de uso de memoria y velocidad de ejecución. Sin embargo, hay diferencias entre programar microcontroladores y programar en C/C++ para computadoras tradicionales.

## Diferencias de C/C++ en micros y computadoras tradicionales

1. **Recursos limitados**: Los microcontroladores suelen tener recursos limitados en términos de memoria RAM, memoria flash y potencia de procesamiento. Por lo tanto, es importante escribir código eficiente y optimizado para aprovechar al máximo estos recursos limitados.
2. **Acceso directo al hardware**: Al programar microcontroladores, es común interactuar directamente con los registros de hardware y periféricos.
3. **Entornos de desarrollo específicos**: La programación de microcontroladores a menudo requiere el uso de entornos de desarrollo integrados (IDE) y herramientas específicas proporcionadas por el fabricante del microcontrolador.
4. **Librerías estándar limitadas**: Aunque C/C++ tiene una amplia gama de librerías estándar, en el contexto de los microcontroladores, es posible que no todas estén disponibles o sean adecuadas debido a las limitaciones de recursos.

## Otros lenguajes de programación para microcontroladores
Aunque C/C++ es el lenguaje más comúnmente utilizado, existen otros lenguajes de programación que también se emplean para programar microcontroladores, como:

- **Assembly**: Lenguaje de bajo nivel que permite un control preciso sobre el hardware, pero es más difícil de aprender y utilizar.
- **Python (MicroPython)**: Una versión reducida de Python diseñada para microcontroladores, que facilita la programación rápida y sencilla.
- **JavaScript (Espruino)**: Un entorno que permite programar microcontroladores utilizando JavaScript, ideal para desarrolladores web que desean trabajar con hardware. Aunque es menos común y su comunidad es más pequeña en comparación con C/C++.
- **Rust**: Un lenguaje moderno que ofrece seguridad de memoria y concurrencia, ganando popularidad en el desarrollo de sistemas embebidos. No obstante, al ser relativamente nuevo, su ecosistema para microcontroladores aún está en desarrollo y no todas las plataformas lo soportan completamente.
- **Go**: Un lenguaje desarrollado por Google que está siendo explorado para aplicaciones embebidas. Aunque tiene características interesantes, su uso en microcontroladores es todavía limitado y no tan extendido como C/C++.
