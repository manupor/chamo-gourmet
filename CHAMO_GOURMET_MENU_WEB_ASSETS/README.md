# Chamo Gourmet - extracción del menú para web responsive

## Qué se pudo extraer

El PDF fue exportado desde Adobe Illustrator y contiene 8 páginas. Los textos siguen siendo editables y fueron separados en formatos TXT, CSV, JSON y Markdown.

Las páginas 2 a 7 contienen una capa gráfica rasterizada por página. Esa capa incluye el fondo, las fotografías de los platos y algunos adornos integrados. Por eso, el PDF **no contiene cada plato como una fotografía independiente**. La carpeta `02-design-layers-png` conserva las capas compuestas sin el bloque principal de textos; la carpeta `03-design-layers-webp` contiene versiones optimizadas para prototipos web.

Las páginas 1 y 8 son mayormente vectoriales. En `04-brand-and-qr` se incluyen recortes útiles del logo y de los códigos QR. En `05-vector-pages` se incluyen las ocho páginas en SVG para recuperar elementos vectoriales con Illustrator, Figma o Inkscape.

## Estructura de carpetas

- `01-reference-pages`: renders completos para comparar la reconstrucción web con el diseño original.
- `02-design-layers-png`: capas gráficas compuestas extraídas del PDF.
- `03-design-layers-webp`: las mismas capas en WebP, más livianas para web.
- `04-brand-and-qr`: logos transparentes y recortes útiles de la última página.
- `05-vector-pages`: exportaciones SVG completas por página.
- `06-content`: texto original y contenido estructurado para implementación.
- `07-raw-embedded-images`: extracción técnica sin procesar, incluyendo máscaras.
- `08-technical`: metadatos y diagnóstico del PDF.

## Recomendación para construir la página responsive

No conviene mostrar cada página del menú como una imagen vertical. Conviene crear secciones HTML reutilizables: navegación por categorías, tarjetas de productos, precios como texto real, botones de WhatsApp y un bloque final de catering y ubicaciones.

El archivo `06-content/menu-copy-structured.json` puede utilizarse como fuente de datos para React, Next.js o JavaScript. Las fotografías individuales deben solicitarse al diseñador original o separarse manualmente en una segunda etapa, porque el PDF solo conserva composiciones rasterizadas por página.

## Revisión de copy recomendada

Antes de publicar, confirmar con el restaurante posibles detalles de redacción presentes en el material original, por ejemplo `especies` frente a `especias`, el estilo de mayúsculas y el uso consistente de unidades como `g`, `ml`, `oz` y `onzas`.
