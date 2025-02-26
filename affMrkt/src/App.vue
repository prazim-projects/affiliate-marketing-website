<template>

    <div class="app">
        <Sidebar />
        <RouterView />
    </div>  
</template>

<script lang="js" setup>
import Sidebar from './components/Sidebar.vue';
import { RouterView } from 'vue-router';

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
    
    main{
        flex: 1 1 0;
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



</style>