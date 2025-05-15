<script>

// import base_form from '../components/base_form.vue';
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import Base_form from '../../components/base_form.vue';
import login from './Login.vue';
import { create_user, getAuth } from '@/mutations';
import { userStore } from '../../stores/user';



export default {
  components: {
    login,
    Base_form
  },

  setup() {
    const username = ref("")
    const email = ref("")
    const password = ref("")
    const token_store = userStore()

    const { mutate: createUser, loading, data, error,  onDone } = useMutation(create_user, () => ({ 
      variables: {
          username: username.value,
          email: email.value,
          password: password.value     
        }
    }))

    const { mutate: getJWT } = useMutation(getAuth, () => ({ 
      variables: {
        password: password.value,
        username: username.value,
               
        }
    }))

    onDone(()=>{
      getJWT()
    })

    return {
      username,
      email,
      password,
      loading,
      error,
      data,
      createUser,
      getJWT,

  }
  }
}
</script>

<template>
  <main class="w-100 m-auto">
    <form>
      <img class="mb-4" src="../../assets/logoAff.png" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please Sign UP</h1>
      
      <div class="form-floating ">
        <input type="username" class="form-control" placeholder="user-name" v-model="username" required>
        <label>Username</label>
      </div>

      <div class="form-floating">
        <input type="email" class="form-control" placeholder="name@example.com" v-model="email" required>
        <label >Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
        <label>Password</label>
      </div>
        <button class="btn btn-primary w-100 py-2" @click="createUser()"  type="submit" :disabled="loading">{{ loading ? 'Creating your profile...' : 'Sign Up' }}</button>
    </form>

    <div v-if="error" class="error">{{error.message}}</div>
    <div class="succ" v-if="data">Created Successfully</div>
  </main>
  <div>
    <h4> Already have an account? </h4>
    <login /></div>
</template>


<style lang="scss" scoped>

</style>