# Encriptador de texto

[![CI](https://github.com/Demiannnnnn/encriptador-texto/actions/workflows/ci.yml/badge.svg?branch=tests/unitarios-y-ci)](https://github.com/Demiannnnnn/encriptador-texto/actions/workflows/ci.yml)

Aplicación web para encriptar y desencriptar mensajes de texto, desarrollada para el Challenge de Oracle ONE y Alura LATAM.

## Reglas de sustitución

El encriptador reemplaza únicamente las vocales minúsculas según las siguientes reglas definidas en `Proyecto Alura/encriptador.js`:

- La letra `a` se convierte en `ai`
- La letra `e` se convierte en `enter`
- La letra `i` se convierte en `imes`
- La letra `o` se convierte en `ober`
- La letra `u` se convierte en `ufat`

Las consonantes, números, espacios y caracteres especiales se mantienen sin cambios. La función de desencriptado revierte exactamente estas sustituciones para restaurar el mensaje original.

## Stack tecnológico

- **HTML5**
- **CSS3**
- **JavaScript**
- **Node.js** (utilizado para pruebas con el ejecutor integrado `node --test`, Node ≥ 18)

## Cómo usarlo

Para utilizar la aplicación en el navegador:

1. Abrir el archivo `Proyecto Alura/index.html` en cualquier navegador web.
2. Ingresar el texto que se desea encriptar o desencriptar en el campo de texto (solo letras minúsculas y sin acentos).
3. Presionar el botón **Encriptar mensaje** o **Desencriptar mensaje** según la acción deseada.

## Cómo testear

El repositorio no tiene dependencias de npm y utiliza el runner de pruebas nativo de Node.js.

Requisitos:
- Node.js ≥ 18

Ejecutar las pruebas unitarias:
```bash
npm test
```

Comprobar la sintaxis del script:
```bash
node --check "Proyecto Alura/encriptador.js"
```
