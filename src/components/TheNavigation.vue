<template>
    <nav id="nav">
        <router-link id="logo" to="/">Travel App</router-link>
        <router-link 
            v-for="destination in destinations" 
            :key="destination.id"
            :to="{ 
                name: 'destination.show', 
                params: { 
                    id: destination.id,
                    slug: destination.slug
                } 
            }">
            {{ destination.name }}
        </router-link>
    </nav>
</template>

<script>
import sourceData from '../../data.json'
export default {
    name: "TheNavigation",
    data(){
        return{
            destinations: sourceData.destinations
        }
    }
}
</script>

<style>
#app .gabe-active-class {
    color: #89a0b7;
    font-weight: bold;
    border-bottom: 2px solid #89a0b7;
}
</style>