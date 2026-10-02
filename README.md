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

Los archivos para descargar están en la carpeta `descargas/` de este repositorio y se sirven desde GitHub (`window.RELEASE_BASE` en `data.js`). Vercel los ignora (`.vercelignore`) para que el despliegue sea liviano. Para actualizar una clase, reemplace el archivo en `descargas/` con el mismo nombre y haga push.

## Despliegue

Conectado a Vercel: cada `git push` a `main` publica una nueva versión.
