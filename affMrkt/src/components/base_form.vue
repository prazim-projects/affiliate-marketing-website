<script setup>

</script>

<template>
    <form>
        <img class="mb-4" src="../assets/logoAff.png" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
        <div class="form-floating ">
          <input type="username" class="form-control" placeholder="user-name" :v-model="username">
          <label>Username</label>
        </div>
  
        <div class="form-floating">
          <input type="email" class="form-control" placeholder="name@example.com" :v-model="email">
          <label >Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" placeholder="Password" :v-model="password">
          <label>Password</label>
        </div>
        
        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" :disabled="loading">{{ loading ? 'Creating your profile...' : 'Sign Up' }}</button>
      </form>
</template>

<style lang='scss' scoped>

</style>