<template>
  <div class="home">
        <post-list :post = "post" v-for="(post, index) in validPosts" :key="index"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'MainPage',
  components: { PostList }, 
    computed: mapGetters(['validPosts']),
    methods: mapActions(['fetchPosts']),
    async mounted(){
        this.fetchPosts();
    },
}

</script>