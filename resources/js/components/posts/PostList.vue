<template>
  <div>
    <Loader v-if="isLoading" />
    <ul>
      <li v-for="elem in posts" :key="elem.id">{{ elem.title }}</li>
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
      isLoading: false,
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>
