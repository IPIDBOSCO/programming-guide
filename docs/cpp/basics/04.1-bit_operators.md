---
title: Operando bit a bit [C++]
---

# Operando bit a bit en C++

Los operadores bit a bit en C++ permiten manipular datos a nivel de bits individuales. Estos operadores son útiles para tareas que requieren un control preciso sobre los bits, como la programación de sistemas, la criptografía y la optimización del rendimiento.

## Tipos de Operadores Bit a Bit

| Operador | Nombre | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `&`      | AND bit a bit | Realiza una operación AND entre cada par de bits correspondientes de dos operandos | `a & b` |
| `\|`      | OR bit a bit | Realiza una operación OR entre cada par de bits correspondientes de dos operandos | `a \| b` |
| `^`      | XOR bit a bit | Realiza una operación XOR entre cada par de bits correspondientes de dos operandos | `a ^ b` |
| `~`      | NOT bit a bit | Invierte todos los bits del operando | `~a` |
| `<<`     | Desplazamiento a la izquierda | Desplaza los bits del operando hacia la izquierda un número especificado de posiciones | `a << 2` |
| `>>`     | Desplazamiento a la derecha | Desplaza los bits del operando hacia la derecha un número especificado de posiciones | `a >> 2` |

```cpp
#include <iostream>

int main() {
    unsigned int a = 5;  // En binario: 0000 0101
    unsigned int b = 3;  // En binario: 0000 0011

    unsigned int andResult = a & b;   // Resultado: 0000 0001 (1 en decimal)
    unsigned int orResult = a | b;    // Resultado: 0000 0111 (7 en decimal)
    unsigned int xorResult = a ^ b;   // Resultado: 0000 0110 (6 en decimal)
    unsigned int notResult = ~a;      // Resultado: 1111 1010 (depende del tamaño del entero)
    unsigned int leftShift = a << 2;  // Resultado: 0001 0100 (20 en decimal)
    unsigned int rightShift = a >> 1; // Resultado: 0000 0010 (2 en decimal)

    std::cout << "AND: " << andResult << std::endl;
    std::cout << "OR: " << orResult << std::endl;
    std::cout << "XOR: " << xorResult << std::endl;
    std::cout << "NOT: " << notResult << std::endl;
    std::cout << "Left Shift: " << leftShift << std::endl;
    std::cout << "Right Shift: " << rightShift << std::endl;

    return 0;
}
```