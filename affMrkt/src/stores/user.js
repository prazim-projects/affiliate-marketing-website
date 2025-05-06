import { defineStore } from "pinia";
import {ref, computed} from 'vue'

export const userStore = defineStore('user', ()=>{
    // state
    const tokenJWT = ref(localStorage.getItem('token')||null)
    const user = ref(localStorage.getItem("user")|| null)

    // getters 
    const getToken = computed(()=> tokenJWT.value)
    const getUser = computed(()=> {
        if(!user.value){
            return null
        }try{
            return JSON.parse(user.value)
        }catch(error){
            console.error("Error parsing user data from localstorage:", error )
            return null
        }
    })

    // Actions
    function setToken(token){
        // update auth token value
        tokenJWT.value = token
        if(token){
            localStorage.setItem('token', tokenJWT.value)
        }else{
            localStorage.remove('token')
        }
    }

    function removeToken(){
        tokenJWT.value = null
        localStorage.removeItem('token')
    }

    function setUSer(user){
        user.value = JSON.stringify(user)
        localStorage.setItem('user', user.value)
    }

    function removeUser(){
        user.value = null
        localStorage.removeItem('user')
    }

})