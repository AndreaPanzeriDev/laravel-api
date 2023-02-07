<template>
  <div>
    <Loader v-if="isLoading" />
    <h1>Post n {{ posts.id }}</h1>
    <h1>{{ posts.title }}</h1>

    <p>
      {{ posts.body }}
    </p>



  </div>
</template>

<script>
import Loader from "../../../components/posts/Loader.vue";

export default {
  name: "PostCard",
  components: {
    Loader,
  },
  data() {
    return {
      posts: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.id)
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

<style scoped lang="scss">

</style>


