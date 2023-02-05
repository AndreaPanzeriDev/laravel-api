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

        }
    },
    mounted(){

    },
    methods: {

    }
}
</script>
