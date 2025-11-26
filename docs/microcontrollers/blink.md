---
title: HOLA MUNDO para microcontroladores
---

# HOLA MUNDO para microcontroladores

El clásico programa "Hola Mundo" es una tradición en la programación que consiste en mostrar el mensaje "Hola Mundo" en la pantalla o en algún dispositivo de salida. En el caso de los microcontroladores, este programa puede variar dependiendo del hardware y la plataforma que estemos utilizando.

En microcontroladores, el programa "Hola mundo" generalmente implica encender un LED, esto es porque muchos microcontroladores no tienen una pantalla para mostrar texto. Aunque no se llama "Hola Mundo", el nombre que recibe este programa es "Blink", ya que el LED parpadea para indicar que el microcontrolador está funcionando correctamente.

```cpp
#include <Arduino.h> // Incluir la biblioteca de Arduino, No es necesario en algunos entornos

void setup() {
  pinMode(LED_BUILTIN, OUTPUT); // Configurar el pin del LED como salida
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH); // Encender el LED
  delay(1000);                     // Esperar 1 segundo
  digitalWrite(LED_BUILTIN, LOW);  // Apagar el LED
  delay(1000);                     // Esperar 1 segundo
}
```

