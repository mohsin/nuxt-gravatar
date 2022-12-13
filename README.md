# nuxt-gravatar

Gravatar component for NuxtJs v3 applications.

![Tests Status](https://github.com/mohsin/nuxt-gravatar/actions/workflows/tests.yml/badge.svg)
[![Demo Deploy Status](https://api.netlify.com/api/v1/badges/43b8cbdc-b0ae-40b0-8399-1cc9ad414831/deploy-status)](https://imoz.in)

**[DEMO](https://imoz.in)**

## Installation

```
pnpm add nuxt-gravatar
```
OR `npm install nuxt-gravatar`, or `yarn add nuxt-gravatar`, depending on your project's package manager.

## Usage

Register the component in your `nuxt.config.ts`

```js
export default defineNuxtConfig({
    ...
    modules: [
      'nuxt-gravatar'
    ],
    ...
})
```

And you can now use it wherever you'd like to like this:

```vue
<Gravatar email="mohsin92@me.com" />
```

### Props

The following props are available:

* **hash** (type: String) md5 hash of the gravatar
* **email** (type: String) email address of the gravatar (used when md5 hash not given)
* **size** (type: Number, default: 80) size of the avatar
* **default-img** (type: String, default: 'retro') default image type (see. http://en.gravatar.com/site/implement/images/)
* **rating** (type: String, default: 'g') rating of the image (see. http://en.gravatar.com/site/implement/images/)
* **alt** (type: String, default: 'Avatar') The alternative text of the image

#### Example

```vue
<Gravatar hash="f3ada405ce890b6f8204094deb12d8a8" alt="Nobody" :size="200" default-img="mm" />
```

## License

The GPLv2.0 License - See file `LICENSE` in this project

## Credit

This library is loosely based on [Jiří Chára's vue-gravatar](https://github.com/JiriChara/vue-gravatar). While my initial intention was to use [that library in my project](https://github.com/mohsin/iMoz-Web/commit/0716e292b617c3bd80b740a48f7d30ab11bf9356), it was giving me errors, so I re-built it from scratch for Nuxt v3. Credit to the original author for the vue library.
