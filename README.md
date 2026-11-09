# Marina Fuertes — Academic Website (Editorial Redesign)

A light, editorial academic website for Prof. Marina Fuertes. Built as a **static** site in HTML, CSS, SVG and vanilla JavaScript. No build process required.

## Visual identity

- Warm ivory background, muted terracotta, lavender, sage and plum accents.
- Large editorial serif typography and gentle organic illustration in place of a dark technical/plasmid-style hero.
- A single responsive menu, soft research cards, featured publications, searchable Scopus bibliography, projects, academic profile and contact.

## Deploy to the specified GitHub repository

Repository: **https://github.com/marinafuertes-ggd/marinafuertes**

Provided GitHub Pages is enabled, its **project-site URL** will normally be:

**https://marinafuertes-ggd.github.io/marinafuertes/**

This is a project repository named `marinafuertes` (not a special user-site repository named `marinafuertes-ggd.github.io`).

1. Unzip this download.
2. Open the repository and choose **Add file → Upload files** on the `main` branch.
3. Upload the **contents** of the unzipped folder, NOT the ZIP file itself and NOT the containing folder. Ensure `index.html` sits at the **root** of the repository and `assets/` remains an intact folder.
4. Click **Commit changes**.
5. Under **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`, then **Save**.
6. Check the deployed site at the project-site URL above. It can take several minutes for GitHub Pages to publish.

All CSS, JS and SVG references are relative (e.g. `assets/styles.css`), so they also work at `/marinafuertes/`.

If your repository already contains another version of the website, back it up before replacing the files.

## Local preview and editing

Open `index.html` in any modern browser. Publication search, filters and CSV export work locally, without a server.

- `index.html`: biographical information, academic roles, research descriptions, projects, book listings, navigation, contact and URLs.
- `assets/styles.css`: colours, fonts, layout, sizes, responsive design.
- `assets/early-connections.svg`: original, abstract illustration (not an actual research dataset or photograph).
- `assets/publications.js`: 54 Scopus records. To edit, change quoted data values without modifying JavaScript syntax.
- `assets/app.js`: bibliography filtering, CSV export and responsive navigation.
- `assets/favicon.svg`: monogram in the site's new colour palette.

Do not delete `assets/publications.js` or `assets/app.js`: these are essential for the bibliography.

## Data and verification

Based on the Scopus author-profile PDF provided in this conversation, with 54 documents, 640 citations, and h-index 14 at the time of that export; these values are **not live**. The site also includes biographical data and academic links previously compiled from publicly available institutional and Ciência Vitae pages.

- Scopus: https://www.scopus.com/authid/detail.uri?authorId=16301662000
- Ciência Vitae: https://www.cienciavitae.pt/en/2416-A724-93B2
- Google Scholar: https://scholar.google.pt/citations?hl=en&user=y-pGJAMAAAAJ
- ESELx: https://www.eselx.ipl.pt/en/node/689

Please have Prof. Fuertes approve the final biography, roles, publications and design before making the page publicly available. The repository is not modified automatically by this download.
