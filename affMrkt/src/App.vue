<template>
    <div class="app">
        <div class="sidebar"><Sidebar /></div>
        <RouterView />  
    </div>  
    <footer>
        <Footer />
    </footer>
   
</template>

<script lang="js" setup>
import Sidebar from './components/Sidebar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'
</script>

<style lang="scss">

:root{
    --primary: #613a77;
    --grey: #64748b;
    --dark: #16263c;
    --sidebar-width-max: 300px;
    --sidebar-width-min: 40px;
    --light: #cbcbcb;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: var(--light)
}


.app{
    display: flex;
    flex-direction: row;
    main{
        padding: 2rem;

    }

    @media (max-width: 768px) {
        padding-left: 4rem;
    }

}button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

footer{
    background-color: var(--dark);
    color: aliceblue;
    
}


</style>