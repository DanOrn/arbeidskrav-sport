const gameService = ( function(){  
    const games = ([
        {title: "Cyberpunk 2077", image: "pilogbue.png", childFriendly: false},
        {title: "DOTA 2", image: "klatring.png", childFriendly: false},
        {title: "League Of Legends", image: "pingpong.png", childFriendly: false},
        {title: "Starcraft 2", image: "esport.png", childFriendly: false},
        {title: "Zelda A Link's Awakening", image: "fotball.png", childFriendly: true},
        {title: "Animal Crossing", image: "kurling.png", childFriendly: true}
    ]);

    const getAll = () => {
        return games;
    } 

    return {
        getAll
    }

}());

export default gameService;

