<template>
    <h2> Register</h2>
    <main class="register-page">
          <div class="form">
            <form id="reg-form">
              <div id="input" v-for="(value, key) in input_fields">
                <label >{{value[1]}}: 
                  <input  :type="value[1]" v-model="value[2]" :required="value[0]">
                </label>
              </div>
              <button @click="userCreate()" type="submit">SIGN UP</button>                        
            </form>
          </div>
    </main>

</template>

<script>

// import base_form from '../components/base_form.vue';
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag'



export default {


  setup () {

    const input_fields = ref({
    username: [true, 'username', 'uName'],
    userMail: [true, 'email', 'uMail'],
    password: [true, 'password', 'uPassword'],

})

    const uName = ref('')
    const uMail = ref('')
    const uPassword = ref('')

    const { mutate: userCreate } = useMutation(gql`
      mutation userCreate($username: String!, $email: String!, $password: String!){
        userCreate (username: $username, email: $email, password: $passWord ){
          id
          username
          email
          passWord
        }
      }
    `, () => ({
      variables: {
        username: uName.value,
        email: uMail.value,
        password: uPassword.value,
      },
    }))  

    return {
      input_fields,
      uName,
      uMail,
      uPassword,
      userCreate,
    }
  },
}
</script>

<style lang="scss" scoped>

form{
  position: relative;
  width: 300px;
  height: 400px;
  
  div > label {
    width: 60px;
    height: 60px;
  }



  button {
    position: relative;
    right: -61px;
    cursor: pointer;
    width: 50px;
    background-color: var(--grey);
  }
}



</style>