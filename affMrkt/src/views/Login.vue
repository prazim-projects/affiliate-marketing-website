<template>
    <main class="login-page">
        <h2> Login </h2>
        <main>
            <form id="loginForm">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required="Enter your username">
              
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required="Enter your password">
        
              <div id="twoStepVerification" style="display: none;">
                <p>Enter the verification code sent to your email:</p>
                <input type="text" id="verificationCode" required placeholder="Verification Code">
                <button id="verifyCodeButton">Verify</button>
              </div>
              
              <button type="submit">Login</button>
            </form>
          </main>
    </main>

</template>

<script setup>

</script>

