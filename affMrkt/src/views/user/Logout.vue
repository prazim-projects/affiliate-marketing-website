<script setup>
import { userStore } from '@/stores/user'

const confirm = false
const store = userStore()

store.clearAuth()

</script>

<template>
<div>
    <h1>Logout</h1>
    <p>Are you sure you want to logout?</p>
    <button @click="confirm = true">Logout</button>
</div>

</template>

<style scoped>

</style>