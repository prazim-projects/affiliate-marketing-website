<script setup>
import { ref } from 'vue';

const formType = defineProps('page')
const username = ref('')
const password = ref('')

const signIn = ref({
  input : [ 'Username', 'password'],
  header : 'Sign In'
})

const signUp = ref({
  input : [ 'username', 'email', 'password'],
  header: 'Sign Up'
})


</script>

<template>
    <form>
        <img class="mb-4" src="../assets/logoAff.png" alt="" width="72" height="57">        
        <h1 class="h3 mb-3 fw-normal">Please {{signUp.header}}</h1>
        <div class="form-floating" v-for="(value, key) in signIn">
          <input :type="value.input[0]" class="form-control" placeholder="user-name" :v-model="value.input[0]">
          <label>{{value.input[0]}}</label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" :disabled="loading">{{ loading ? 'Creating your profile...' : 'Sign Up' }}</button>
      </form>
</template>

<style lang='scss' scoped>

</style>