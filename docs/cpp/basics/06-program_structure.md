---
title: Estructura del Programa [C++]
---

# Estructura del Programa en C++

Habrás notado que muchos de los ejemplos que hemos puesto hasta ahora repiten ciertas partes. Por ejemplo, la línea `#include <iostream>` aparece en casi todos los programas, y la función `int main()` es el punto de entrada de cualquier programa C++. Vamos a ver porque esto es así y cuál es la estructura básica de un programa en C++.

## Componentes Básicos de un Programa C++

Un programa C++ típico consta de las siguientes partes:

1. **Directivas de Preprocesador**: Estas líneas comienzan con `#` y son instrucciones para el preprocesador. Por ejemplo, `#include <iostream>` le dice al compilador que incluya la biblioteca estándar de entrada/salida.

2. **Declaraciones de Espacios de Nombres**: La línea `using namespace std;` permite usar nombres del espacio de nombres estándar sin tener que prefijarlos con `std::`.

3. **Función Principal**: La función `int main()` es el punto de entrada del programa. Todo el código que se ejecuta cuando se inicia el programa debe estar dentro de esta función.

4. **Cuerpo del Programa**: Dentro de la función `main`, escribimos las instrucciones que definen el comportamiento del programa. Esto incluye declaraciones de variables, operaciones, llamadas a funciones, etc.

5. **Valor de Retorno**: La función `main` generalmente devuelve un valor entero. `return 0;` indica que el programa terminó correctamente.

### Ejemplo de un Programa Completo

```cpp
#include <iostream> // Directiva de preprocesador
using namespace std; // Declaración de espacio de nombres

int main() { // Función principal
    cout << "Hola, Mundo!" << endl; // Cuerpo del programa
    return 0; // Valor de retorno
}
```

## Uso de `std::`

En lugar de usar `using namespace std;`, también puedes optar por prefijar los nombres del espacio de nombres estándar con `std::`. Esto puede ayudar a evitar conflictos de nombres en programas más grandes.

```cpp
#include <iostream>
int main() {
    std::cout << "Hola, Mundo!" << std::endl;
    return 0;
}
```

::: warning AVISO
Aunque usar `using namespace std;` es común en ejemplos simples y tutoriales, en proyectos más grandes es recomendable evitarlo porque su uso implica que estás importando todo el espacio de nombres `std`, lo que puede causar conflictos de nombres si hay funciones o variables con el mismo nombre en otros espacios de nombres o en tu propio código. En su lugar, es mejor usar prefijos `std::` para mayor claridad y evitar ambigüedades.
:::

## Directivas de Preprocesador

Las directivas de preprocesador son instrucciones que se ejecutan antes de la compilación del código. La más común es `#include`, que se utiliza para incluir archivos de encabezado que contienen definiciones y declaraciones necesarias para el programa.

- `#include <library>`: Incluye una biblioteca estándar.
- `#include "file.h"`: Incluye un archivo de encabezado personalizado.

Pero también existen otras directivas como `#define` para definir macros y `#ifdef` para compilación condicional.

- `#define PI 3.14`: Define una constante llamada PI. Esta es distinta de una variable, ya que su valor no puede cambiar, es un valor fijo que se sustituye en el código durante la compilación.
- `#ifdef DEBUG`: Permite incluir código solo si la macro DEBUG está definida.
```cpp
#ifdef DEBUG
    cout << "Modo de depuración activado" << endl;
#endif
```
- `#ifndef`: Similar a `#ifdef`, pero verifica si una macro no está definida.
```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H
// Contenido del archivo de encabezado
#endif
```