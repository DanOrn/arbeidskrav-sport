
<template>
  <div id="app">
    <main class="container">
      <h2>Search sport</h2>
          <input class="searchField" v-model="searchQuery">
    <section class="row">

    <div class="col-sm-12 col-md-6 col-lg-4" v-for="sport of resultQuery" :key="sport.id">
      <img :src="require(`@/assets/${ sport.image }`)">
      <h3>{{ sport.title }}</h3>
      <p>{{ sport.description }}</p>
      </div>            
    </section>
    </main>



  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchQuery: null,
      resources: [
        { id: 1, title: "Archery", image: "archery.jpg", description: "Archery is the sport, practice, or skill of using a bow to shoot arrows" },
        { id: 2, title: "Climbing", image: "climbing.jpg", description: "Climbing is an activity that involves physical movement in steep terrain" },
        { id: 3, title: "Table tennis", image: "tabletennis.jpg", description: "Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball" },
        { id: 4, title: "E-Sports", image: "esport.jpg", description: "The sport of e-sports is video games in a formalized form of competition or performance" },
        { id: 5, title: "Football", image: "football.jpg", description: "Football, more known as football or soccer, is a team sport played with a ball between two teams" },
        { id: 6, title: "Curling", image: "curling.jpg", description: "Curling is a precision sport that is reminiscent of bocce or petanque, but is played on ice with granite stones." }
      ]
    };
  },

  
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    }
  }
};
</script>

<style scoped>
img{
        width: 100%;
    }
.searchField {
  margin: 0 0 10px 0;
  max-width: 100%;
}

.row {
  display: flex;
  justify-content: flex-start;
}
</style>