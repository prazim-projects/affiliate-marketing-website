<script>

// import base_form from '../components/base_form.vue';
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import Base_form from '../components/base_form.vue';
import login from './Login.vue';
import { create_user } from '../mutations';



export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')

    const { mutate: createUser, loading, data, error } = useMutation(create_user, () => ({ 
      variables: {
          username: username.value,
          email: email.value,
          password: password.value        
        }
    }))

    return {
      username,
      email,
      password,
      loading,
      error,
      data,
      createUser,

  }
  }
}
</script>

<template>
  <main class="w-100 m-auto">
    <form>
      <img class="mb-4" src="../assets/logoAff.png" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please Sign UP</h1>
      
      <div class="form-floating ">
        <input type="text" class="form-control" placeholder="user-name" v-model="username">
        <label>Username</label>
      </div>

      <div class="form-floating">
        <input type="text" class="form-control" placeholder="name@example.com" v-model="email">
        <label >Email address</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" placeholder="Password" v-model="password">
        <label>Password</label>
      </div>
      
      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button class="btn btn-primary w-100 py-2" @click="createUser()"  type="submit" :disabled="loading">{{ loading ? 'Creating your profile...' : 'Sign Up' }}</button>
    </form>

    <div v-if="error" class="error">{{error.message}}</div>
    <div class="succ" v-if="data">Created Successfully </div>
  </main>
  <div><login /></div>
</template>


<style lang="scss" scoped>

</style>