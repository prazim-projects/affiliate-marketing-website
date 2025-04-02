<template>
    <h2> Register</h2>
    <main class="register-page">
          <div class="form">
            <form id="loginForm" v-for="(value, key) in input_fields">
              <label :for="value">{{value}}</label>
              <input type="text" :id="value" name="username" :required="`Enter your ${key[1]}`">
              
              <div id="twoStepVerification" style="display: none;">
                <p>Enter the verification code sent to your email:</p>
                <input type="text" id="verificationCode" required placeholder="Verification Code">
                <button id="verifyCodeButton">Verify</button>
              </div>
              
              <button type="submit">Login</button>
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
    username: [true, 'username'],
    userMail: [true, 'email'],
    password: [true, 'password'],

})

    const username = ref('')
    const email = ref('')
    const password = ref('')

    const { mutate: userCreate } = useMutation(gql`
      mutation userCreate($username: String!, $email: String!, $password: String!){
        userCreate (username: $username, email: $email, password: $passWord ){
          id     
        }
      }
    `, () => ({
      variables: {
        
      },
    }))

    const registerUser = async () => { // Wrap the mutation call in a function
      try {
        await userCreate({
          username: username.value,
          email: email.value,
          password: password.value // Use the correct password variable
        });
        // Handle success (e.g., redirect)
      } catch (error) {
        // Handle error (e.g., display error message)
        console.error("Registration failed:", error);
      }
    };
    

  },
}
</script>

