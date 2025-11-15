---
title: Hola Mundo en C++
---

# `Hola Mundo` en C++

Como es tradición en el mundo de la programación, el primer programa que escribiremos en C++ será el clásico "Hola Mundo". Es un programa sencillo que simplemente muestra el texto "Hola Mundo" en la pantalla. A continuación, te mostraré cómo hacerlo paso a paso.

1. **Crear el archivo fuente**: Abre tu editor de texto favorito y crea un nuevo archivo llamado `hola_mundo.cpp`.

2. **Escribir el código**: Copia y pega el siguiente código en el archivo `hola_mundo.cpp`:

```cpp
#include <iostream> // Incluye la biblioteca estándar de entrada y salida
int main() { // Función principal del programa
    std::cout << "Hola Mundo" << std::endl; // Imprime "Hola Mundo" en la pantalla
    return 0; // Indica que el programa terminó correctamente
}
```

3. **Guardar el archivo**: Asegúrate de guardar los cambios en el archivo `hola_mundo.cpp`.

4. **Compilar el programa**: Abre una terminal o línea de comandos, navega hasta el directorio donde guardaste `hola_mundo.cpp` y ejecuta el siguiente comando para compilar el programa:

```bash
g++ hola_mundo.cpp -o hola_mundo
```

Este comando utiliza el compilador `g++` para compilar el archivo fuente y generar un ejecutable llamado `hola_mundo`.

5. **Ejecutar el programa**: Una vez que la compilación haya sido exitosa, puedes ejecutar el programa con el siguiente comando:

```bash
./hola_mundo
```

Deberías ver la salida:

```
Hola Mundo
```

:tada: ¡Felicidades! Acabas de escribir, compilar y ejecutar tu primer programa en C++. Desde aquí, puedes comenzar a explorar más características del lenguaje y crear programas más complejos.