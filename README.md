# Chamo Gourmet CR — Sitio web

Landing page para **Chamo Gourmet CR**, restaurante de comida venezolana gourmet en San José, Costa Rica.
Inspirada en el estilo de su Instagram [@chamogourmetcr](https://www.instagram.com/chamogourmetcr/): fondos oscuros con acentos dorados y un toque elegante/gourmet.

## Características

- Diseño responsive (móvil, tablet, escritorio)
- Hero con imagen y animación sutil
- Sección de historia ("de una caja de antojos a un restaurante propio")
- Menú filtrable por categorías (Arepas, Cachapas, Tequeños, Parrilla, Hamburguesas, Menú Kids)
- Promociones, galería estilo Instagram
- Ubicación con mapa, horarios y contacto
- Botón flotante de WhatsApp para pedidos (8496-6860)
- Animaciones reveal on-scroll

## Tecnologías

- HTML5
- TailwindCSS (vía CDN) + CSS personalizado
- JavaScript vanilla (sin dependencias ni build)
- Fuentes: Playfair Display + Poppins (Google Fonts)

## Cómo ejecutar

No requiere instalación. Abrí `index.html` directamente, o serví la carpeta:

```bash
# opción 1: Python
python3 -m http.server 5500

# opción 2: Node
npx serve .
```

Luego abrí `http://localhost:5500`.

## Notas

- Los **precios e imágenes del menú son referenciales** (placeholders de Unsplash). Reemplazalos por las fotos y precios reales del restaurante.
- Verificá la dirección exacta y el horario con el negocio antes de publicar.
- El número de WhatsApp usado es `+506 8496-6860` (según su Facebook).

## Estructura

```
chamo-gourmet/
├── index.html
├── css/styles.css
├── js/main.js
└── README.md
```
