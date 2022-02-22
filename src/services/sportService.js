const sportService = ( function(){  
    const sports = ([
        {title: "Archery", image: "archery.jpg", description: "Archery is the sport, practice, or skill of using a bow to shoot arrows"},
        {title: "Climbing", image: "climbing.jpg", description: "Climbing is an activity that involves physical movement in steep terrain"},
        {title: "Table tennis", image: "tabletennis.jpg", description: "Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball"},
        {title: "E-Sports", image: "esport.jpg", description: "The sport of e-sports is video games in a formalized form of competition or performance"},
        {title: "Football", image: "football.jpg", description: "Football, more known as football or soccer, is a team sport played with a ball between two teams"},
        {title: "Curling", image: "curling.jpg", description: "Curling is a precision sport that is reminiscent of bocce or petanque, but is played on ice with granite stones."}
    ]);

    const getAll = () => {
        return sports;
    } 

    return {
        getAll
    }

}());

export default sportService;

