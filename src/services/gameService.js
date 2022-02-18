const gameService = ( function(){  
    const games = ([
        {title: "Cyberpunk 2077", image: "cyberpunk2077.png", childFriendly: false},
        {title: "DOTA 2", image: "dota2.png", childFriendly: false},
        {title: "League Of Legends", image: "lol.png", childFriendly: false},
        {title: "Starcraft 2", image: "starcraft2.png", childFriendly: false},
        {title: "Zelda A Link's Awakening", image: "zelda.png", childFriendly: true},
        {title: "Animal Crossing", image: "animalCrossing.png", childFriendly: true}
    ]);

    const getAll = () => {
        return games;
    } 

    return {
        getAll
    }

}());

export default gameService;

