<template>
    <section>
        <main class="container">
            <h2>Legg til spel du spelar</h2>
            <input class="searchField rounded-0 border-dark" v-model="newGame" type="text">
            <input class="addGameButton" @click="addNewGame" type="button" value="Legg til spel">
            <section class="row">
                <article class="col-sm-6 col-md-4 col-lg-3" h4 v-for="(game, i) in games" :key="i">
                    <div class="text-center text-light mt-2 gameAddedBox bg-dark">
                        <div v-if="game === ''">
                            <h4 class="text-danger">Du har gløymd å skrive eit spel!</h4>
                        </div>
                        <div v-else>
                            <h4>{{game}}</h4>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    </section>
</template>
<script>
import {ref} from '@vue/reactivity'

export default {
    setup(){        
        const games = ref([]);
        const newGame = ref("");

        const addNewGame = () => {
            games.value.push(newGame.value);
        }

        return {games, addNewGame, newGame}
    }
}
</script>
<style>
    .addGameButton{
        background-color: #A3CCAB;
        border: #34675C;
        border-style: solid;
        border-width: 2px;
        padding: 5px 20px;

    }
    .searchField{
        border-width: 3px;
        border-style: solid;
        margin-right: 10px;
    }
    .gameAddedBox{
        padding: 10px 30px;
        
    }
</style>