//alert("JavaScript works!");
//Bernice Johnson
//June 10, 2012
//Deliverable 3


//GLOBAL VARIABLES

var town = "Washington D.C.",
    weatherCheck = "First we need to check the weather",
    trolleyTimeInfo = "then head down to the lobby to get more info about the time the next trolley leaves.";
    timeLeftToWait = 0

//ADD LOCAL VARIABLES
//INTRO TO STORY//PROCEDURE METHOD
var us = {
	nameE = "Esther", //string property
	nameB = "I",  //string property
	getReady = "true", //boolean property
	day = "Friday morning", //string property
	wakeUp: function(day){  //string argument
		if (this.day === "Frday morning") {
            console.log("It\s day 2" + this.day + "of our trip." + this.nameE + "and" + this.nameB + "decide we would like to go on a Trolley Tour of " + town + " today." + weatherCheck + trolleyTimeInfo);
        } else {
    	    console.log("We should plan something else.");
   
        };  

}; //END PROCEDURE FUNCTION 
us.wakeUp(day);	
////////////////////////////////////////


//1# Day 2. We decide to go on an Old Town Trolley Tour of Washington D.C.//I head down to the lobby 
//to get more info on the time it arrives and possibly buy the tickets. Are we in time for the next tour? Is the weather good? (Method Function? conditional?)
var trolleyRideInfo = {
    name: "Ole Town Trolley Tour", //string property
    where: "lobby",  //string proprty
    whatTime: 2,  //number property
    timeNow: 1,    //number property
    goodWeather: true, //boolean property
    costPerTicket: 38, //number property
    manAtDeskName: "Sonny", //string property
    niceWeather:  function(niceDay){  //METHOD FUNCTION//BOOLEAN ARGUMENT//ARGUMENT CONDITIONAL//NESTED CONDITIONAL//OUTPUT//RETURN
    	 if (niceDay === true) {
    	 	 console.log("The weather is nice enough outside to go on the " + this.name);
    	 	 if ( timeNow <= whatTime) {
    	 	 	timeLeftToWait = whatTime - timeNow; //MATH
    	 		console.log("We asked the ticket master named " +  this.manAtDeskName + " about when the next tour starts today. He says at" + this.whatTime + "pm." + " and each ticket costs" + this.costPerTicket + "." +  "We have " + timeLeftToWait + " hr to wait. Great we didn't miss the next tour! YAY!");
    	 	    return(true);

    	 	 }else{
    	 	 console.log("Looks like we will have to wait until tomorrow when the weather is nicer.");
    	 	 return(false);
    	 
    	     };

         }else{
         	if (town === "Washington D.C.") {
               console.log("We will go later.");
               return false;
            }else{
            	console.log("Not going at all.");
            };  return false;

};//END OF 1# FUNCTION//return true

trolleyRideInfo.niceWeather(goodWeather);
/////////////////////////////////////////




//2# Buy the tickets//how many?//how much? what time?//Math. return number. ticket cost? Boolean?






//3# Get on trolley-OBJECT?//Array? stops, return array? array.push?//WHILE LOOP






//4# We get off at the white house, take a pic of us in front of it. walk back and buy an italian ice and water.//string? return string?
//OR MAKE THIS A NESTED LOOP TO THE WHILE LOOP???

//5# We get back in line for the trolley ride to finish the tour.//FOR LOOP//ARRAY?



//6# The tour was fun. Now we are back in our room ready to relax and order dinner. We decide to order Sushi. return??





//Function.Method Calls//
//1#
//2#
//3#
//4#
//5#
//6#

/////END////////////////




