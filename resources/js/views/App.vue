<template>
    <div>
        <!--<h1>Work in progress</h1>-->
        <!--<PostList :posts="posts" :isLoading="isLoading"/>-->
        <router-view></router-view>
    </div>
</template>

<script>
import PostList from '../components/posts/PostList.vue'

export default {
    name: "App",
    components: {
        //Qui inseriamo i futuri componenti per questa views
        PostList
    },
    data(){
        return {
            posts:[],
            isLoading: false,
        }
    },
    mounted(){
        this.getPost();
    },
    methods: {
        getPost(){
            this.isLoading = true;
            axios.get('http://localhost:8000/api/posts')
              .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                })
              .catch(error => {
                    console.log(error);
              }).then(() =>{
                this.isLoading = false;
              })
        }
    }
}
</script>
