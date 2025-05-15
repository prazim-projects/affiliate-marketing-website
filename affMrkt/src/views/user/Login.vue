<template>
  
<main>
<form class="form-signin w-100 m-auto">
  <img class="mb-4" src="../../assets/logoAff.png" alt="" width="72" height="57">
  <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

  <div class="form-floating">
    <input type="username" class="form-control" id="floatingInput" placeholder="Abebe-Egele" v-model="username"  required>
    <label for="floatingInput">username</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Mi$tr-Y3tetebeQ" v-model="password" required>
    <label for="floatingPassword">Password</label>
  </div>

  <div class="form-check text-start my-3">
    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Remember me
    </label>
  </div>
  <button class="btn btn-primary w-100 py-2"  @click="login">Sign in</button>
</form>

<div v-if="loginLoading"><h1>Loading.....</h1></div>
<div v-if="loginError"> <h1>Error Occured</h1></div>
<div v-if="data">
</div>
</main>
</template>

<script>
import { ref } from 'vue';
import { useMutation} from '@vue/apollo-composable';
import { getAuth } from '@/mutations';
import { userStore } from '@/stores/user';
// import Cookies from 'universal-cookie';
import { RouterLink, useRouter } from 'vue-router';
import { all_posts } from '../../queries';
export default{

  setup(){
    const username = ref("")
    const password = ref("")
    const store = userStore()

    // const cookies = new Cookies()
    const router = useRouter()

    const {mutate: login, loading: loginLoading, error:loginError, onDone, data} = useMutation(getAuth, ()=>({
      variables: {
        username: username.value,
        password: password.value,
      },
      refetchQueries: [
        all_posts,
        'allPosts'
      ]
    }))
    const {token, user } = store


    onDone(()=>{
      store.setToken(data.token)
      store.setUser(data.user)
      
    })

    return {
      loginLoading,
      username,
      password,
      login,
      loginError,
      data,
      user,
      token
    }
  }
}


</script>

