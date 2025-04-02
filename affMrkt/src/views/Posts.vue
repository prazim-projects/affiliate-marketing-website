<template>
  <main>
    <div class="columns">
      <div class="column-left">
        <header>
          <h1>Affiliate Product Posts</h1>
        </header>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else-if="result && posts" class="posts">
          <div v-for="post of posts" class="post">
            <h3>{{ post.title }}</h3>
            <img :src="`http://localhost:8000/mediafiles/${post.featuredImage}`" alt="">
            <p>{{post.content}}</p>
          </div>
        </div>
      </div>

      <div class="column-right">
        <div class="featuredPosts" v-for="post of posts">
          <div v-if="post.isFeatured">
            <h3>{{ post.title }}</h3>
            <img :src="`http://localhost:8000/mediafiles/${post.featuredImage}`" alt="" srcset="">
            <p>{{post.content}}</p>
          </div>          
        </div>
      </div>


    </div>  
</main>

</template>

<script>
import { computed, watch} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export default {
  setup () {
    const {result, loading, error } = useQuery(gql`
        query Queries {
        allPosts {
          id
          category {
            slug
          }
          content
          featuredImage
          isFeatured
          user {
            username
          }
          title
        }
}`)


// function fullT(sevice, servicePort, path){
//   var full_t = `http://${service}:${servicePort}/${path}`
//   return full_t
// }

const posts = computed(() => result.value?.allPosts ?? [])

watch(result, value => {
  console.log(value)

})

return {
  posts,
  loading, 
  error,
  result,
}

}
}
</script>

<style lang="scss" scoped>

main{
  width: 100%;
  .columns{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    div{
      width: auto;
    }

    .column-left{
      position: relative;
      left: 10px;
      margin: 2px 5px;
    }

    .column-right{
      position: relative;
      right: 10px;
      margin: 2px 5px;
    }

    .posts{
      display: flex;
      flex-direction: column;
      width: 50%;
    }

  }
  
}



</style>