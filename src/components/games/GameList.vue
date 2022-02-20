<template>
    <section class="container">
        <h2 class="mb-4">Some of the most popular sports</h2>
        <section class="row">
            <game-item v-for="(game, i) in games" :key="i"
                :image="game.image"
                :title="game.title"
                :description="game.description"
            ></game-item>
        </section>
    </section>
</template>

<script>
import gameService from "../../services/gameService.js"
import GameItem from "./GameItem.vue"

export default {
    setup(){
        const games = gameService.getAll();
        return {games}
    },
    components: {
        GameItem
    }
}
</script>