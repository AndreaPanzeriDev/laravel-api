<template>
  <div>
    <Loader v-if="isLoading" />
    <ul>
      <li v-for="elem in posts" :key="elem.id">
        <router-link :to="`/posts/${elem.id}`"> <!--Andrebbe bene anche solo :to="`/posts/${elem.id}`"--> <!--:to="{ name: 'single-post', params: $elem.id}"-->
            {{ elem.title }}
        </router-link>

    </li>
    </ul>
  </div>
</template>

<script>
import Loader from "./Loader.vue";

export default {
  name: "PostList",
  components: {
    Loader,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios.get('http://localhost:8000/api/posts').then((response) => {
        console.log(response.data);
        this.posts = response.data;
      }).catch((error) => {
        console.log(error);
      }).then(() => {
        this.isLoading = false;
      })
    },
  },
};
</script>

<style>
</style>
