<script setup>
import{ ref } from 'vue'

const contact_info = ref({
    location : 'Adama Naz, Ethiopia',
    phone_no : '+251 ... .... ..',
    email : 'admin@affPops.com'
})

const socials = ref ({
    'twitter(X)': 'x.com/bealprazim',
    telegram : '@ethiopiathepromiseland',
    linkedIn: 'linkedin.com/..'
})
</script>


<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="rows" v-for="(value, key) of contact_info">
                    <p> {{ key }} : {{ value }}</p>
                </div>
            </div>   
            <div class="column">
                <div class="rows" v-for="(value, key) of socials">
                    <p> {{key}} : {{value}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.columns{
        display: flex;
        flex-direction: column;
        
        .column{
            display: flex;
            flex-direction: row;
        }
}

</style>