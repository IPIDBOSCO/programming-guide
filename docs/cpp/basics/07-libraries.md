---
title: Bibliotecas en C++
---

# Bibliotecas en C++

Los lenguajes de programación ofrecen una gran variedad de funcionalidades, pero no es práctico ni eficiente incluir todo el código necesario para cada funcionalidad directamente en cada programa. Esto puede sobrecargar el código y hacer el programa más pesado. Para resolver este problema, los lenguajes de programación utilizan **bibliotecas**.

Las bibliotecas, o librerías, son colecciones de código preescrito que proporcionan funcionalidades específicas que los programadores pueden reutilizar en sus propios programas. En C++, las bibliotecas estándar ofrecen una amplia gama de funcionalidades, desde operaciones matemáticas hasta manipulación de cadenas y manejo de archivos.

En otras palabras, lo que hacen es fragmentar el código, de tal forma que solo se incluye en el programa lo que realmente se necesita, optimizando así el rendimiento y la eficiencia del programa.

## Inclusión de Bibliotecas

Para utilizar una biblioteca en C++, es necesario incluirla en el programa mediante la directiva de preprocesador `#include`. Esta directiva le indica al compilador que debe incluir el contenido del archivo de la biblioteca especificada.
Por ejemplo, para incluir la biblioteca estándar de entrada/salida, se utiliza la siguiente línea al inicio del programa:

```cpp
#include <iostream>
```

Esto permite al programa utilizar las funcionalidades definidas en la biblioteca `iostream`, como la entrada y salida de datos a través de la consola.

## Bibliotecas Estándar Comunes

C++ cuenta con una amplia variedad de bibliotecas estándar que cubren diversas áreas de funcionalidad. Algunas de las bibliotecas más comunes incluyen:

- `<iostream>`: Proporciona funcionalidades para la entrada y salida de datos.
- `<vector>`: Ofrece la clase `std::vector`, que es un contenedor dinámico para almacenar elementos.
- `<string>`: Proporciona la clase `std::string` para manipulación de cadenas de texto.
- `<cmath>`: Incluye funciones matemáticas comunes como `sqrt`, `sin`, `cos`, etc.
- `<fstream>`: Permite la manipulación de archivos para lectura y escritura.
- `<algorithm>`: Proporciona una variedad de algoritmos para operaciones en contenedores, como ordenamiento y búsqueda.

## Headers 

En C++, las bibliotecas estándar están organizadas en archivos de encabezado (headers) que contienen las declaraciones de funciones, clases y variables. Al incluir un archivo de encabezado mediante `#include`, se hace accesible todo el contenido definido en ese archivo.

Es importante destacar que los archivos de encabezado suelen tener la extensión `.h`, mientras que los archivos de implementación (donde se define el comportamiento de las funciones y clases) suelen tener la extensión `.cpp`. Los encabezados solo contienen declaraciones, no definiciones completas, C es un lenguaje que permite separar la interfaz (declaraciones) de la implementación (definiciones). Declarar primero y definir después, un ejemplo de esto es:

```cpp
#include <iostream>

void myFunction(); // Declaración

int main() {
    myFunction(); // Llamada a la función
    return 0;
}
void myFunction() { // Definición
    std::cout << "Función definida después de la declaración" << std::endl;
}
```

::: danger Importante
Es posible importar el archivo `.cpp` directamente en lugar del archivo de encabezado `.h`, pero esta práctica no es recomendable. Incluir archivos `.cpp` puede llevar a problemas de duplicación de definiciones y errores de enlace durante la compilación, ya que el código fuente se compilará múltiples veces y hace que el proceso se haga más lento. La convención estándar es incluir solo archivos de encabezado `.h` para declarar funciones y clases, mientras que los archivos `.cpp` deben compilarse por separado.

Sim embargo, en proyectos pequeños o ejemplos simples, puede que no se note la diferencia, pero en proyectos más grandes y complejos, seguir las mejores prácticas es crucial para mantener un código limpio y evitar errores.

Además de que al usar encabezados, se mejora la organización del código, se facilita su mantenimiento y la legibilidad por parte de otros miembros del proyecto.
:::

## Librerías Personalizadas

Además de las bibliotecas estándar, los programadores pueden crear sus propias bibliotecas personalizadas para reutilizar código en múltiples proyectos. Para crear una biblioteca personalizada, se suelen seguir estos pasos:

1. **Crear un Archivo de Encabezado `.h`**: Este archivo contiene las declaraciones de funciones, clases y variables que se desean incluir en la biblioteca.

2. **Crear un Archivo de Implementación `.cpp`**: Este archivo contiene las definiciones de las funciones y clases declaradas en el archivo de encabezado. Debe incluir el archivo de encabezado correspondiente.

3. **Incluir la Biblioteca en Otros Programas**: Para utilizar la biblioteca personalizada en otros programas, se incluye el archivo de encabezado correspondiente mediante la directiva `#include "mi_biblioteca.h"`.

::: code-group 
```cpp [main.cpp]
#include <myFile.h> // Incluye un archivo de encabezado personalizado

int main() {
    myFunction(); // Llamada a una función definida en myFile.h
    return 0;
}
```

```cpp [myFile.h]
#ifndef MYFILE_H   // Directiva para evitar inclusiones múltiples
#define MYFILE_H   // Inicio del archivo de encabezado
void myFunction(); // Declaración de una función
#endif
```

```cpp [myFile.cpp]
#include "myFile.h"
#include <iostream>
void myFunction() {
    std::cout << "Función desde myFile.h" << std::endl;
}
```
:::

### ¿Cuando usar bibliotecas personalizadas?

Las bibliotecas personalizadas son útiles cuando tienes un conjunto de funciones o clases que se utilizan en múltiples proyectos. Al encapsular este código en una biblioteca, puedes evitar la duplicación y facilitar el mantenimiento. Si necesitas actualizar una función, solo tienes que hacerlo en un lugar, y todos los proyectos que utilizan la biblioteca se beneficiarán de la actualización.

También son útiles para organizar el código en módulos lógicos, lo que mejora la legibilidad y facilita la colaboración en proyectos más grandes.