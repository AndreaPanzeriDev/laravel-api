<template>
  <div>
    <Loader v-if="isLoading"/>
    <ul>
      <li v-for="elem in posts" :key="elem.id">{{ elem.title }}</li>
    </ul>
  </div>
</template>

<script>

import Loader from './Loader.vue'

export default {
    name: 'PostList',
    components: {
        Loader
    },
    props: {
        posts: Array,
        isLoading: Boolean
    }
};
</script>

<style>
</style>
