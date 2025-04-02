<script>

export default{
    setup () {
        const {result, loading, error } = useQuery(gql`
        query Queries {
        allCategories {
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

<template>
    <div class="flex flex-col place-content-center place-item-center">
        <div class="py-8 border-b-2">
            <h1 class="text-5xl font-extrabold">All Categories</h1>
        </div>
        <div class="flex flex-wrap py-8">
            <router-link v-for="category in allCategories"
            :key="category.name"
            :to="`/category/${category.slug}`">{{ category.name }}
              
            </router-link>
        </div>
    </div>


</template>

<style lang="scss" scoped>

</style>