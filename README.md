# Acciones Correctivo-Modificativas · EAFIT

Sitio del curso **Acciones Correctivo-Modificativas** de la Especialización en Mantenimiento Industrial (Universidad EAFIT, 2026-2).

- **Clases**: las cinco clases con ideas clave, conceptos y ejemplos.
- **Repaso**: conceptos, tarjetas de estudio, autoevaluación y ruta de decisión después de la falla.
- **Descargas**: clases en PDF y PowerPoint y material del curso anterior.
- **Papers 2026**: investigación reciente relacionada con el curso.

## Estructura

```
index.html            página única (enrutamiento por #)
assets/css/styles.css estilos
assets/js/data.js     contenido: clases, preguntas, descargas y papers
assets/js/app.js      vistas y lógica
assets/img/           imágenes (generadas con ChatGPT) y logo
```

Es un sitio estático, sin dependencias ni proceso de compilación.

## Editar contenido

Todo el texto está en `assets/js/data.js`. Para agregar un paper, añada un objeto a `window.PAPERS`.

## Descargas

Los archivos pesados se publican como *assets* de la versión `material-2026-2` en GitHub Releases. La variable `window.RELEASE_BASE` (al inicio de `data.js`) apunta a esa versión.

## Despliegue

Conectado a Vercel: cada `git push` a `main` publica una nueva versión.
