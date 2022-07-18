<template>
    <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Brazil">Brazil</router-link>
        <router-link to="/Hawaii">Hawaii</router-link>
        <router-link to="/Jamaica">Jamaica</router-link>
        <router-link to="/Panama">Panama</router-link>
    </nav>
</template>

<script>
export default {
    name: "TheNavigation"
}
</script>

<style>
#app .gabe-active-class{
    color: #89a0b7;
    font-weight: bold;
    border-bottom: 2px solid #89a0b7;
}
</style>