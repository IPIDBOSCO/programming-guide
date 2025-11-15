---
title: Operadores [C++]
---

# Operadores en C++

Los operadores en C++ son símbolos que realizan operaciones específicas en uno o más operandos. Estos operadores se utilizan para realizar cálculos, comparaciones, asignaciones y otras operaciones fundamentales en la programación.

## Tipos de Operadores

### Operadores Aritméticos

| Operador | Nombre | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `+`      | Suma   | Suma dos operandos | `a + b` |
| `-`      | Resta  | Resta el segundo operando del primero | `a - b` |
| `*`      | Multiplicación | Multiplica dos operandos | `a * b` |
| `/`      | División | Divide el primer operando por el segundo | `a / b` |
| `%`      | Módulo | Devuelve el resto de la división del primer operando por el segundo | `a % b` |
| `++`     | Incremento | Incrementa el valor del operando en 1 | `++a` o `a++` |
| `--`     | Decremento | Decrementa el valor del operando en 1 | `--a` o `a--` |

```cpp
int a = 10;
int b = 3;

int suma = a + b;            // 13
int resta = a - b;           // 7
int multiplicacion = a * b;  // 30
int division = a / b;        // 3 (división entera)
int modulo = a % b;          // 1 (resto de la división)
a++;                         // a ahora es 11
b--;                         // b ahora es 2
```

### Operadores de Asignación

| Operador | Nombre | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `=`      | Asignación | Asigna el valor del operando derecho al operando izquierdo | `a = b` |
| `+=`     | Suma y asigna | Suma el operando derecho al operando izquierdo y asigna el resultado al operando izquierdo | `a += b` |
| `-=`     | Resta y asigna | Resta el operando derecho del operando izquierdo y asigna el resultado al operando izquierdo | `a -= b` |
| `*=`     | Multiplicación y asigna | Multiplica el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo | `a *= b` |
| `/=`     | División y asigna | Divide el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo | `a /= b` |
| `%=`     | Módulo y asigna | Calcula el módulo del operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo | `a %= b` |

```cpp
int a = 10;
a += 5;  // a ahora es 15
a *= 2;  // a ahora es 30
```

### Operadores de Comparación

| Operador | Nombre | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `==`     | Igualdad | Compara si dos operandos son iguales | `a == b` |
| `!=`     | Desigualdad | Compara si dos operandos son diferentes | | `a != b` |
| `<`      | Menor que | Compara si el operando izquierdo es menor que el derecho | `a < b` |
| `>`      | Mayor que | Compara si el operando izquierdo es mayor que el derecho | | `a > b` |
| `<=`     | Menor o igual que | Compara si el operando izquierdo es menor o igual que el derecho | `a <= b` |
| `>=`     | Mayor o igual que | Compara si el operando izquierdo es mayor o igual que el derecho | `a >= b` |

```cpp
int a = 10;
int b = 20;

bool esIgual = (a == b);        // false
bool esDiferente = (a != b);   // true
bool esMenor = (a < b);        // true
bool esMayor = (a > b);        // false
```

### Operadores Lógicos

| Operador | Nombre | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `&&`     | AND lógico | Devuelve verdadero si ambos operandos son verdaderos | `a && b` |
| `\|\|`     | OR lógico | Devuelve verdadero si al menos uno de los operandos es verdadero | `a \|\| b` |
| `!`      | NOT lógico | Invierte el valor lógico del operando | `!a` |

```cpp
bool a = true;
bool b = false;

bool andResult = a && b;  // false
bool orResult = a || b;   // true
bool notResult = !a;      // false
```

## Orden de Precedencia

El orden de precedencia determina el orden en que se evalúan los operadores en una expresión. A continuación se muestra una tabla con la precedencia de los operadores más comunes en C++ (de mayor a menor):

| Precedencia | Operadores                  |
|-------------|-----------------------------|
| 1           | `++`, `--`                  |
| 2           | `*`, `/`, `%`               |
| 3           | `+`, `-`                    |
| 4           | `<`, `>`, `<=`, `>=`        |
| 5           | `==`, `!=`                  |
| 6           | `&&`                        |
| 7           | `\|\|`                       |
| 8           | `=` , `+=`, `-=`, `*=`, `/=`, `%=` |

Es importante utilizar paréntesis para aclarar el orden de evaluación cuando se combinan múltiples operadores en una expresión.

```cpp
int result1 = 10 - 2 + 5;    // (10 - 2) + 5 = 13
int result2 = 10 - (2 + 5);  // 10 - 7 = 3

cout << result1 << "\n";
cout << result2 << "\n";
```