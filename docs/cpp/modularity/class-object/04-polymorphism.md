---
title: Polimorfismo en C++
---

# Polimorfismo en C++

El polimorfismo, derivado del griego que significa "muchas formas", es un principio fundamental de la programación orientada a objetos que permite que una misma función o método pueda comportarse de diferentes maneras según el contexto en el que se utilice. En C++, el polimorfismo se logra principalmente a través de la herencia y las funciones virtuales.

Aquí también aplicaremos un poco de lo que son los conceptos de [funciones y sobrecarga de funciones](../advanced-functions).

## Tipos de polimorfismo
Existen dos tipos principales de polimorfismo en C++:
1. **Polimorfismo en tiempo de compilación (estático)**: Se refiere a la capacidad de una función para comportarse de manera diferente según los tipos de datos con los que se llama. Esto se logra mediante la sobrecarga de funciones y la sobrecarga de operadores.
2. **Polimorfismo en tiempo de ejecución (dinámico)**: Se refiere a la capacidad de una función para comportarse de manera diferente según el objeto al que se aplica en tiempo de ejecución. Esto se logra mediante el uso de funciones virtuales y la herencia.

## Polimorfismo en tiempo de compilación

```cpp
#include <iostream>
using namespace std;

// Clase base
class Animal {
public:
    void hacerSonido() {
        cout << "El animal hace un sonido genérico." << endl;
    }
}

// Clase derivada: Perro
class Perro : public Animal {
public:
    void hacerSonido() {
        cout << "El perro hace guau guau" << endl;
    }
};

int main() {
    Animal miAnimal;
    Perro miPerro;

    miAnimal.hacerSonido(); // Llama a la función de Animal
    miPerro.hacerSonido();  // Llama a la función de Perro

    return 0;
}
```

Como se puede observar en el ejemplo anterior, la función `hacerSonido()` se comporta de manera diferente según el tipo de objeto que la llama, demostrando así el polimorfismo en tiempo de compilación.

## Ejemplo de polimorfismo en tiempo de ejecución

```cpp
#include <iostream>
using namespace std;

// Clase base
class Animal {
public:
    virtual void hacerSonido() { // Función virtual
        cout << "El animal hace un sonido genérico." << endl;
    }
};

// Clase derivada: Perro
class Perro : public Animal {
public:
    void hacerSonido() override { // Sobrescribe la función virtual
        cout << "El perro ladra." << endl;
    }
};
// Clase derivada: Gato
class Gato : public Animal {
public:
    void hacerSonido() override { // Sobrescribe la función virtual
        cout << "El gato maúlla." << endl;
    }
};

int main() {
    Animal* miAnimal; // Puntero a la clase base

    Perro miPerro;
    Gato miGato;

    // Apunta al objeto Perro
    miAnimal = &miPerro;
    miAnimal->hacerSonido(); // Llama a la función de Perro

    // Apunta al objeto Gato
    miAnimal = &miGato;
    miAnimal->hacerSonido(); // Llama a la función de Gato

    return 0;
}
```

En este ejemplo, la función `hacerSonido()` es declarada como virtual en la clase base `Animal`. Esto permite que, en tiempo de ejecución, la función correcta sea llamada según el tipo del objeto al que apunta el puntero `miAnimal`, demostrando así el polimorfismo en tiempo de ejecución.

## Sobrecarga de funciones

Los métodos de clases también pueden ser sobrecargados, lo que significa que puedes tener múltiples funciones con el mismo nombre pero con diferentes listas de parámetros dentro de la misma clase. El compilador determina cuál función llamar en función de los argumentos proporcionados.

```cpp
#include <iostream>
using namespace std;

class Sumador {
public:
    // Sobrecarga de la función sumar para enteros
    int sumar(int a, int b) {
        return a + b;
    }
    // Sobrecarga de la función sumar para flotantes
    float sumar(float a, float b) {
        return a + b;
    }
};

int main() {
    Sumador sumador;

    int resultadoEntero = sumador.sumar(5, 10); // Llama a la versión de enteros
    float resultadoFlotante = sumador.sumar(5.5f, 10.2f); // Llama a la versión de flotantes

    cout << "Suma de enteros: " << resultadoEntero << endl;
    cout << "Suma de flotantes: " << resultadoFlotante << endl;

    return 0;
}
```

En este ejemplo, la clase `Sumador` tiene dos funciones `sumar()` con diferentes tipos de parámetros. El compilador selecciona la función adecuada según los argumentos proporcionados en la llamada.

## Sobrecarga de operadores

C++ también permite la sobrecarga de operadores, lo que significa que puedes definir cómo los operadores estándar (como +, -, *, etc.) funcionan con objetos de tus propias clases.

```cpp
#include <iostream>
using namespace std;

class Punto {
public:
    int x, y;
    Punto(int xCoord, int yCoord) : x(xCoord), y(yCoord) {}
    // Sobrecarga del operador +
    Punto operator+(const Punto& otro) {
        return Punto(x + otro.x, y + otro.y);
    }
};

int main() {
    Punto p1(2, 3);
    Punto p2(4, 5);

    Punto p3 = p1 + p2; // Usa la sobrecarga del operador +

    cout << "Punto resultante: (" << p3.x << ", " << p3.y << ")" << endl;

    return 0;
}
```

En este ejemplo, la clase `Punto` sobrecarga el operador `+` para permitir la suma de dos objetos `Punto`. Cuando se usa el operador `+`, se llama a la función sobrecargada que define cómo sumar las coordenadas de los puntos.
