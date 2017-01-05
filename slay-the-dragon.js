var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

totalDamage = 0;

while (slaying) {
    if (youHit = true) {
        totalDamage += damageThisRound;
        console.log("You hit the dragon for " + damageThisRound + " damage. It roars in rage.");
        if (totalDamage >= 20) {
            console.log("The dragon has taken fatal damage. It lets out a smoky final breath. It collapses.");
            console.log("You have slain the dragon, mighty hero!")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
        };
    } else {
        console.log("You missed the dragon, and stabbed yourself in the torso. You are dead.");
    };
};
