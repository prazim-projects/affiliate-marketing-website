<script>
import { all_categories } from '../../queries'

export default{
    setup () {
        const {result, loading, error } = useQuery(all_categories)
        const categories = computed(() => result.value?.allCategories ?? [])

    watch(categories, value => {
      console.log(value)
    })

return {
  categories,
  loading, 
  error,
  result,
}


    }
}

</script>

<template>
  <div class="flex flex-col place-content-center place-items-center">
    <div class="py-8 border-b-2">
      <h1 class="text-5xl font-extrabold">All Categories</h1>
    </div>
    <div class="flex flex-wrap py-8">
      <router-link
        v-for="category in categories"
        :key="category.name"
        class=". . ."
        :to="`/category/${category.slug}`">{{ category.name }}</router-link
      >
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>