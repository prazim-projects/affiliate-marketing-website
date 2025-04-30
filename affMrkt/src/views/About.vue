<script>
import { computed, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { site_info } from '../queries';

export default{
    setup(){
        const {result, loading, error} = useQuery(site_info)
        const site = computed(() => result.value?.site ?? [])

    watch (result, value=>{ 
        console.log(value)
    })

    return{
        site,
        loading,
        error,
        result   
        }
    }
}

</script>

<template>
    <main class="about-page container-fluid">
        <div class="aboutSite">
            <h2>About us</h2>
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">Error: {{ error.message }}</div>
            <div v-else-if="result && site" class="about">
                <h3> We are {{ site.name }}</h3>
                <p>{{site.description}}</p>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.aboutSite{
    padding: 5px 5px;
    margin: 2px 5px 3px 5px;
    height: 500px;
    width: 500px;
    background-color: rgb(60, 3, 73);
}

</style>