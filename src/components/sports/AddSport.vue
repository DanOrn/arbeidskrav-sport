<template>
    <section>
        <main class="container">
            <h2>Add a sport</h2>
            <div class="input-group mb-3">
                <input type="text" class="searchField" v-model="newSport" placeholder="Ex: golf, running..."
                    aria-label="SportInput">
                <div class="input-group-append">
                    <button class="addSportButton btn btn-primary" @click="addNewSport" type="button" value="Add sport">Add sport</button>
                </div>
            </div>


            <section class="row">
                <article class="col-sm-6 col-md-4 col-lg-3" h4 v-for="(sport, i) in sports" :key="i">
                    <div class="text-center text-light mt-2 sportAddedBox bg-secondary">
                        <div v-if="sport === ''">
                        </div>
                        <div v-else>
                            <h4>{{sport}}</h4>
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
            const sports = ref([]);
            const newSport = ref("");

            const addNewSport = () => {
                sports.value.push(newSport.value);
            }

            return {
                sports,
                addNewSport,
                newSport
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

    .sportAddedBox {
        padding: 10px 30px;

    }
</style>