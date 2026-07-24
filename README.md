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

**In-Between-ness** and **Hands Series** are real collections, with real
artwork and the artist's own statements. The other four — **Fragments of
Memory**, **Liminal Spaces**, **Woven Silence**, and **Static Noise** —
are still placeholder examples of how the layout works; replace their
names, statements, and images with real work as it's ready.

## Editing content

Every editable spot is marked with an `<!-- EDIT ME -->` comment in the
HTML. There are three kinds of edits:

**Text** — statements, bios, exhibition lists, and contact info are plain
HTML in each page. Open the file, find the relevant paragraph, and rewrite it.

**Images** — artwork is currently shown as placeholder tiles:

```html
<div class="placeholder-tile">No. 1</div>
```

Swap that for a real image once you have a file:

```html
<img src="../assets/images/fragments-of-memory/01.jpg" alt="Fragments of Memory, No. 1, 2023" />
```

Put image files under a folder like `assets/images/<collection-slug>/` and
reference them with a relative path. The lightbox (click-to-enlarge) and
grid sizing work automatically once real `<img>` tags replace the
placeholders — no other markup needs to change.

Both real collections follow this pattern already:

- `collections/in-between-ness.html` — three finished pieces in
  `assets/images/in-between-ness/`, plus five "Coming Soon" tiles for work
  still in progress.
- `collections/hands-series.html` — ten pieces in
  `assets/images/hands-series/`, split into two sections: five rapid
  drawings (`01.jpg`–`05.jpg`) and five ceramic sculptures
  (`ceramic-01.jpg`–`ceramic-05.jpg`).

As each new piece is ready, drop the image file into the collection's
folder and swap the next placeholder tile for an `<img>` tag the same way.
If more slots are needed, just add more `<figure>` entries — nothing else
has to change. Images display in full at any orientation, so no cropping
or resizing is required before adding them.

**Adding a new collection**

1. Copy an existing file in `collections/` (e.g. `static-noise.html`) to a
   new file named after the collection, e.g. `collections/new-collection.html`.
2. Update the `<title>`, the collection header (name, medium, years), the
   statement, and the gallery.
3. Update the `collection-nav` links at the bottom to point to the correct
   previous/next collection.
4. Add a card for it in `collections/index.html` and, if it should be
   featured, in `index.html`.

## Design notes

- Typography: serif (Georgia) for headings and statements, sans-serif for
  navigation and UI chrome — an editorial, gallery-catalogue feel.
- Colors and spacing are defined as CSS custom properties at the top of
  `assets/css/style.css`; the site also respects the visitor's OS-level
  light/dark preference automatically.
- No frameworks or external font/script requests — everything is
  self-contained so the site loads fast and is easy to host anywhere
  (GitHub Pages, Netlify, Vercel, or any static host).
