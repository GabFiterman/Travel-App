<template>
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{destination.description}}</p>
    </div>
</template>

<script>
import sourceData from '/data.json';
export default {
    name: 'DestinationShow',
    computed: {
        destinationId() {
            // Retorna o id da rota.
            return parseInt(this.$route.params.id)
        },
        destination() {
            return sourceData.destinations.find(
                destination => destination.id === this.destinationId
            );
        }
    },
}
</script>
<style scoped>
</style>