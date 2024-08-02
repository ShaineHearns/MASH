function mash(){
    let result = "You will live in a " + getHome() +  " travel to " + getTravelCount() + " countries and have a pet " + getPet() + ". You will work as a " + getJob() + " and your hobby will be " + getHobby() + "."
    return result; 
}
let answer = mash();
console.log(answer)

function randNumGenerator(x){
   rng = Math.floor(Math.random() * x) + 1;
   return(rng);
}

function getHome(){
    let homes = ["Mansion", "Castle", "Shack", "House","Pineapple"];
    let customhome = process.argv[2];
    if (process.argv[2]){
        homes.push(customhome);
    }
    let urhome = homes[randNumGenerator(homes.length) - 1];

    return(urhome);
}
function getTravelCount(){
    let travelNum = randNumGenerator(100);
    return travelNum;
}
function getPet(){
    let pets = ["Rock","Slime","Freddy Fazbear","Floppa","Perry The Platypus"];
    let chance = Math.floor(Math.random() * 2);
    let randompet;
    if (chance == 1 && process.argv[3]) {
       randompet = process.argv[3];
    }
    else{
        randompet = pets[randNumGenerator(pets.length) - 1];
    }
    return randompet;
}

function getJob(){
    let jobs = ["therapist","clown","ASC Instructor","CEO","president","dogsitter"]
    let yourjob = jobs[randNumGenerator(jobs.length)- 1 ];
    return yourjob;
}
function getHobby(){
    let hobbies = ["swimming","videogames","creating music","golfing","reading","eating"];
    let yourhobby = hobbies[randNumGenerator(hobbies.length) - 1];
    return yourhobby;
}
