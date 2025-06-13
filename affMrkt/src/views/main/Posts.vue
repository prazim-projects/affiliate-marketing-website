<script>
import { computed, watch, onMounted} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { all_posts } from '@/queries'
import Content from '../../components/Content.vue';
import Category from '../main/Category.vue';
import { userStore } from '@/stores/user';
import { useRouter } from 'vue-router';

export default {
  components : {
    Content,
    Category
  },

  setup () {
    const router = useRouter()
    const user = userStore()

    // check authentication
    onMounted(()=>{
      if(!user.isAuthenticated) {
        router.push('/login')
      }
    })


    const {result, loading, error } = useQuery(all_posts)
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


<template>
  <main>
    <div class="columns container-fluid">
      <div class="column-left">
        <header>
          <h1>Affiliate Product Posts</h1>
        </header>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else-if="result && posts" class="posts">
          <div class="post">
            <!-- <img :src="`http://localhost:8000/media/${post.featuredImage}`" alt=""> -->

            <Content
            v-for="post of posts" 
            :id="post.id"
            :title="post.title"
            :Category="post.Category"
            :content="post.content"
            :featuredImage="post.featuredImage"
            :author="post.user.username"
            />
          </div>
        </div>
      </div>

      <div class="column-right">
        <div class="featuredPosts" v-for="post of posts">
          <div v-if="post.isFeatured">
            <h3>{{ post.title }}</h3>
            <img :src="`http://localhost:8000/media/${post.featuredImage}`" alt="" srcset="">
            <p>{{post.content}}</p>
          </div>          
        </div>
      </div>


    </div>  
</main>

</template>

<style lang="scss" scoped>

main{
  width: 100%;
  margin-bottom:5px;
  padding: 5px 7px;
  .columns{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


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
      margin-bottom: 10px;
    }
    button{
      margin-top: 5px;
      border-radius: 65px;
      width: 100px;
      height: 20px;
      background-color: blueviolet;
    }
    button:hover{
      border-radius: 60px;
    }
    .post{
      margin-bottom: 10px;
      padding: 5px 5px;
    }
  }
  
}



</style>