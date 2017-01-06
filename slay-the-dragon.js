//plug into http://labs.codecademy.com/#:workspace to test

var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

var playerDamage = 0;

while (slaying) {
    if (youHit) {
        totalDamage += damageThisRound;
        console.log("You hit the dragon for " + damageThisRound + " damage. It roars in rage.");
        if (totalDamage >= 20) {
            console.log("The dragon has taken fatal damage. It lets out a smoky final breath. It collapses.");
            console.log("You have slain the dragon, mighty hero!")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
            console.log(youHit);
        };
    } else {
        console.log("You missed the dragon, and stabbed yourself for " + damageThisRound + " damage.");
        playerDamage += damageThisRound;
        if (playerDamage >= 20) {
            console.log("You have stabbed yourself too many times. You are dead.")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
            console.log(youHit);
        };
    };
};
