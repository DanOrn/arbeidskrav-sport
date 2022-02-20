const gameService = ( function(){  
    const games = ([
        {title: "Archery", image: "archery.jpg", description: "En artig sport"},
        {title: "Climbing", image: "climbing.jpg", description: "En artig sport"},
        {title: "Table tennis", image: "tabletennis.jpg", description: "En artig sport"},
        {title: "E-Sports", image: "esport.jpg", description: "En artig sport"},
        {title: "Football", image: "football.jpg", description: "En artig sport"},
        {title: "Curling", image: "curling.jpg", description: "En artig sport"}
    ]);

    const getAll = () => {
        return games;
    } 

    return {
        getAll
    }

}());

export default gameService;

