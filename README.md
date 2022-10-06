# Alpine JS Routes

Dynamic routes in Alpine JS with similar to Laravel 🛤

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-routes@latest/dist/routes.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-routes

npm install -D alpinejs-routes
```

```js
import Alpine from 'alpinejs'
import component from 'alpinejs-routes'

Alpine.plugin(component)

Alpine.start()
```

## Example

First you need to your routes map to the `window` object.

```html
<script>
  window.alpineRoutes = {
    blogShow: '/blog/:slug',
    categoryShow: '/category/:collection/:slug',
  }
</script>
```

And then you can write dynamic routes like this.

```html
<a :href="$route('blogShow', { slug: 'first-blog' })"> First Blog </a>

<a :href="$route('categoryShow', { collection: 'books', slug: 'first-book' })">
  First Book
</a>
```

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-routes)
![](https://img.shields.io/npm/v/alpinejs-routes)
![](https://img.shields.io/npm/dt/alpinejs-routes)
![](https://img.shields.io/github/license/markmead/alpinejs-routes)
