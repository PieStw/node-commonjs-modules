function people(){
    const name = require("./names.js");
    const objName = name("Piero", "Stalteri");

    const hobby = require("./hobbies.js");
    const objHobby = hobby("Calcio", "Anime", "Videogiochi");

   const people = {firstName: objName.firstName, lastName: objName.lastName, hobby: objHobby};
   console.log(people);
}

people();