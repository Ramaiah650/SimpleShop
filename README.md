# SimpleShop

Dark streetwear shop demo built with **Vite + React**. Curated product cards, category filters, search, and a slide-out shopping bag with live totals.

Originally sourced from a DropHere zip; upgraded locally into a polished storefront. Product photos live under `public/images/`.

## Features

- Dark UI with serif/sans typography
- Product grid with badges, ratings, and categories
- Search + category filter
- Add to bag with quantity controls
- Cart drawer with subtotal, clear, and demo checkout
- Responsive layout

## Run locally

```sh
npm install
npm run dev
```

App URL: **http://localhost:3000** (Vite is configured for host `0.0.0.0` and port `3000`).

Build check:

```sh
npm run build
npm run preview
```

## Optional API stub

`server/server.js` is a leftover Express stub from the original zip. The storefront does **not** need it — products are local in `src/data/products.js`.

## Project layout

```
src/
  App.jsx
  components/Navbar.jsx
  components/ProductCard.jsx
  components/CartDrawer.jsx
  data/products.js
public/images/   # shoes, watch, headphones, camera, bag
```
