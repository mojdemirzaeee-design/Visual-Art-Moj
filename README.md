# Visual Art — Mojdeh Mirzaei

A static portfolio site for a multidisciplinary artist, organized around
**collections**: bodies of work grouped by shared name, concept, or medium,
each with its own artist statement and image gallery.

No build step, no dependencies — plain HTML, CSS, and JS. Open `index.html`
in a browser, or serve the folder with any static file server.

```
python3 -m http.server 8000
```

## Structure

```
index.html                     Home page (hero + featured collections)
about.html                     Bio + exhibition history
contact.html                   Contact details
collections/index.html         All collections, grid view
collections/*.html             One page per collection
assets/css/style.css           All styling
assets/js/main.js              Mobile nav + image lightbox
```

All five collections hold real artwork, with titles, media, dimensions
and years taken from the artist's portfolio:

| Collection | Works | Images |
|---|---|---|
| `in-between-ness.html` | 3 paintings/drawings + 5 open slots | `assets/images/in-between-ness/` |
| `clowns-series.html` | 5 drawings + 4 folded playing cards | `assets/images/clowns-series/` |
| `hands-series.html` | 5 drawings + 3 ceramic sculptures | `assets/images/hands-series/` |
| `flowers-series.html` | 4 colored pencil drawings | `assets/images/flowers-series/` |
| `the-little-fire-and-the-little-girl.html` | 3 illustrations | `assets/images/little-fire/` |

**Statements** are only on In-Between-ness and Hands Series. The other
three pages carry an `<!-- EDIT ME -->` comment where the statement
belongs; paste in a `<section>` with a `.statement` block, copying the
markup from `hands-series.html`.

## Editing content

**Text** — statements, captions, bio and contact details are plain HTML in
each page. Open the file, find the relevant block, and rewrite it.

**Adding a work** — drop the image file into the collection's folder under
`assets/images/<collection-slug>/` and add a figure to the gallery:

```html
<figure data-label="Title — Medium, Year">
  <img src="../assets/images/hands-series/06.jpg" alt="Short description of the work" />
  <figcaption><span class="work-title">Title</span>Medium · 21 × 29.7 cm · 2024</figcaption>
</figure>
```

`data-label` is the caption shown when the image is opened full-size.
Images display at their own proportions, so no cropping or resizing is
needed before adding them — any orientation works.

**Several views of one work** — wrap the figures in a `.work-group` so the
grid reads as a single sculpture rather than separate pieces (see the
ceramics in `hands-series.html`).

**Empty slots** — In-Between-ness ends with five "Coming Soon" tiles for
work in progress:

```html
<figure data-label="In-Between-ness — Coming Soon"><div class="placeholder-tile">Coming Soon</div></figure>
```

Swap one for a real `<figure>` as each piece is finished, or delete any
that end up unused.

**Adding a new collection**

1. Copy an existing file in `collections/` to a new file named after the
   collection.
2. Update the `<title>`, the collection header (name, medium, years), the
   statement, and the gallery.
3. Fix the `collection-nav` links at the bottom of the neighbouring pages
   so the previous/next chain stays correct.
4. Add a card in `collections/index.html` and in `index.html`, and update
   the collection counts on both.

## Design notes

- Typography: serif (Georgia) for headings and statements, sans-serif for
  navigation and UI chrome — an editorial, gallery-catalogue feel.
- Colors and spacing are defined as CSS custom properties at the top of
  `assets/css/style.css`; the site also respects the visitor's OS-level
  light/dark preference automatically.
- No frameworks or external font/script requests — everything is
  self-contained so the site loads fast and is easy to host anywhere
  (GitHub Pages, Netlify, Vercel, or any static host).
