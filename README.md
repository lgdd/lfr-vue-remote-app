![React version](https://img.shields.io/github/package-json/dependency-version/lgdd/lfr-vue-remote-app/vue)

# Liferay Vue Remote App

This is a template intended for tests & demos. The webpack configuration included is not optimized for production environments.

## Using this template

By default, the custom element name is `lfr-vue-remote-app`. You can change it in [src/main.js](src/main.js#L4):

```js
const ELEMENT_ID = 'lfr-vue-remote-app';
```

This template is using a custom webpack configuration to build your application in a single file (`index.js`) making easier to create a _Remote App_ in Liferay DXP/Portal.

## Deploy to Netlify

> Documentation: https://docs.netlify.com/site-deploys/create-deploys/

Why **Netlify**? Because **it's awesome!** Once your repository is linked, you have an automatic deployment each time you push changes to your repository. And by default, Netlify uses `cache-control: public, max-age=0, must-revalidate` to serve your application which means that you are able to see each changes live. Very useful for tests and demos, and if needed you can have [custom HTTP Headers](https://docs.netlify.com/routing/headers/) using a config file. Cherry on the cake, they provide a very fair free tier based on bandwith and build frequency (cf. [Pricing](https://www.netlify.com/pricing/)).
