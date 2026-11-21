# Encriptador de texto — Challenge Oracle ONE / Alura

Aplicación web estática para encriptar y desencriptar mensajes de texto en el navegador, desarrollada como parte del Challenge de Oracle Next Education (ONE) y Alura LATAM.

## Reglas de encriptación

La aplicación reemplaza únicamente las vocales minúsculas sin tilde siguiendo estas llaves de sustitución:

- `a` → `ai`
- `e` → `enter`
- `i` → `imes`
- `o` → `ober`
- `u` → `ufat`

Las consonantes, espacios y demás caracteres se conservan sin modificaciones. El desencriptado revierte exactamente estas secuencias para recuperar el texto original.

## Stack tecnológico

- **HTML5** (`Proyecto Alura/index.html`)
- **CSS3** (`Proyecto Alura/style.css`)
- **JavaScript Vanilla** (lógica de encriptación/desencriptación y manejo del DOM en `Proyecto Alura/index.html`)

## Estructura del proyecto

```text
.
├── LICENSE.md
├── README.md
└── Proyecto Alura/
    ├── index.html
    ├── style.css
    └── imagenes/
        ├── Exclamacion.png
        ├── Logo.png
        └── duda.png
```

## Cómo ejecutar

No requiere instalación de dependencias ni compilación:

1. Abre `Proyecto Alura/index.html` directamente en un navegador web, o sirve el directorio con un servidor estático local (por ejemplo, `python3 -m http.server 8000`).
2. Escribe un mensaje en minúsculas y sin acentos en el área de texto.
3. Haz clic en **Encriptar mensaje** o **Desencriptar mensaje** para ver el resultado en el panel derecho.

## Licencia

Distribuido bajo la licencia MIT. Consulta `LICENSE.md` para más detalles.
