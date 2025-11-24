---
title: Constructores de objetos en C++
---

# Constructores y destructores

## Constructores de objetos en C++

Los constructores son métodos especiales que se llaman automáticamente cuando se crea un objeto. Se utilizan para inicializar los atributos del objeto.

```cpp
#include <iostream>
using namespace std;

class Persona {
public:
    string nombre;
    int edad;

    // Constructor
    Persona(string n, int e) {
        nombre = n;
        edad = e;
    }

    void saludar() {
        cout << "Hola, mi nombre es " << nombre << " y tengo " << edad << " años." << endl;
    }
};

int main() {
    // Crear un objeto de la clase Persona usando el constructor
    Persona p1("Ana", 25);
    p1.saludar();

    return 0;
}

```

En este ejemplo, el constructor `Persona(string n, int e)` inicializa los atributos `nombre` y `edad` cuando se crea un objeto de la clase `Persona`. Al crear el objeto `p1`, pasamos los valores "Ana" y 25 al constructor, que asigna estos valores a los atributos correspondientes.

Básicamente, un constructor es una función que se llama automáticamente cuando se crea un objeto de una clase, y su propósito principal es inicializar los atributos del objeto con valores específicos.

## Destructor

Un destructor es un método especial que se llama automáticamente cuando un objeto es destruido o sale del alcance. Se utiliza para liberar recursos que el objeto pudo haber adquirido durante su vida útil, como memoria dinámica o archivos abiertos.

```cpp
#include <iostream>
using namespace std;

class Persona {
public:
    string nombre;
    int edad;

    // Constructor
    Persona(string n, int e) {
        nombre = n;
        edad = e;
        cout << "Constructor llamado para " << nombre << endl;
    }

    // Destructor
    ~Persona() {
        cout << "Destructor llamado para " << nombre << endl;
    }

    void saludar() {
        cout << "Hola, mi nombre es " << nombre << " y tengo " << edad << " años." << endl;
    }
};

int main() {
    {
        // Crear un objeto de la clase Persona
        Persona p1("Carlos", 40);
        p1.saludar();
    } // El objeto p1 sale del alcance aquí, y se llama al destructor

    return 0;
}
```

En este ejemplo, el destructor `~Persona()` se llama automáticamente cuando el objeto `p1` sale del alcance al final del bloque `{}` en el `main()`. El destructor imprime un mensaje indicando que el objeto está siendo destruido. Los destructores son útiles para limpiar recursos y evitar fugas de memoria.

