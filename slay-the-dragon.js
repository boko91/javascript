var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

totalDamage = 0;

while (slaying) {
    if (youHit = true) {
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        };
    } else {
        console.log("You missed the dragon, and stabbed yourself in the torso. You are dead.");
    };
    slaying = false;
};
