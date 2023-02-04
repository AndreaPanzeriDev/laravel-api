<template>
    <div>
        <h1>Work in progress</h1>
        <ul>
            <li v-for="elem in posts" :key="elem.id">{{ elem.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        //Qui inseriamo i futuri componenti per questa views
    },
    data(){
        return {
            posts:[]
        }
    },
    mounted(){
        this.getPost();
    },
    methods: {
        getPost(){
            axios.get('http://localhost:8000/api/posts')
              .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                })
              .catch(error => {
                    console.log(error);
              })
        }
    }
}
</script>
