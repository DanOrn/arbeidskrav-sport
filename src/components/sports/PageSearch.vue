<template>
  <div id="app">
    <input v-model="searchQuery">
    <div v-for="r of resultQuery" :key="r.id">{{r.title}}, {{r.image}}, {{r.description}}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchQuery: null,
      resources: [
        { id: 1, title: "Climbing", image: "climbing.jpg", description: "Climbing is an activity that involves physical movement in steep terrain" },
        { id: 2, title: "Table tennis", image: "tabletennis.jpg", description: "Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball" },
        { id: 3, title: "E-Sports", image: "esport.jpg", description: "The sport of e-sports is video games in a formalized form of competition or performance" },
        { id: 4, title: "Football", image: "football.jpg", description: "Football, more known as football or soccer, is a team sport played with a ball between two teams" },
        { id: 5, title: "Curling", image: "curling.jpg", description: "Curling is a precision sport that is reminiscent of bocce or petanque, but is played on ice with granite stones." }
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