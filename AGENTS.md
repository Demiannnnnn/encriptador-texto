# Guía para Agentes (`AGENTS.md`)

## Propósito del proyecto
Aplicación web estática que encripta y desencripta textos mediante sustitución de vocales minúsculas (`a` → `ai`, `e` → `enter`, `i` → `imes`, `o` → `ober`, `u` → `ufat`), creada para el Challenge de Oracle Next Education (ONE) y Alura LATAM.

## Stack tecnológico
- **HTML5**: estructura de la interfaz (`Proyecto Alura/index.html`).
- **CSS3**: estilos y diseño visual (`Proyecto Alura/style.css`).
- **JavaScript (ES6+)**: funciones `encriptar` y `desencriptar` y eventos del DOM embebidos en `Proyecto Alura/index.html`.
- Sin dependencias externas ni sistema de empaquetado (bundler).

## Estructura de carpetas
```text
.
├── AGENTS.md
├── .gitignore
├── LICENSE.md
├── README.md
└── Proyecto Alura/
    ├── index.html          # Interfaz principal y lógica JS inline
    ├── style.css           # Hoja de estilos principal
    └── imagenes/           # Recursos gráficos (Logo.png, duda.png, Exclamacion.png)
```

## Instalación, ejecución, pruebas y linting

### Instalación
No hay dependencias ni gestor de paquetes configurados en esta rama; no se requiere `npm install`.

### Ejecución local
Abrir `Proyecto Alura/index.html` en el navegador o levantar un servidor HTTP estático desde la raíz del repositorio:
```bash
python3 -m http.server 8000
```

### Verificación y pruebas
El proyecto no cuenta con un runner de tests ni linter configurado en el árbol actual, pero se puede verificar la sintaxis y el funcionamiento de la lógica de encriptación/desencriptación con Node.js extrayendo y evaluando el bloque `<script>` de `Proyecto Alura/index.html`:
```bash
node -e '
const fs = require("fs");
const html = fs.readFileSync("Proyecto Alura/index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const fnBody = script.split("const boton1")[0];
const { encriptar, desencriptar } = new Function(fnBody + "; return { encriptar, desencriptar };")();
const assert = require("assert/strict");
assert.equal(encriptar("gato"), "gaitober");
assert.equal(desencriptar("gaitober"), "gato");
assert.equal(desencriptar(encriptar("hola mundo")), "hola mundo");
console.log("OK: pruebas de encriptar/desencriptar superadas");
'
```

## Convenciones de código
- Mantener el proyecto libre de dependencias innecesarias (HTML, CSS y JS vanilla).
- Nombres de funciones, variables e identificadores del DOM en español (`encriptar`, `desencriptar`, `mensajeEncriptado`, `rectangulo`).
- Referenciar elementos del DOM mediante variables explícitas (`document.getElementById`, `document.querySelector`) en lugar de variables globales implícitas por `id`.
- Usar `const` y `let` en lugar de `var`, y terminar las sentencias con punto y coma (`;`).

## Reglas de seguridad
- **Secretos:** cualquier credencial, token o llave futura debe inyectarse exclusivamente mediante variables de entorno; nunca hardcodear secretos en el código fuente ni en archivos de configuración.
- **Archivos sensibles:** nunca versionar archivos `.env`, `*.pem`, `*.key`, `credentials*.json` ni `token*.txt` (mantenerlos en `.gitignore`). Si se requieren variables de entorno, documentarlas en `.env.example` con el placeholder `CHANGE_ME`.

## Flujo de trabajo Git
- Trabajar siempre en ramas `dev/*`.
- Los cambios deben integrarse mediante Pull Request desde `dev/*` hacia `develop-AGENTS`.
- **Prohibido** hacer commits o push directos a `main` o `develop`.
- Usar mensajes de commit convencionales en inglés (`chore:`, `fix:`, `docs:`, `refactor:`).
