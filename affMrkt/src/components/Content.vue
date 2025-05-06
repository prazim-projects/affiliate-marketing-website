<script setup>

const posts = defineProps(['title','category','content','id','featuredImage', 'user'])
console.log(posts.id)
</script>

<template>
    <div id="card">
        <h3>{{ posts.title }}</h3>
        <p><strong>Written by user {{posts.user}}</strong></p>
        <img :src="posts.featuredImage" alt="featured image for post">
        <p> {{ posts.content}}</p>
        <button @click="expand"> READ </button>  
    </div>
</template>

<style scoped lang="scss">

</style>