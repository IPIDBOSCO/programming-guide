---
title: Variables [C++]
---

# Variables en C++

En C++, una variable es un espacio en la memoria que se utiliza para almacenar datos que pueden cambiar durante la ejecución de un programa. Cada variable tiene un nombre (identificador) y un tipo de dato que define qué tipo de valor puede almacenar, como enteros, caracteres, números de punto flotante, entre otros.

Para ponerlo en un contexto más llano, _aplatanado_ como solía decir mi maestro, una variable es como una caja con una etiqueta (el nombre de la variable) donde puedes guardar algo (el valor) y luego cambiar lo que hay dentro de la caja cuando lo necesites.

## Declaración y asignación de variables

Para declarar una variable en C++, debes especificar su tipo seguido del nombre de la variable. Puedes asignarle un valor en el momento de la declaración o hacerlo más adelante. Aquí tienes algunos ejemplos:

```cpp
int edad; // Declaración de una variable entera llamada 'edad'
edad = 25; // Asignación de un valor a la variable 'edad'
float altura = 1.75; // Declaración y asignación de una variable de punto flotante llamada 'altura'
char inicial = 'A'; // Declaración y asignación de una variable de carácter llamada 'inicial'
```

## variables constantes

Aunque dijimos que las variables pueden cambiar, a veces necesitamos valores que no cambien durante la ejecución del programa. Para esto, usamos la palabra clave `const` para declarar constantes. A estas variables también se les conoce como variables inmutables.

```cpp
const float PI = 3.14159; // Declaración de una constante llamada 'PI'
```

Estas variables no pueden ser modificadas después de su inicialización, intentar hacerlo resultará en un error de compilación.

```cpp
const int MAX_USUARIOS = 100;
MAX_USUARIOS = 200; // Esto causará un error de compilación // [!code error]
```

## Practicas recomendadas

- Usa nombres descriptivos para tus variables que reflejen su propósito.

```cpp
int numeroDeEstudiantes; // Bueno
int x; // Malo // [!code warning]
```

- Sigue las convenciones de nomenclatura, como usar `camelCase` o `snake_case`.

```cpp
int numeroDeEstudiantes; // camelCase
int numero_de_estudiantes; // snake_case
```

- Declara las variables lo más cerca posible de su primer uso para mejorar la legibilidad del código.

```cpp
for (int i = 0; i < 10; i++) { // Declaración de 'i' dentro del bucle
    // Código aquí
}
```

- Inicializa las variables al momento de declararlas siempre que sea posible para evitar valores indeterminados.

```cpp
int contador = 0; // Inicialización al declarar
```

- Las variables constantes deben ser nombradas en mayúsculas con guiones bajos para diferenciarlas fácilmente de las variables normales.

```cpp
const int MAX_USUARIOS = 100;
```

Con estos conceptos básicos sobre variables en C++, estás listo para comenzar a utilizarlas en tus programas. Recuerda que entender cómo manejar las variables es fundamental para escribir código efectivo y eficiente. Aunque en este punto quizás te preguntes _"¿Qué es int, float, char?"_, tranquilo mi joven padawan, que eso lo veremos en la siguiente sección. ¡Nos vemos ahí!
