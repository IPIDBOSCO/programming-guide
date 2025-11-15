---
title: Tipos de datos en C++
---

# Tipos de datos en C++

En C++, los tipos de datos son fundamentales para definir la naturaleza de los datos que una variable puede almacenar. Cada tipo de dato tiene un tamaño y un rango específico, lo que afecta cómo se almacenan y manipulan los valores en la memoria. A continuación, exploraremos los tipos de datos más comunes en C++.

Piénsalo de esta forma, en la explicación de [variables](./02-variables.md), donde mencionamos que una variable es como una caja con una etiqueta. El tipo de dato sería la forma y el tamaño de esa caja, que determina qué tipo de cosas puedes guardar dentro.

![Tipos de datos en C++](/img/data-types-cpp.png)

Las variables ocupan un espacio en la memoria, este espacio está determinado por el tipo de dato que le asignamos. Por ejemplo, un `int` (entero) generalmente ocupa 4 bytes, mientras que un `char` (carácter) ocupa solo 1 byte. Elegir el tipo de dato correcto es crucial para optimizar el uso de memoria y garantizar que los valores se manejen adecuadamente.

## Tipos de datos primitivos

Los datos primitivos son los tipos de datos básicos que C++ proporciona para almacenar valores simples. Aquí están los más comunes:

| Tipo de dato | Descripción                          | Tamaño típico (bytes) | Rango típico                           |
|---------------|--------------------------------------|-----------------------|---------------------------------------|
| `int`         | Entero                              | 4                     | -2,147,483,648 a 2,147,483,647       |
| `float`       | Número de punto flotante (simple)   | 4                     | Aproximadamente ±3.4e38                 |
| `double`      | Número de punto flotante (doble)    | 8                     | Aproximadamente ±1.7e308                |
| `char`        | Carácter (letra, dígito, símbolo)       | 1                     | -128 a 127 (o 0 a 255 si es `unsigned`)|
| `bool`        | Booleano (verdadero o falso)        | 1
| `void`        | Tipo vacío (sin valor)              | N/A                   | N/A                                   |

### Modificadores de tipo

C++ permite modificar los tipos de datos primitivos para ajustar su tamaño y rango. Los modificadores más comunes son:

- `short`: Reduce el tamaño del tipo de dato (por ejemplo, `short int`).
- `long`: Aumenta el tamaño del tipo de dato (por ejemplo, `long int`).
- `unsigned`: Permite almacenar solo valores positivos, duplicando el rango positivo del tipo de dato (por ejemplo, `unsigned int`).

Aquí hay algunos ejemplos de cómo usar estos tipos de datos y modificadores:

```cpp
unsigned int numeroPositivo = 300;   // Entero sin signo
short int numeroCorto = 32000;       // Entero corto
long int numeroLargo = 1234567890;   // Entero largo
```
::: details 🗒️ Negativos y complemento a dos
Los enteros negativos en C++ se representan utilizando el complemento a dos, que es un método común para manejar números negativos en sistemas binarios. En este sistema, el bit más significativo (el bit de la izquierda) se utiliza como el bit de signo: `0` indica un número positivo y `1` indica un número negativo.

Por ejemplo, en un sistema de 8 bits, el número `5` se representa como `00000101`, mientras que `-5` se representa como `11111011`. El complemento a dos se obtiene invirtiendo todos los bits del número positivo y sumando `1` al resultado.
:::

## Desbordamiento de tipos

El desbordamiento ocurre cuando un valor excede el rango máximo que puede ser representado por un tipo de dato específico. Por ejemplo, si intentas almacenar el valor `300` en una variable de tipo `unsigned char`, que tiene un rango de `0` a `255`, se producirá un desbordamiento y el valor almacenado será incorrecto.

```cpp
unsigned char byteValue = 300; // Desbordamiento, el valor real será 44
```

## Practicas recomendadas

- Elige el tipo de dato adecuado según el rango y la precisión que necesites para tus variables.
```cpp
float precio = 19.99f; // Usa float para precios con decimales
int cantidad = 100;    // Usa int para cantidades enteras
```

- Usa `const` para definir valores que no deben o cuyo valor nunca cambia durante la ejecución del programa.
```cpp
const double PI = 3.14159; // Constante para el valor de PI
```

- Evita el uso excesivo de tipos de datos grandes si no es necesario, para optimizar el uso de memoria.
```cpp
float temperatura = 36.5f; // No uses double si float es suficiente
```

- Sé consciente de las conversiones implícitas entre tipos de datos, ya que pueden llevar a pérdida de precisión o errores inesperados.
```cpp
int entero = 15;
float decimal = entero / 2.0f; // Correcto: división con punto flotante será 7.5
float decimalIncorrecto = entero / 2; // Incorrecto: división entera  será 7 // [!code warning]
```
