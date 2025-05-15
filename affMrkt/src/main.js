// import './assets/main.css'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { setContext } from '@apollo/client/link/context'



const httpLink = new createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext((_, { headers}) => {
    const token = localStorage.getItem('token')

    return {
        headerS: {
            ...headers,
            
        }
    }
})

// Cache implementation
const cache = new InMemoryCache();
  
// Create the apollo client
const apolloClient = new ApolloClient({ 
 link: authLink.concat(httpLink),
 cache,
 credentials: 'include',
 headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
 }
});


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
}).use(createPinia()).use(router).mount('#app')
