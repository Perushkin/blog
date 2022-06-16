<template>
    <div class="blog-wrapper">    
        <div class="blog__photo">
            <img :src="post.src">
        </div>    
        <div class="blog__content">
            <h2>{{post.title}}</h2>
            <p class="content-preview">{{ post.description }}</p>
            <router-link class="link link-light" :to="`/post/${post.id}`" :key="post">
                Смотреть пост
            </router-link>
        </div> 
    </div>
</template>
<script>
export default {
    name:"postList",
    props: ["post"],

    
}
</script>
<style lang="scss" scoped>
.blog-wrapper{
    background-color: white;
    display:flex;
    flex-direction: row;
    box-shadow: 0px 0px 4px 0px;
    margin: 20px 115px;
    @media (min-width: 700px){
        min-height: 300px;
    }

    .blog__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;

        div{
        max-width: 630px;
        padding: 40px 15px;

            h2{
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 24px;
            }

            p{
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .content-preview{
                font-size: 13px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .link{
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: .5s ease-in all;

                &:hover{
                    border-bottom-color: #fff;
                }
            }
        }
    }

        
}


.blog__photo{
    order: 1;
    flex: 3;
    box-shadow: inset;

    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}




</style>