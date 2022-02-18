<template>
    <section class="container">
        <h2>Spel vi spelar no</h2>
        <section class="row">
            <game-item v-for="(game, i) in games" :key="i"
                :image="game.image"
                :title="game.title"
                :childFriendly="game.childFriendly"
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