import { defineStore } from "pinia";
import {ref, computed} from 'vue'

export const userStore = defineStore('user', ()=>{
    // state
    const tokenJWT = ref(localStorage.getItem('token')||null)
    const user = ref(localStorage.getItem("user")|| null)

    // actions
    function setToken(token) {
        tokenJWT.value = token
        localStorage.setItem('token', token)
    }

    function setUser(userData) {
        user.value = JSON.stringify(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    function clearAuth() {
        tokenJWT.value = null
        user.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    // getters 
    const isAuthenticated = computed(() => !!tokenJWT.value)
    const getUser = computed(() => user.value ? JSON.parse(user.value) : null)
    const getToken = computed(() => tokenJWT.value)

    return {
        tokenJWT,
        user,
        setToken,
        setUser,
        clearAuth,
        isAuthenticated,
        getUser,
        getToken
    }
})