<script setup>
import{ ref } from 'vue'

const contact_info = ref({
    location : 'Adama Naz, Ethiopia',
    phone_no : '+251 ... .... ..',
    email : 'admin@affPops.com'
})

const socials = ref ({
    'twitter(X)': 'x.com/bealprazim',
    telegram : 't.me/ethiopiathepromiseland',
    linkedIn: 'linkedin.com/..'
})
</script>


<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="rows" v-for="(value, key) of contact_info">
                    <div class="col">
                        <a :href="value"><p> {{ key }} : {{ value }} </p></a>
                    </div>
                </div>
            </div>   
            <div class="column">
                <div class="rows" v-for="(value, key) of socials">
                    <a :href="value"><p> {{key}} : {{value}}</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.columns{
    display: flex;
    flex-direction: row;
    justify-content: center;
        
    .column{
        display: flex;
        flex-direction: column;
        padding: 5px 7px;
        margin: 5px;
    }

    a{
        color: antiquewhite;
    }
    
}

</style>