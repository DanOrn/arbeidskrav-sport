<template>
    <section>
        <main class="container">
            <h2>Add sport</h2>
            <div class="input-group mb-3">
                <input type="text" class="searchField" v-model="newSport" placeholder="Ex: golf, running..."
                    aria-label="SportInput">
                <div class="input-group-append">
                    <button class="addSportButton btn-primary" @click="addNewSport" type="button" value="Add sport">Add</button>
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
  margin: 0 0 10px 0;
  max-width: 100%;
  border-color:#0275d8;
}

.addSportButton {
    margin-left: 10px;
}
    

    .sportAddedBox {
        padding: 10px 30px;

    }
</style>