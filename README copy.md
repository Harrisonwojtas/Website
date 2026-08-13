# harrywojtas.com

Personal art portfolio — ceramics, block prints, and photography.

Built as a static site with **Jekyll**, which GitHub Pages runs automatically
(no build step, no npm install — just push and it deploys).

## Structure

```
_config.yml          site-wide settings (title, description)
_layouts/default.html the shared page skeleton (<head>, nav, footer, scripts)
_includes/nav.html    the nav bar — edit ONCE, updates on every page
_includes/footer.html the footer — edit ONCE, updates on every page
assets/css/style.css  all styling, theme colors defined at the top
assets/js/lightbox.js shared image lightbox, used on every gallery page
Images/               your photos (unchanged from before)
*.html                one file per page — just the content, no boilerplate
```

## How to add a new page

1. Create a new `.html` file at the root, e.g. `sculpture.html`
2. Add front matter at the top:
   ```
   ---
   layout: default
   title: Sculpture
   description: One sentence for search engines and social previews.
   gallery: true   <!-- only if this page has a .gallery-img gallery -->
   ---
   ```
3. Write your content below the `---`. No `<html>`, `<head>`, nav, or
   footer needed — the layout adds those automatically.
4. Add a link to it in `_includes/nav.html` if it should appear in the menu.

## How to add images to a gallery

Add another `<img>` tag inside a `.gallery-grid` div:

```html
<img src="{{ '/Images/your-folder/photo.JPG' | relative_url }}" alt="Describe what's in the photo" class="gallery-img">
```

Always write a real `alt` description — it's what shows up in search results
and what screen readers announce.

## How to change the look (colors, fonts, spacing)

Everything is controlled by CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --color-bg: #f9f9f9;
  --color-accent: #333333;
  --font-heading: Georgia, 'Times New Roman', serif;
  ...
}
```

Change a value once, and it updates across every page.

## Contact form

`contact.html` posts to Formspree so it works without a backend. To activate it:

1. Sign up at [formspree.io](https://formspree.io) (free tier is fine)
2. Create a form, copy the form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in the `action` attribute with it

## Still needs your attention

- `peru.html` and `birds.html` currently use placeholder images borrowed
  from the pottery gallery — swap in real photos when ready (marked with
  `TODO` comments in each file).
- Footer still has `[Friend 2]` / `[Friend 3]` placeholders in
  `_includes/footer.html` — fill in or remove.
- `cv.html` content is still placeholder text.
