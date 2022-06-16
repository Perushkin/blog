<template>
<div class="post-page">
  <div class="container" v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="post.src">
    <div class="section">
      <p class="section__title">Описание:</p>
      <p class="section__description">{{ post.body }}</p>
    </div>
  </div>
</div>
  
</template>

<script>
import posts from '/public/posts'
export default {
    data() {
        return {
            post: null,
        }
    },
    created() {
        const post = posts.find(post => post.id == this.$route.params.id)
            if (post) {
                this.post = post
            }
    }
}
</script>

<style lang="scss" scoped>
.post-page {
  padding-bottom: 100px;
  .back {
    color: #000000;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    color: #000000;
    margin-bottom: 30px;
    padding-bottom: 15px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
    }
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 1160px;
    height: 600px;
    margin-bottom: 30px;
  }
  .section {
    &__title {
      color: #EB5804;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #000000;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>