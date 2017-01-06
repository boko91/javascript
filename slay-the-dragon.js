//plug into http://labs.codecademy.com/#:workspace to test

console.log("Mighty adventurer: Slay the Dragon!");

var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

var playerDamage = 0;

var bodyParts = ["head", "chest", "pinky toe", "spleen", "buttocks", "tail", "liver", "funny bone"]

var bodySelect = Math.floor(Math.random() * bodyParts.length);

while (slaying) {
    if (youHit) {
        totalDamage += damageThisRound;
        bodySelect = Math.floor(Math.random() * bodyParts.length);
        console.log("You hit the dragon in the " + bodyParts[bodySelect] + " for " + damageThisRound + " damage. It roars in rage.");
        if (totalDamage >= 20) {
            console.log("The dragon has taken fatal damage. It lets out a smoky final breath. It collapses.");
            console.log("You have slain the dragon, mighty adventurer! Your booty awaits.")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
        };
    } else {
        playerDamage += damageThisRound;
        bodySelect = Math.floor(Math.random() * bodyParts.length);
        console.log("You missed the dragon. The dragon slashes you in the " + bodyParts[bodySelect] + " for " + damageThisRound + " damage.");
        if (playerDamage >= 20) {
            console.log("You have lost too many limbs. You are dead.")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
        };
    };
};
