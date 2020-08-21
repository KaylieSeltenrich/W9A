var userAges = [11,12,13,14,15,16,17,18,19,20];
var subscriptionStatus = [true,false,true,true,false,true,false,false,true,true];
var array = userAges && subscriptionStatus;


for (var counter = 0; counter < array.length; counter++)
{ 

    if(userAges[counter] < 18 && subscriptionStatus[counter]) {
        console.log("User is younger than 18 and is subscribed");
       }  else if (userAges[counter] < 18 && !subscriptionStatus[counter]) {
        console.log("User is younger than 18 and is not subscribed");
       }
       else if (userAges[counter] >=18 && !subscriptionStatus[counter]) {
           console.log("User is older than 18 and is not subscribed");       
       } else if (userAges[counter] >=18 && subscriptionStatus[counter]) {
        console.log("User is older than 18 and is subscribed");
       } else {console.log("Error")}
    
}
