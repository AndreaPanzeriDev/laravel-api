<template>
    <div>
        <!--<h1>Work in progress</h1>-->
        <!--<PostList :posts="posts" :isLoading="isLoading"/>-->

        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import PostList from '../components/posts/PostList.vue'
import Header from '../components/Header.vue'

export default {
    name: "App",
    components: {
        //Qui inseriamo i futuri componenti per questa views
        PostList,
        Header
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
