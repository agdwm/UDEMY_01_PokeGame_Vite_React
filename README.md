# Pokémon Guessing Game

Una aplicación web interactiva construida con React y TypeScript que desafía a los usuarios a adivinar el nombre de un Pokémon basándose en su imagen. El juego utiliza la PokéAPI para obtener datos reales de Pokémon de la generación original.

## 📋 Descripción General

**Pokémon Guessing Game** es una aplicación educativa que combina entretenimiento con elementos interactivos. Los usuarios reciben la imagen de un Pokémon y deben escribir su nombre en inglés para ganar. La aplicación proporciona retroalimentación inmediata indicando si la respuesta es correcta o incorrecta, y ofrece efectos visuales de celebración cuando se acierta.

### Características principales

- **Obtención de datos en tiempo real**: Integración con la PokéAPI para acceder a datos reales de Pokémon
- **Normalización y validación de nombres de Pokémon**: Sistema de normalización que maneja variaciones en acentos y caracteres especiales
- **Interfaz responsiva**: Diseño adaptable para dispositivos móviles y escritorio utilizando Bootstrap
- **Efectos visuales**: Confeti animado como celebración al responder correctamente
- **Estado del juego**: Gestión clara de estados (jugando, respuesta correcta, respuesta incorrecta)
- **Indicadores de carga**: Spinner visual durante la obtención de datos
- **Accesibilidad**: Consideraciones básicas de accesibilidad en la interfaz

## 🛠️ Requisitos Previos

- **Node.js** (v16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- Conexión a Internet (para acceder a la PokéAPI)

## 📦 Instalación y Ejecución

### 1. Clonar o descargar el proyecto

```bash
git clone <URL-DEL-REPOSITORIO>
cd poke-project
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### 4. Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

### 5. Previsualizar la versión compilada

```bash
npm run preview
```

## 🔧 Variables de Entorno y Configuración

Este proyecto no requiere variables de entorno adicionales. Sin embargo, la configuración importante incluye:

- **URL de la API**: La PokéAPI se accede desde `https://pokeapi.co/api/v2/pokemon`
- **Rango de Pokémon**: El juego selecciona aleatoriamente entre Pokémon del ID 1 al 151 (generación original)

Para modificar estos valores, edita el archivo `src/services/pokemon.services.ts`:

```typescript
const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;
```

## 📁 Estructura del Proyecto

```
poke-project/
├── src/
│   ├── components/                # Componentes React reutilizables
│   │   ├── PokemonDisplay.tsx     # Muestra la silueta del Pokémon (image oculta)
│   │   ├── PokemonForm.tsx        # Formulario de entrada para adivinar
│   │   ├── PokemonResult.tsx      # Componente de resultado (correcto/incorrecto)
│   │   └── Spinner.tsx            # Indicador de carga
│   ├── hooks/                     # Hooks personalizados
│   │   └── use-game-manager.ts    # Gestión de estado del juego
│   ├── services/                  # Lógica de negocio y llamadas a API
│   │   └── pokemon.services.ts    # Servicio de Pokémon y validación
│   ├── types/                     # Definiciones de tipos TypeScript
│   │   └── pokemon.interface.ts   # Interfaz de datos de Pokémon
│   ├── utils/                     # Funciones utilitarias
│   │   └── random-number.ts       # Generador de números aleatorios
│   ├── App.tsx                    # Componente raíz
│   ├── main.tsx                   # Punto de entrada
│   ├── App.css                    # Estilos de la aplicación
│   └── index.css                  # Estilos globales
├── public/                        # Archivos estáticos
├── vite.config.ts                 # Configuración de Vite
├── tsconfig.json                  # Configuración de TypeScript
├── eslint.config.js               # Configuración de ESLint
└── package.json                   # Dependencias y scripts

```

### Descripción de capas

- **Componentes**: Presentación de la interfaz de usuario, sin lógica de negocio
- **Hooks**: Gestión centralizada de estado y efectos secundarios
- **Servicios**: Llamadas a API y lógica de validación
- **Types**: Contratos de datos y seguridad de tipos
- **Utils**: Funciones auxiliares reutilizables

## 📜 Scripts Disponibles

| Script            | Descripción                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR            |
| `npm run build`   | Compila el proyecto para producción                 |
| `npm run lint`    | Ejecuta ESLint para verificar la calidad del código |
| `npm run preview` | Previsualiza la versión compilada localmente        |

## 🔧 Tecnologías Utilizadas

### Core

- **React** - Biblioteca de UI
- **TypeScript** - Lenguaje tipado para JavaScript
- **Vite** - Bundler y servidor de desarrollo

### UI y Estilos

- **Bootstrap** `5.3.8` - Framework CSS responsive
- **Bootstrap Icons** `1.13.1` - Iconografía
- **classnames** `2.5.1` - Utilidad para clases CSS condicionales

### Librerías Adicionales

- **react-dom** `19.1.1` - Renderización de React en el DOM
- **react-confetti** `6.4.0` - Efectos de confeti animado
- **react-use** `17.6.0` - Hooks personalizados reutilizables

### Desarrollo

- **ESLint** `9.36.0` - Linter para análisis de código
- **eslint-plugin-react-hooks** - Reglas ESLint para hooks de React
- **eslint-plugin-react-refresh** - Reglas para Fast Refresh de Vite

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. Sube el proyecto a un repositorio de GitHub
2. Conecta tu repositorio con [Vercel](https://vercel.com)
3. Vercel detectará automáticamente el proyecto y compilará con `npm run build`
4. Tu aplicación estará lista en `https://<tu-proyecto>.vercel.app`

### Opción 2: Netlify

1. Sube el proyecto a un repositorio de GitHub
2. Conecta tu repositorio con [Netlify](https://netlify.com)
3. Configura el comando de build: `npm run build`
4. Directorio de publicación: `dist`

### Opción 3: GitHub Pages

> En GitHub Pages, al tratarse de una SPA, es necesario configurar correctamente el `base` para evitar rutas rotas al recargar o acceder directamente a rutas internas.

1. Modifica `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: "/tu-repositorio-name/",
     plugins: [react()],
   });
   ```
2. Ejecuta `npm run build`
3. Sube el contenido de `dist/` a la rama `gh-pages`

## ⚠️ Notas Importantes y Consideraciones Técnicas

### Mecánica del Juego

- La imagen del Pokémon se muestra **oculta con un filtro de brillo** (`brightness(0)`) durante la partida, revelando solo su silueta
- El nombre del Pokémon permanece oculto mientras se está jugando (muestra "¿Quién es ese Pokémon?")
- Una vez el usuario responde, se revela la imagen completa y el nombre verdadero
- La transición tiene una animación suave de 0.3 segundos para mejor experiencia de usuario

### Validación de Nombres

- La comparación de nombres es **case-insensitive** y normaliza caracteres acentuados
- Se elimina el contenido whitespace antes y después de la entrada del usuario
- Los caracteres especiales son ignorados en la validación

### Gestión de Estado

- El estado del juego utiliza un patrón de literal types con `as const` para mayor type-safety
- Cada nueva partida genera automáticamente un Pokémon aleatorio diferente
- El componente se reinicia automáticamente después de una respuesta

### API Considerations

- La PokéAPI es gratuita y no requiere autenticación
- Se recomienda implementar cacheo para mejorar el rendimiento en producción
- El rango de Pokémon se limita a 151 (generación Pokémon Red/Blue original)

### Estilos

- Se utiliza Bootstrap para mantener consistencia y facilitar el desarrollo responsivo
- Los estilos globales se importan en `src/index.css`
- Las clases CSS condicionales se manejan con la librería `classnames`

## 👨‍💻 Autor y Contexto

Este proyecto ha sido desarrollado como parte del curso [React JS con TypeScript y Next.js Curso Desarrollo FullStack](https://www.udemy.com/course/curso-react-js/), con el objetivo de aplicar conceptos fundamentales como:

- Componentes funcionales y hooks
- Gestión de estado con `useState` y `useCallback`
- Efectos secundarios con `useEffect`
- Integración con APIs externas
- TypeScript para type-safety
- Testing y validación de entrada de usuario
- Responsive design

## 📄 Licencia

Este proyecto es parte de un curso educativo y está disponible bajo licencia MIT.
