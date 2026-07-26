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
index.html                     Home page (hero + all sections)
visual-art.html                Visual art collections, grid view
illustration.html              Illustration projects, grid view
publications.html              Books, grid view
practice.html                  Ongoing studio practice
about.html                     Bio + background
contact.html                   Contact details
collections/*.html             One page per collection
assets/css/style.css           All styling
assets/js/main.js              Mobile nav + image lightbox
```

The work is split into four sections, each with its own top-level page
and navigation entry:

**Visual Art** (`visual-art.html`)

| Collection | Works | Images |
|---|---|---|
| `in-between-ness.html` | 4 works + 1 open slot, 4 cut playing card works, The Clown Section, The Parrot Section, and Practice & Process | `assets/images/in-between-ness/` (process images in `process/`) |
| `hands-series.html` | 5 drawings + 3 ceramic sculptures | `assets/images/hands-series/` |

**Illustration** (`illustration.html`)

| Collection | Works | Images |
|---|---|---|
| `clowns-series.html` | 5 drawings | `assets/images/clowns-series/` |
| `flowers-series.html` | 4 colored pencil drawings | `assets/images/flowers-series/` |

**Publications** (`publications.html`) — books written and/or illustrated,
kept separate from Illustration because a book's status (published,
forthcoming, out of print) matters in a way a drawing series's doesn't.

| Collection | Works | Images |
|---|---|---|
| `the-little-fire-and-the-little-girl.html` | 3 illustrations | `assets/images/little-fire/` |

**Practice** (`practice.html`) holds ongoing studio work that isn't part of
any single body of work — currently fifteen self-portrait studies in
`assets/images/practice/self-portraits/`. It has no collection pages of
its own; works sit directly on the page in sections.

All collection pages live in `collections/`, regardless of which section
they belong to. What assigns a collection to a section is (a) the card
listing it on that section's page (`visual-art.html`, `illustration.html`
or `publications.html`), (b) which nav item carries `aria-current="page"`
on its own page, and (c) its prev/next links, which stay inside its own
group — a group of one, like Publications right now, just shows a single
"All Publications" back-link instead of a prev/next pair.

Every collection carries the artist's statement. Clowns Series has two:
one for the series and one for the Cut Playing Cards works within it.

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
4. Add a card on `visual-art.html` or `illustration.html` (whichever
   practice it belongs to) and on `index.html`, and update the
   `Visual Art — 01 / 02` style counts on the pages in that group.

## Design notes

- Typography: serif (Georgia) for headings and statements, sans-serif for
  navigation and UI chrome — an editorial, gallery-catalogue feel.
- Colors and spacing are defined as CSS custom properties at the top of
  `assets/css/style.css`; the site also respects the visitor's OS-level
  light/dark preference automatically.
- No frameworks or external font/script requests — everything is
  self-contained so the site loads fast and is easy to host anywhere
  (GitHub Pages, Netlify, Vercel, or any static host).
