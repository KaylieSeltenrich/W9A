var userAge = 18;
var is_subscribed = true;

if(userAge < 18 && is_subscribed) {
    console.log("User is younger than 18 and is subscribed");
   }  else if (userAge < 18 && !is_subscribed) {
    console.log("User is younger than 18 and is not subscribed");
   }
   else if (userAge >=18 && !is_subscribed) {
       console.log("User is older than 18 and is not subscribed");       
   } else if (userAge >= 18 && !is_subscribed) {
    console.log("User is older than 18 and is subscribed");
   }

