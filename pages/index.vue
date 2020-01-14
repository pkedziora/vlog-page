<template>
  <div class="container">
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img id="logo" src="/images/logo.png" alt="Website logo" />
          </a>
        </div>
      </nav>
      <video-list />
      <span>{{version}}</span>
    </div>
  </div>
</template>

<script>
import VideoList from '~/components/VideoList';

export default {
  components: {
    VideoList,
  },
  data() {
    return {
    };
  },
  async created() {
    this.version = this.$store.state.version;
  },
  head() {
    return {
      title: 'Vlog.Page - Tech',
      meta: [
        { hid: 'description', name: 'description', content: 'Latests videos from tech youtubers. Laptop, mobile tech, gadget reviews and more' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Vlog.Page - Tech' },
        { property: 'og:description', content: 'Latests videos from tech youtubers, laptop, mobile tech, gadget reviews and more' },
        { property: 'og:image', content: 'https://vlog.page/images/logo.png' },
        { property: 'og:url', content: 'https://vlog.page' },
        { property: 'og:site_name', content: 'Tech' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://vlog.page/',
        },
      ],
    };
  },
};
</script>

<style>

#logo {
  height: 31px;
  max-height: 125px;
  width: 125px;
}

body {
  background-color: rgb(241, 241, 241);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1060px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
