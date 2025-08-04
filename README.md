# Formalab - Diseño Paramétrico Visual

Formalab es una plataforma visual para experimentar con diseño paramétrico y generativo. Está diseñada para creativos, diseñadores y arquitectos que quieren explorar formas, colores y transformaciones sin necesidad de programar.

## 🎨 Características

- **Panel de Controles Intuitivo**: Sliders, selectores de color, toggles y selectores para ajustar parámetros en tiempo real
- **5 Tipos de Patrones**: Geométrico, Orgánico, Fractal, Ondas y Cuadrícula
- **Animación en Tiempo Real**: Activa animaciones y ajusta la velocidad
- **Interfaz Responsiva**: Diseño moderno con soporte para modo oscuro
- **Exportación**: (Próximamente) Exporta tus diseños en diferentes formatos

## 🚀 Tecnologías

- **Next.js 15** con App Router
- **React 19** con TypeScript
- **Tailwind CSS 4** para estilos
- **Canvas API** para renderizado de patrones

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd formalab-ai
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎛️ Controles Disponibles

### Patrón
- **Tipo de patrón**: Selecciona entre Geométrico, Orgánico, Fractal, Ondas o Cuadrícula

### Forma
- **Tamaño**: Ajusta el tamaño de los elementos (10-100)
- **Rotación**: Rota los elementos (0-360°)
- **Escala**: Escala los elementos (0.1-3x)

### Color
- **Color primario**: Color principal de los elementos
- **Color secundario**: Color alternativo para variación
- **Color de fondo**: Color del fondo del canvas

### Propiedades
- **Densidad**: Controla la cantidad de elementos (5-100)
- **Complejidad**: Ajusta la complejidad del patrón (1-10)
- **Simetría**: Activa/desactiva la simetría

### Animación
- **Animación**: Activa/desactiva la animación
- **Velocidad**: Controla la velocidad de la animación (0.1-5x)

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── controls/          # Componentes de control
│   │   ├── Slider.tsx     # Control deslizante
│   │   ├── ColorPicker.tsx # Selector de color
│   │   ├── Toggle.tsx     # Interruptor
│   │   ├── Select.tsx     # Selector
│   │   └── ControlPanel.tsx # Panel principal de controles
│   ├── canvas/            # Componentes de visualización
│   │   └── GenerativeCanvas.tsx # Canvas principal
│   ├── ui/                # Componentes de interfaz
│   │   ├── Button.tsx     # Botón reutilizable
│   │   └── Header.tsx     # Encabezado
│   └── FormalabApp.tsx    # Componente principal
└── lib/                   # Utilidades y tipos
    └── types.ts           # Definiciones de tipos TypeScript
```

## 🎯 Próximas Características

- [ ] Exportación a PNG, SVG, PDF
- [ ] Guardado y carga de proyectos
- [ ] Más tipos de patrones
- [ ] Efectos de filtro y post-procesamiento
- [ ] Biblioteca de presets
- [ ] Modo colaborativo
- [ ] Integración con APIs de IA

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Inspirado en herramientas como Processing, p5.js y Grasshopper
- Diseñado para la comunidad creativa y de diseño
- Construido con tecnologías modernas de la web
