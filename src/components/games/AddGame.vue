<template>
    <section>
        <main class="container">
            <h2>Add a sport</h2>
            <div class="input-group mb-3">
                <input type="text" class="searchField" v-model="newGame" placeholder="Ex: golf, running..."
                    aria-label="SportInput">
                <div class="input-group-append">
                    <button class="addGameButton btn btn-danger" @click="addNewGame" type="button" value="Add sport">Add sport</button>
                </div>
            </div>


            <section class="row">
                <article class="col-sm-6 col-md-4 col-lg-3" h4 v-for="(game, i) in games" :key="i">
                    <div class="text-center text-light mt-2 gameAddedBox bg-dark">
                        <div v-if="game === ''">
                            <h4 class="text-danger">Empty field</h4>
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
    import {
        ref
    } from '@vue/reactivity'

    export default {
        setup() {
            const games = ref([]);
            const newGame = ref("");

            const addNewGame = () => {
                games.value.push(newGame.value);
            }

            return {
                games,
                addNewGame,
                newGame
            }
        }
    }
</script>
<style>


    .searchField {
        padding: 2px 50px 2px 10px;
        border-style: solid;
        margin-right: 10px;
    }

    .gameAddedBox {
        padding: 10px 30px;

    }
</style>