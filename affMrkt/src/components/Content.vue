<script setup>
import { computed } from 'vue'

const props = defineProps(['title','category','content','id','featuredImage', 'user'])

const imageUrl = computed(() => {
    if (!props.featuredImage) return ''
    // If the image path already starts with http, return as is
    if (props.featuredImage.startsWith('http')) return props.featuredImage
    // Otherwise, prepend the backend URL
    return `http://localhost:8000/${props.featuredImage}`
})
</script>

<template>
    <div id="card">
        <h3>{{ props.title }}</h3>
        <p><strong>Written by user {{props.user}}</strong></p>
        <img v-if="imageUrl" :src="imageUrl" alt="featured image for post">
        <p> {{ props.content}}</p>
        <button @click="expand"> READ </button>  
    </div>
</template>

<style scoped lang="scss">
#card {
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
}
</style>