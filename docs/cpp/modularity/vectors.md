---
title: Vectores en C++
---

# Vectores en C++

Cuando creamos un [arreglo](../basics/10-arrays.md) en C++, debemos definir su tamaño de manera fija, lo que puede ser limitante en situaciones donde no conocemos de antemano cuántos elementos necesitaremos almacenar. Para resolver este problema, C++ ofrece la clase `std::vector`, que es parte de la biblioteca estándar y proporciona un arreglo dinámico que puede crecer y reducirse según sea necesario.

## Introducción a `std::vector`

Para utilizar `std::vector`, primero debes incluir la cabecera `<vector>`. Los vectores se declaran especificando el tipo de datos que almacenarán entre los signos de menor y mayor (`<>`).

```cpp
#include <vector>

int main() {
 std::vector<int> numeros; // Declara un vector de enteros

  return 0;
}
```

Al ser parte de la biblioteca estándar, los vectores se encuentran en el espacio de nombres `std`, por lo que es común utilizar la directiva `using namespace std;` para evitar tener que escribir `std::` antes de cada uso.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros; // Declara un vector de enteros

    return 0;
}
```

## Operaciones básicas con vectores

Los vectores ofrecen varias operaciones útiles, como agregar elementos, acceder a ellos y eliminar elementos.

### Agregar elementos

Puedes agregar elementos a un vector utilizando el método `push_back()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros;

    // Agregar elementos al vector
    numeros.push_back(10);
    numeros.push_back(20);
    numeros.push_back(30);

    return 0;
}
```

### Acceder a elementos

Puedes acceder a los elementos de un vector utilizando el operador de subíndice `[]` o el método `at()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
   vector<int> numeros = {10, 20, 30};

    // Acceder a elementos
   cout << "Primer elemento: " << numeros[0] <<endl; // Usando []
   cout << "Segundo elemento: " << numeros.at(1) <<endl; // Usando at()

    return 0;
}
```

### Eliminar elementos

Puedes eliminar el último elemento de un vector utilizando el método `pop_back()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    // Eliminar el último elemento
    numeros.pop_back();

    cout << "Tamaño del vector después de pop_back: " << numeros.size() << endl;

    return 0;
}
```

### Insertar elementos en una posición específica

Puedes insertar elementos en una posición específica utilizando el método `insert()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    // Insertar un elemento en la segunda posición (índice 1)
    numeros.insert(numeros.begin() + 1, 15);

    // Mostrar los elementos del vector
    for (int numero : numeros) {
        cout << numero << " ";
    }
    cout << endl;

    return 0;
}
```

## Tamaño del vector

Puedes obtener el tamaño actual del vector utilizando el método `size()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    cout << "Tamaño del vector: " << numeros.size() << endl;

    return 0;
}
```

## Recorrer un vector

Puedes recorrer un vector utilizando un bucle `for`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    // Recorrer el vector
    for (size_t i = 0; i < numeros.size(); i++) {
        cout << "Elemento en el índice " << i << ": " << numeros[i] << endl;
    }

    return 0;
}
```

También puedes utilizar un bucle `for` basado en rango para recorrer el vector de manera más sencilla.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    // Recorrer el vector con un bucle for basado en rango
    for (int numero : numeros) {
        cout << "Elemento: " << numero << endl;
    }

    return 0;
}
```

Otro método es utilizar iteradores para recorrer el vector.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};

    // Recorrer el vector con iteradores
    for (vector<int>::iterator it = numeros.begin(); it != numeros.end(); ++it) {
        cout << "Elemento: " << *it << endl;
    }

    return 0;
}
```

## Vector vacío

Puedes verificar si un vector está vacío utilizando el método `empty()`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros;

    if (numeros.empty()) {
        cout << "El vector está vacío." << endl;
    } else {
        cout << "El vector no está vacío." << endl;
    }

    return 0;
}
```

## Conclusión

Los vectores en C++ son una herramienta poderosa para manejar colecciones de datos de tamaño dinámico. Ofrecen una amplia gama de funcionalidades que facilitan la manipulación de datos, desde agregar y eliminar elementos hasta recorrer y acceder a ellos de manera eficiente. Al utilizar `std::vector`, puedes escribir código más flexible y adaptable a diferentes necesidades.

::: warning ⚠️ Aviso
Aquí solo hemos cubierto las operaciones básicas con vectores. La clase `std::vector` ofrece muchas más funcionalidades avanzadas que puedes explorar en la [documentación oficial de C++](https://en.cppreference.com/w/cpp/container/vector).
:::