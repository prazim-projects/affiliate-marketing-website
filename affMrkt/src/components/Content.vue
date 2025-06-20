<script setup>
import { computed, ref } from 'vue'

const props = defineProps(['title','category','content','id','featuredImage', 'user', 'snapView', 'affiliateLink'])
const isExpanded = ref(false)
const apiURL = import.meta.env.VITE_API_URL
const imageUrl = computed(() => {
    if (!props.featuredImage) return ''
    // If the image path already starts with http, return as is
    if (props.featuredImage.startsWith('http')) return props.featuredImage
    // Otherwise, prepend the backend URL
    return `${apiURL}/${props.featuredImage}`
})

const expand = () => {
    isExpanded.value = !isExpanded.value
}

const displayContent = computed(() => {
    if (isExpanded.value) {
    return props.content
}
    return props.snapView
})
</script>

<template>
    <div id="card" :class="{ 'expanded': isExpanded }">
        <h3>{{ props.title }}</h3>
        <div class="readBar">
            <p><strong>Written by user {{props.user}}</strong></p>
            <img v-if="imageUrl" :src="imageUrl" alt="featured image for post">
            <div class="content">
                <p>{{ displayContent }}</p>
                <a :href="props.affiliateLink"><p>affiliateLink: {{props.affiliateLink}}</p></a>
            </div>
            <button @click="expand" class="expand-btn">
                {{ isExpanded ? 'Show Less' : 'Read More' }}
            </button> 
        </div>
    </div>
</template>

<style scoped lang="scss">
#card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-left: calc(4rem + var(--sidebar-width-min));
    transition: all 0.3s ease;

    &.expanded {
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
        margin: 1rem 0;
    }

    .readBar {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .content {
        margin: 1rem 0;
        line-height: 1.6;
    }

    .expand-btn {
        align-self: flex-start;
        padding: 0.5rem 1rem;
        background-color: #4a90e2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #357abd;
        }
    }
}
</style>