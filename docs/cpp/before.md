---
title: Antes de comenzar con C++
---

# Antes de comenzar con C++

Antes de empezar a dispararnos en el pie con C++, es necesario entender ciertos conceptos y preparar nuestro entorno de desarrollo. C++ puede ser poderoso, pero puede resultar alguien muy difícil de tratar si no tenemos claro algunos fundamentos.

Lo primero que debemos entender es que C++ es un lenguaje compilado. Esto significa que nuestro código fuente (los archivos `.cpp` y `.h`) deben ser transformados en código máquina ejecutable por un programa llamado compilador. Existen varios compiladores, pero todos ellos cumplen la misma función básica: traducir nuestro código a un formato que la computadora pueda entender y ejecutar.

Muchos sistemas operativos basados en Linux suelen venir con GCC preinstalado. En MacOS el compilador viene con Xcode Command Line Tools, que se puede instalar fácilmente desde la terminal `  xcode-select --install`. En Windows es donde empiezan las complicaciones, ya que no viene con un compilador por defecto.

> [!warning] ⚠️ Importante
> Los ejecutables generados en Windows no son compatibles con Linux o MacOS, y viceversa. Por lo que debes tener eso en cuenta si planeas compartir tu código o ejecutables entre diferentes sistemas operativos.

Existen varias opciones para poder compilar C++ en Windows:

- Se puede instalar MinGW o MinGW-w64, que son puertos de GCC para Windows. Pero la instalación y configuración puede ser un poco tediosa para principiantes. Debes asegurarte de agregar el directorio `bin` de MinGW a la variable de entorno `PATH` para poder usar el compilador desde cualquier terminal.

- Otra opción popular es instalar Microsoft Visual Studio, que incluye MSVC. Visual Studio ofrece un entorno de desarrollo integrado (IDE) completo con muchas herramientas útiles para programar en C++. La instalación es más sencilla y viene con un asistente que guía a través del proceso. Pero ten en cuenta que Visual Studio puede ser bastante pesado en términos de espacio y recursos.

- Alternativamente, puedes usar WSL (Windows Subsystem for Linux) para instalar una distribución de Linux dentro de Windows. Esto te permitirá usar GCC o Clang en un entorno Linux sin salir de Windows. Es una opción muy conveniente si planeas trabajar con herramientas y bibliotecas que son más comunes en Linux.

- Otro método es utilizar la herramienta de Anaconda para instalar un entorno de desarrollo que incluya un compilador de C++. Anaconda facilita la gestión de paquetes y entornos, aunque es más comúnmente utilizada para Python, también puede ser configurada para C++.

- Finalmente, existen IDEs multiplataforma como CLion, Code::Blocks o Visual Studio Code con extensiones para C++. Estos entornos pueden facilitar la configuración del compilador y la gestión de proyectos, pero aún así necesitarás tener un compilador instalado en tu sistema.

> [!tip] 💡 Info
> Para estos ejemplos utilizaremos GCC (GNU Compiler Collection), que es uno de los compiladores más populares y ampliamente utilizados en la comunidad de C++. Sin embargo, los conceptos que veremos son aplicables a otros compiladores como Clang o MSVC.
