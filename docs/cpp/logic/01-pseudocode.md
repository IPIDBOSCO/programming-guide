---
title: Pseudocódigo
---

# Pseudocódigo

El pseudocódigo es un método utilizado para visualizar la estructura lógica de un programa sin necesidad de utilizar la sintaxis específica de un lenguaje de programación. Es una herramienta útil para planificar y comunicar ideas antes de escribir código real.

El pseudocódigo utiliza una combinación de lenguaje natural y convenciones estructurales para describir algoritmos y procesos de manera clara y concisa. A continuación, se presentan algunos elementos comunes del pseudocódigo:
- **Instrucciones secuenciales**: Representan una serie de pasos que se ejecutan uno tras otro.
  
```
INICIO
    LEER número
    IMPRIMIR número
FIN
```
- **Estructuras de decisión**: Permiten tomar decisiones basadas en condiciones.

```
SI número > 0 ENTONCES
    IMPRIMIR "El número es positivo"
SINO
    IMPRIMIR "El número es negativo o cero"
FIN SI
```

- **Bucles**: Permiten repetir un conjunto de instrucciones mientras se cumpla una condición.

```
MIENTRAS contador < 10 HACER
    IMPRIMIR contador
    contador = contador + 1
FIN MIENTRAS
```

:::: tip 📋 Ejemplo más práctico

::: info 🎯 Problema
Se necesita leer la humedad de un sensor puesto en un huerto, si la humedad es menor a 30% entonces se debe encender el sistema de riego, en caso contrario se debe apagar el sistema de riego. Toma en cuenta que debes leer la humedad continuamente para mantener el huerto en las mejores condiciones.
:::

```
INICIO
    MIENTRAS VERDADERO HACER
        LEER humedad_del_sensor
        SI humedad_del_sensor < 30 ENTONCES
            ENCENDER sistema_de_riego
        SINO
            APAGAR sistema_de_riego
        FIN SI
    FIN MIENTRAS
FIN
```

Esto puede parecer muy simple, pero es la base para entender cómo estructurar programas más complejos. Si lo llevamos a código C++, podría verse así:

::: tabs
== Arduino

Este ejemplo está pensado para un Arduino, que es un microcontrolador muy popular para proyectos de electrónica y programación embebida.

```cpp
#include <Arduino.h> // Incluimos la librería de Arduino para usar sus funciones I/O

int sensorPin = 4; // Pin del sensor de humedad
int riegoPin = 7;   // Pin del sistema de riego

void setup() {
    pinMode(riegoPin, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int humedad = analogRead(sensorPin); // Leer humedad
    Serial.println(humedad);
    
    if (humedad < 300) { // Suponiendo que 300 representa 30%
        digitalWrite(riegoPin, HIGH); // Encender riego
    } else {
        digitalWrite(riegoPin, LOW); // Apagar riego
    }
    
    delay(1000); // Esperar 1 segundo antes de la siguiente lectura, mejora la estabilidad
}
```

== Raspberry Pi Pico

Este ejemplo está pensado para una Raspberry Pi Pico, que utiliza el microcontrolador RP2040 y se programa comúnmente en C++ con el SDK oficial de Raspberry Pi.

```cpp
#include "pico/stdlib.h"
#include <stdio.h>

const uint SENSOR_PIN = 26; // Pin del sensor de humedad (ADC0)
const uint RIEGO_PIN = 15;   // Pin del sistema de riego

int main() {
    stdio_init_all();
    gpio_init(RIEGO_PIN);
    gpio_set_dir(RIEGO_PIN, GPIO_OUT);
    
    adc_init();
    adc_gpio_init(SENSOR_PIN);
    adc_select_input(0); // Seleccionamos el canal ADC0

    while (true) {
        uint16_t humedad = adc_read(); // Leer humedad
        printf("Humedad: %d\n", humedad);
        
        if (humedad < 1230) { // Suponiendo que 1230 representa 30%
            gpio_put(RIEGO_PIN, 1); // Encender riego
        } else {
            gpio_put(RIEGO_PIN, 0); // Apagar riego
        }
        
        sleep_ms(1000); // Esperar 1 segundo antes de la siguiente lectura
    }
    return 0;
}
```

== ESP-IDF

Este ejemplo está pensado para un ESP32 utilizando el framework ESP-IDF, que es una plataforma de desarrollo oficial para este microcontrolador.

```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "driver/gpio.h"
#include "driver/adc.h"
#include "esp_log.h"
#include <stdio.h>

#define RIEGO_PIN GPIO_NUM_7 // Pin del sistema de riego
#define SENSOR_CHANNEL ADC1_CHANNEL_0 // Canal del sensor de humedad

void app_main() {
    gpio_set_direction(RIEGO_PIN, GPIO_MODE_OUTPUT);
    adc1_config_width(ADC_WIDTH_BIT_12);
    adc1_config_channel_atten(SENSOR_CHANNEL, ADC_ATTEN_DB_11);

    while (true) {
        int humedad = adc1_get_raw(SENSOR_CHANNEL); // Leer humedad
        ESP_LOGI("Humedad", "Valor: %d", humedad);
        
        if (humedad < 1200) { // Suponiendo que 1200 representa 30%
            gpio_set_level(RIEGO_PIN, 1); // Encender riego
        } else {
            gpio_set_level(RIEGO_PIN, 0); // Apagar riego
        }
        
        vTaskDelay(1000 / portTICK_PERIOD_MS); // Esperar 1 segundo antes de la siguiente lectura
    }
}
```
:::
Luce un poco más complejo, además de que es un poco más distinto a lo que hemos visto hasta ahora. Pero la lógica sigue siendo la misma que describimos en el pseudocódigo.

Si el código tiene cosas que no viste antes, no te preocupes, eso es porque estamos interactuando con hardware específico (sensores y actuadores) y eso requiere de librerías y funciones especiales. Más adelante trabajaremos con ellos.
::::
