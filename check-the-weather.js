var user = prompt("What's the weather like today?").toLowerCase();

var userTwo = prompt("And what was it like yesterday?").toLowerCase();

switch(user) {
    case 'sunny':
        if(user === userTwo || userTwo != 'rainy'){
            console.log("Wow, must be a drought!");
        } else {
            console.log("Sunny, eh? Great weather we're having!");
        }
        break;
    case 'cloudy':
        console.log("Cloudy, eh? Ain't no sunshine when she's gone.");
        break;
    case 'windy':
        console.log("Windy, eh? Wind's a-whistlin' and a-whilin'.");
        break;
    case 'foggy':
        console.log("Cloudy, eh? Thar she blows! Am I right? Haha!");
        break;
    case 'rainy':
        if (userTwo != 'sunny' && userTwo != 'snowy') {
            console.log("Great Jiminy!! Sounds like a monSOON!!!");
        } else {
            console.log("Rainy, eh? Nothin' like curlin' up on the couch with a nice hot mug of Captain's Co-co.");
        }
        break;
    case 'snowy':
        console.log("Snowy, eh? Let it snow, let it snow, let it snow!!");
        break;
    default:
        console.log("Holy Moly!!! That's some crazy weather we're havin'!!!");
};
    
