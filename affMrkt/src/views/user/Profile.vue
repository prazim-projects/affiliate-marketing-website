<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '@/stores/user'

const route = useRoute()
const store = userStore()
const userId = ref(store.getUser.id)
const userProfile = ref(null)

onMounted(async () => {
  userProfile.value = {
    id: userId.value,
  }
})
</script>

<template>
  <div class="profile-container">
    <h1>User Profile</h1>
    <div v-if="userProfile" class="profile-content">
      <p>User ID: {{ userProfile.id }}</p>
      <!-- profile information place -->
    </div>
    <div v-else>
      <p>Loading profile...</p>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.profile-content {
  background-color: var(--light);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: var(--dark);
  margin-bottom: 2rem;
}
</style>