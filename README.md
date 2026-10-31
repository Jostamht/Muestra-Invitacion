# Invitación de boda · Muestra floral 💐

**Vista previa:** [jostamht.github.io/Muestra-Invitacion](https://jostamht.github.io/Muestra-Invitacion/)

Esta es una invitación digital de demostración. Quise enseñar cómo podría verse la web de una pareja real: un sobre que se abre con un sello, cuenta regresiva, mapas, música y confirmación de asistencia por WhatsApp, todo en una sola página.

No es una página comercial. Los nombres («Novia» y «Novio»), la fecha (31 de diciembre de 2026), los horarios y las fotos son ficticios.

## El diseño

Los colores salen de una referencia de atardecer: azules profundos que se vuelven lavanda y terminan en durazno y rosa.

| Color | Código |
|---|---|
| Azul profundo | `#3C487C` |
| Azul lavanda | `#797EBA` |
| Lavanda suave | `#A7A0C9` |
| Durazno claro | `#F8D4C4` |
| Rosa empolvado | `#E5B1B9` |

De acento, crema `#FFF9F5`, coral `#C87578`, verde salvia `#8A9C90` y dorado suave `#CDA980`.

Las flores son una ilustración vectorial propia (`assets/floral-vivo.svg`). Hay movimiento suave en los íconos, un sello que pulsa para invitar a tocarlo y pétalos que caen al abrir el sobre. Si el sistema del visitante pide menos movimiento (`prefers-reduced-motion`), las animaciones se reducen.

Las tipografías son Cormorant Garamond, Great Vibes y DM Sans.

## Qué contiene

1. **El sobre.** Un sello con las iniciales de los novios; al tocarlo se abre la invitación y empieza la música.
2. **Portada.** Foto grande con los nombres encima, sobre un degradado para que se lean bien.
3. **Reserva la fecha.** Un calendario del mes con el día de la boda marcado.
4. **Los padres de los novios.** Cuatro nombres editables.
5. **Cuenta regresiva** hasta la hora de la ceremonia.
6. **Ceremonia y recepción.** Cada una con su dirección, su enlace a Google Maps y su mapa incrustado.
7. **Código de vestimenta.** Separado para mujeres y hombres, con ilustraciones y recomendaciones.
8. **Cronograma** de cinco momentos: entrada de los novios, vals, cena, corte de torta y despedida.
9. **Galería** de tres fotos.
10. **Regalos.** Una nota con un código QR de ejemplo.
11. **Zoom** para quien no pueda asistir: hora, ID, contraseña y enlace.
12. **Confirmación por WhatsApp.**
13. **Cierre** con agradecimiento.

Además, un botón de música siempre visible cambia entre «Reproducir música» y «Pausar música». El audio es `assets/musica.mp3` y se activa al tocar el sello; si el navegador lo bloquea, se puede iniciar desde ese botón.

## Cómo se adapta a otra pareja

Todo el contenido está en `config.js`, así que no hace falta tocar el HTML. Los campos son:

`novios`, `fotoPortada`, `padres`, `vestimenta`, `fechaISO`, `fecha`, `ceremonia`, `recepcion`, `cronograma`, `galeria`, `regalos.qr`, `zoom`, `whatsapp` y `musica`.

El calendario y la cuenta regresiva se generan solos a partir de `fechaISO`, y los valores que vienen ahora son solo ejemplos.

### Fotos y QR
Se suben archivos JPG, PNG o WebP a `assets/` y se cambian las rutas en `fotoPortada`, `galeria` o `regalos.qr`. Los marcadores actuales son `foto-portada-muestra.svg`, `foto-muestra.svg` y `qr-muestra.svg`. El QR de relleno no es escaneable y no permite depósitos.

### Mapas
En Google Maps se busca el lugar y se elige Compartir → Insertar un mapa. De ahí se copia solo la URL del atributo `src` en `mapaEmbed` (sin la etiqueta `iframe` completa). El enlace normal para abrir la ubicación va aparte, en `googleMaps`.

### Zoom
Se completan `hora`, `id` y `contrasena`. El botón «Unirse a Zoom» aparece solo cuando `enlace` tiene una URL `https://`.

### Confirmación por WhatsApp
Se escribe `whatsapp.numero` en formato internacional y sin el signo `+` (por ejemplo, el ficticio `59171234567`). Mientras esté vacío, el botón se muestra desactivado.

### Música
Se reemplaza `assets/musica.mp3` por otro MP3 y se ajusta la ruta en `musica`. Antes de usar una invitación de forma comercial conviene revisar que la grabación tenga licencia para compartirse.

## Vista previa al compartir
Al pegar el enlace en WhatsApp o redes aparece «💍 ¡Nos casamos! · Novia y Novio», con la fecha y la imagen `assets/portada-compartir.jpg` (1200×630).

## Publicación
Es una página estática (HTML, CSS y JavaScript, sin compilación). Se publica con GitHub Pages desde la rama `main`, carpeta raíz: [Settings → Pages](https://github.com/Jostamht/Muestra-Invitacion/settings/pages). Para verla en una computadora basta abrir `index.html` en el navegador.

## Nota de privacidad
Esta muestra se originó a partir de una invitación real. Los archivos actuales son neutros, pero el historial de Git puede conservar material anterior. Para distribuirla como plantilla pública con historial limpio, lo recomendable es crear un repositorio nuevo solo con los archivos de ahora.
