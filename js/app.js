var users = [

    {
        tweet: "Hello there this is a tweet",
        username: "OrcinusOrca1995",
        created_at: "08-22-2020",
        age: 25,
    },

    {
        tweet: "Hello there this is another tweet",
        username: "Somebody1212",
        created_at: "08-22-2020",
        age: 19,
    },


    {
        tweet: "Hello there this is a super special tweet",
        username: "SomeoneElse5555",
        created_at: "08-20-2020",
        age: 20,
    },


    {
        tweet: "Hello there this is just a regular boring tweet",
        username: "Person1111",
        created_at: "08-22-2020",
        age: 30,
    },


    {
        tweet: "Hello there this is a tweet tweet tweet",
        username: "BirdsGoTweet",
        created_at: "08-19-2020",
        age: 13,
    },


    {
        tweet: "Howdy y'all this is a tweet",
        username: "CowboyDude1010",
        created_at: "08-21-2020",
        age: 15,
    },


    {
        tweet: "Hello there this is a tweet or something",
        username: "Person222",
        created_at: "08-22-2020",
        age: 14,
    },


    {
        tweet: "Hai dis be a tweet",
        username: "GalGirlCool19",
        created_at: "08-21-2020",
        age: 25,
    },


    {
        tweet: "I am running out of ideas",
        username: "Idk10101010",
        created_at: "08-21-2020",
        age: 18,
    },


    {
        tweet: "H3ll0 th3r3 th1s 1s a tw33t",
        username: "l337sp33k",
        created_at: "08-19-2020",
        age: 16,
    },

];


function ageOfUser(users) {

        if (users.age >= 18) {
            return true; 
        } else {
            return false;

        }
 }


var over18 = users.filter(ageOfUser);
console.log (over18);