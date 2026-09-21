# Hello World

A minimal static website: one page that says "Hello World", plus a shared
stylesheet and script so text and new pages are easy to add.

There is no build step, no dependencies, and no framework — just files a browser
can open directly.

## Files

```
index.html        The home page
css/styles.css    All site styles
js/main.js        Footer year + nav highlighting
README.md         This file
```

## Viewing the site

Open `index.html` in a browser. Or, to serve it over HTTP (closer to how it
behaves when hosted):

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Adding text

Open `index.html` and edit inside `<main class="site-main">`. Put each paragraph
in its own `<p>` tag, and use `<h2>` for section headings:

```html
<h2>About</h2>
<p>Some text about the site.</p>
```

## Adding a page

1. Copy `index.html` to a new file, e.g. `about.html`.
2. Change its `<title>` and the `<h1>`, and replace the body text.
3. Add a link to it in the `<nav class="site-nav">` block of **every** page,
   including `index.html`:

   ```html
   <nav class="site-nav">
     <a href="index.html">Home</a>
     <a href="about.html">About</a>
   </nav>
   ```

`js/main.js` marks the link for the current page automatically, so no `class`
attribute is needed on the nav links you add.

Keep new pages in the same folder as `index.html` so the `css/` and `js/` paths
resolve. For a page in a subfolder, prefix those paths with `../`.

## Styling

Colors and page width are CSS custom properties at the top of `css/styles.css`,
under `:root` — change them there and the whole site follows.
