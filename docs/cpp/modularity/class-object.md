---
title: Clases y objetos en C++
---

# Clases y objetos en C++

En C++, una clase es una plantilla para crear objetos. Define las propiedades (atributos) y comportamientos (métodos) que los objetos de esa clase tendrán. Un objeto es una instancia concreta de una clase.

Ok... eso es un poco abstracto, así que vamos a explicarlo de otra manera.

::: tip ⛏️ Explicación sencilla

¿Has jugado alguna vez a los videojuegos donde puedes tener diferentes tipos de espadas? (Por ejemplo, Minecraft). Imagina que tienes una "clase" llamada `Espada`. Esta clase define que todas las espadas tienen ciertas propiedades, como `daño`, `durabilidad` y `material`, y ciertos comportamientos, como `atacar()` y `reparar()`.

Cuando creas una espada específica en el juego, como una `EspadaDeDiamante`, estás creando un "objeto" de la clase `Espada`. Esta espada tendrá valores específicos para sus propiedades (por ejemplo, `daño = 7`, `durabilidad = 1561`, `material = "diamante"`) y podrá realizar las acciones definidas en la clase (como atacar y reparar).

En pseudocódigo, esto se vería así:
```
clase Espada {
    propiedad daño
    propiedad durabilidad
    propiedad material

    método atacar() {
        // lógica para atacar
    }

    método reparar() {
        // lógica para reparar
    }
}

objeto EspadaDeDiamante de Espada {
    daño = 7
    durabilidad = 1561
    material = "diamante"
}
```
De esta manera, las clases son como planos o moldes, y los objetos son las cosas reales que creas basándote en esos planos.
:::

Espero que esta explicación te haya ayudado a entender mejor el concepto de clases y objetos. Ya podemos profundizar un poco más en cómo se definen y utilizan en C++.

## Definición de una clase

```cpp
#include <iostream>
using namespace std;

class Persona {
public:
    string nombre;
    int edad;

    void saludar() {
        cout << "Hola, mi nombre es " << nombre << " y tengo " << edad << " años." << endl;
    }
};
```

Esta clase `Persona` tiene dos atributos (`nombre` y `edad`) y un método (`saludar`). Pero aún no hemos creado ningún objeto de esta clase. Vamos a ver cómo hacerlo.

## Creación de un objeto

```cpp
int main() {
    // Crear un objeto de la clase Persona
    Persona p1;
    p1.nombre = "Juan";
    p1.edad = 30;

    // Llamar al método saludar
    p1.saludar();

    return 0;
}
```

En este ejemplo, hemos creado un objeto `p1` de la clase `Persona`, le hemos asignado valores a sus atributos y hemos llamado al método `saludar`, que imprime un mensaje en la consola. Bastante similar a las estructuras, ¿verdad?

## Diferencias entre estructuras y clases

Aunque las estructuras y las clases son muy similares en C++, hay algunas diferencias clave:
- **Visibilidad por defecto**: En las estructuras, los miembros son públicos por defecto, mientras que en las clases son privados.
- **Uso convencional**: Las estructuras se utilizan comúnmente para agrupar datos simples, mientras que las clases se utilizan para definir objetos con comportamientos más complejos.
Aquí hay un ejemplo que ilustra la diferencia en la visibilidad por defecto:

```cpp
#include <iostream>
using namespace std;

struct MiEstructura {
    int x; // Público por defecto
};

class MiClase {
    int y; // Privado por defecto
public:
    void setY(int valor) {
        y = valor;
    }
    int getY() {
        return y;
    }
};

int main() {
    MiEstructura e;
    e.x = 10; // Acceso directo permitido

    MiClase c;
    // c.y = 20; // Error: 'y' es privado
    c.setY(20); // Acceso a través de métodos públicos
    cout << "x: " << e.x << ", y: " << c.getY() << endl;

    return 0;
}
```

En resumen, las estructuras en C++ son una forma útil de agrupar datos relacionados y pueden contener funciones miembro al igual que las clases. La elección entre usar una estructura o una clase depende del contexto y de las convenciones de codificación.

## Especificador `static`

El especificador `static` en C++ se utiliza para definir miembros de clase que son compartidos por todas las instancias de la clase, en lugar de tener una copia separada para cada objeto. Los miembros estáticos pertenecen a la clase en sí, no a los objetos individuales.

Aquí hay un ejemplo que ilustra el uso de miembros estáticos en una clase:

```cpp
#include <iostream>
using namespace std;

class Contador {
public:
    static int cuenta; // Miembro estático

    Contador() {
        cuenta++; // Incrementar el contador cada vez que se crea un objeto
    }

    static void mostrarCuenta() { // Método estático
        cout << "Número de objetos creados: " << cuenta << endl;
    }
};

int Contador::cuenta = 0; // Inicializar el miembro estático

int main() {
    Contador c1;
    Contador c2;
    Contador c3;

    Contador::mostrarCuenta(); // Llamar al método estático

    return 0;
}
```

En este ejemplo, la clase `Contador` tiene un miembro estático `cuenta` que lleva un registro del número de objetos creados. Cada vez que se crea un nuevo objeto de la clase `Contador`, el constructor incrementa el valor de `cuenta`. El método estático `mostrarCuenta` se utiliza para mostrar el número total de objetos creados. Dado que `cuenta` es un miembro estático, su valor es compartido entre todas las instancias de la clase.

Los miembros estáticos son útiles cuando se necesita mantener información común a todas las instancias de una clase, como contadores, configuraciones globales, etc. Los miembros estáticos pueden ser accedidos directamente a través del nombre de la clase, sin necesidad de crear un objeto de la clase.

