<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { userStore } from '@/stores/user';


const store = userStore()
const isAuthenticated = computed(() => store.isAuthenticated)

const tabs = ref({
  Home: ['/','home' ],
  About: ['/about', 'info'],
  Posts: ['/posts', 'linked_services'],
  Reset_Password: ['/reset-pass', "lock_open"],
})


const authTabs = computed(() => {
  if(isAuthenticated.value){
    return {
      ...tabs.value,
      Profile: [`/profile/${store.getUser.id}`, 'account_circle'],
      Logout: ['/logout', 'logout']
    }
  } else {
    return {
      ...tabs.value,
    Register: ['/register', 'account_circle'],
    Login: ['/login', 'login'],
    Reset_Password: ['/reset-pass', "lock_open"],
    }
  }
})

const expanded = ref(true)

const toggleMenu = () => {
  expanded.value = !expanded.value
}


const handleLogout = () => {
  if (isAuthenticated.value) {
    store.clearAuth()
  }
}

</script>

<template>
  <aside :class="`${expanded && 'is-expanded'}`">
    <div class="logo"> 
      <img src="../assets/logoAff.png" alt="" class="src">
    </div>
    <div class="menu-toggle-wrap">
      <button @click="toggleMenu" class="menu-toggle"> 
        <span class="material-icons">
        keyboard_double_arrow_right
        </span>
      </button>
    </div>
    <h3>Pages</h3>
    <div  class="menu" v-for="(value, key) in authTabs">
      <router-link class="button" :to="value[0]">
        <span class="material-icons"> {{ value[1] }}</span>
        <a class="text">{{ key }}</a>
      </router-link>
    </div>
  </aside>


  
</template>
  
  
<style lang="scss" scoped> 
 aside{
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);
  width: calc(4rem + var(--sidebar-width-min));
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition:  0.3s ease-out;

  .logo{
    margin-bottom: 1rem;

    img{
      width: 80px;
      height: 50px;
    }

  }

  .menu-toggle-wrap{
    display: flex;
    justify-content: felx-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle{
      transition: 0.2s ease-out;


      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }

      &:hover {
        .materials-icon{
          color: bisque;
          transform: translateX(10px);
        }
      }

    }

  }
  

h3, .text{
  opacity: 0;
  transition: 0.2s ease-out
}

.menu {
    margin: 0 -1rem;

    .button{
      display: flex;
      align-items: center;
      text-decoration: dashed;

      padding: 1.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons{
        font-size: 2.3rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--primary);

        .material-icons, .text{
          background-color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 0.9rem solid brown;
      }

    }
  }

&.is-expanded{
  width: var(--sidebar-width-max);

  .material-icons {
    width: 24px;
  }

  .menu-toggle-wrap{
    .menu-toggle{
      transform: rotate(-180deg);

    }
  }

 .text {
    opacity: 1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: larger;
    margin-left: 20px;
    color: var(--light);
  }
    
  
  }

  @media (max-width: 768px){
    position: fixed;
    left: 0;
    min-height: 1000vh;
    z-index: 99;
  }
 }
</style>
