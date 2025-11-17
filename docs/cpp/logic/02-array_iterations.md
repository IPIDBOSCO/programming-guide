---
title: Iteraciones en arreglos [C++]
---

# Iteraciones en arreglos [C++]

Si tenemos un [arreglo](/cpp/basics/10-arrays.md) y queremos ver sus elementos, podemos hacerlo de la siguiente manera:

```cpp
#include <iostream>
using namespace std;

int main(){
  int numeros[] = {10, 20, 30, 40, 50};

  cout << "Elementos del arreglo:" << endl;
  cout << numeros[0] << endl;
  cout << numeros[1] << endl;
  cout << numeros[2] << endl;
  cout << numeros[3] << endl;
  cout << numeros[4] << endl;
  return 0;
}
```
Sin embargo, esta forma no es eficiente, especialmente si el arreglo es muy grande. En su lugar, podemos usar un ciclo `for` para iterar a través de los elementos del arreglo:

```cpp
#include <iostream>
using namespace std;

int main(){
  int numeros[] = {10, 20, 30, 40, 50};
  int tamaño = sizeof(numeros) / sizeof(numeros[0]); // Calculamos el tamaño del arreglo

  cout << "Elementos del arreglo:" << endl;
  for(int i = 0; i < tamaño; i++){
    cout << numeros[i] << endl; // Accedemos a cada elemento usando el índice i
  }
  return 0;
}
```

De esta manera, el ciclo `for` recorre cada índice del arreglo desde `0` hasta `tamaño - 1`, imprimiendo cada elemento de forma ordenada. Podemos incluso ser capaces de iterar arreglos de cualquier tamaño sin necesidad de cambiar el código del ciclo.

::: tip 💡 Consejo
Una forma más moderna y segura de iterar sobre arreglos en C++ es utilizando el bucle `for` basado en rango (range-based for loop), que simplifica aún más el código:

```cpp
#include <iostream>
using namespace std;

int main(){
  int numeros[] = {10, 20, 30, 40, 50};

  cout << "Elementos del arreglo:" << endl;
  for(int numero : numeros){
    cout << numero << endl; // 'numero' toma el valor de cada elemento del arreglo
  }
  return 0;
}
```
:::

## Arreglo multidimensional

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