// import './assets/main.css'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from './router'
import "bootstrap"

const httpLink = new createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

// Cache implementation
const cache = new InMemoryCache();
  
// Create the apollo client
const apolloClient = new ApolloClient({ 
 link: httpLink,
 cache,
});


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
}).use(router).mount('#app')
