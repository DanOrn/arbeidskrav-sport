<template>
    <section class="container">
        <h2 class="mb-4">Some of the most popular sports</h2>
        <section class="row">
            <sport-item v-for="(sport, i) in sports" :key="i"
                :image="sport.image"
                :title="sport.title"
                :description="sport.description"
            ></sport-item>
        </section>
    </section>
</template>

<script>
import sportService from "../../services/sportService.js"
import SportItem from "./SportItem.vue"

export default {
    setup(){
        const sports = sportService.getAll();
        return {sports}
    },
    components: {
        SportItem
    }
}
</script>