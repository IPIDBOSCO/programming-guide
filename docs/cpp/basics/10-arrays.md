---
title: Arreglos [C++]
---

# Arreglos en C++

Un arreglo es una colección de elementos del mismo tipo almacenados en ubicaciones de memoria contiguas. En C++, los arreglos se utilizan para almacenar múltiples valores en una sola variable, lo que facilita la gestión y manipulación de conjuntos de datos.

## Declaración e Inicialización de Arreglos

Para declarar un arreglo en C++, se especifica el tipo de datos, el nombre del arreglo y el número de elementos entre corchetes. La sintaxis básica es la siguiente:

```cpp
tipo nombreArreglo[tamaño];
```

Por ejemplo, para declarar un arreglo de enteros con 5 elementos, se utiliza la siguiente línea de código:

```cpp
int numeros[5];
```

También es posible inicializar un arreglo en el momento de su declaración:

```cpp
int numeros[5] = {1, 2, 3, 4, 5};
```

Si no se especifica el tamaño del arreglo, el compilador lo deducirá automáticamente a partir del número de elementos proporcionados:

```cpp
int numeros[] = {1, 2, 3, 4, 5};
```

## Acceso a Elementos del Arreglo

Los elementos de un arreglo se acceden utilizando índices, que comienzan en 0. Por ejemplo, para acceder al primer elemento del arreglo `numeros`, se utiliza `numeros[0]`, y para acceder al segundo elemento, se utiliza `numeros[1]`.

```cpp
#include <iostream>

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    
    std::cout << "Primer elemento: " << numeros[0] << std::endl; // Imprime 10
    std::cout << "Segundo elemento: " << numeros[1] << std::endl; // Imprime 20
    
    return 0;
}
```

## Tamaño de un Arreglo

El tamaño de un arreglo puede determinarse utilizando el operador `sizeof`.

```cpp
#include <iostream>

int main(){
    int numeros[] = {10, 20, 30, 40, 50};
    int tamaño = sizeof(numeros); // Calcula el número de elementos
    
    std::cout << "Tamaño del arreglo: " << tamaño << std::endl; // Imprime 20
    
    return 0;
}
```

Esto dará como resultado 20, pero nuestro array tiene 5 elementos, esto es porque `sizeof` devuelve el tamaño en bytes. Para obtener el número de elementos, debemos dividir el tamaño total del arreglo por el tamaño de un solo elemento:

```cpp
#include <iostream>

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    int tamaño = sizeof(numeros) / sizeof(numeros[0]); // Calcula el número de elementos
    
    std::cout << "Tamaño del arreglo: " << tamaño << std::endl; // Imprime 5
    
    return 0;
}
```

## Iteración sobre Arreglos

Se pueden utilizar bucles para iterar sobre los elementos de un arreglo. Un ejemplo común es el uso de un bucle `for` para imprimir todos los elementos de un arreglo:

```cpp
#include <iostream>

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    int tamaño = sizeof(numeros) / sizeof(numeros[0]); // Calcula el tamaño del arreglo
    
    for (int i = 0; i < tamaño; i++) {
        std::cout << "Elemento " << i << ": " << numeros[i] << std::endl;
    }
    
    return 0;
}
```

## Modificación de Elementos del Arreglo

Los elementos de un arreglo pueden ser modificados asignando nuevos valores a través de sus índices:

```cpp
#include <iostream>

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    
    numeros[2] = 100; // Cambia el tercer elemento a 100
    
    std::cout << "Tercer elemento modificado: " << numeros[2] << std::endl; // Imprime 100
    
    return 0;
}
```

## Arreglos Multidimensionales

C++ también permite la creación de arreglos multidimensionales, como matrices. La sintaxis para declarar un arreglo bidimensional es la siguiente:

```cpp
tipo nombreArreglo[filas][columnas];
```

Por ejemplo, para declarar una matriz de enteros con 3 filas y 4 columnas:

```cpp
int matriz[3][4];
```

La inicialización de una matriz 2x3 puede hacerse de la siguiente manera:

```cpp
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

El acceso a los elementos de una matriz se realiza utilizando dos índices: uno para la fila y otro para la columna.

```cpp
#include <iostream>

int main() {
    int matriz[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    
    std::cout << "Elemento en la fila 1, columna 2: " << matriz[1][2] << std::endl; // Imprime 6
    
    return 0;
}
```

Es posible iterar sobre los elementos de un arreglo multidimensional utilizando bucles `for` para procesar o modificar cada elemento según sea necesario.

```cpp
#include <iostream>

int main() {
    int matriz[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << matriz[i][j] << " ";
        }
        std::cout << std::endl;
    }
    
    return 0;
}
```

# Conclusión

Hay que tomar en cuenta que los arreglos en C++ tienen un tamaño fijo una vez declarados, lo que significa que no se pueden redimensionar dinámicamente. Para manejar colecciones de datos de tamaño variable, se recomienda utilizar estructuras de datos como vectores (`std::vector`) de la biblioteca estándar de C++.
