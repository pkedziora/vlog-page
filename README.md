# vlog-page

POC for static Vue.js website that retrieves video channel data from YouTube API during build time and renders a feed of videos

Can be served from e.g. Amazon S3 without any server side processing with builds triggered on predefined schedule.

Built with [Nuxt.js](https://nuxtjs.org)

## Try it
[https://vlog.page/](https://vlog.page/)


## Build Setup

``` bash
# install dependencies
$ yarn install

# retrieve channel data for channels configured in app.config.json
$ yarn data

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
