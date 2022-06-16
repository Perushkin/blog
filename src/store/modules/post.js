export default {
    state: {       
        posts: []
    },
    getters: {
        validPosts(state) {
                return state.posts.filter(p => {
                    return p.title && p.description
                })
            },
        allPosts(state)  {
            return state.posts
        }
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
        }

    },
    actions: {
        async fetchPosts(ctx) {
            let res = await fetch('bdposts.json');
            let posts = await res.json();

            ctx.commit('updatePosts', posts);
        }
    },
}