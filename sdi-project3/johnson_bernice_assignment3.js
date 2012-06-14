//alert("JavaScript works!");
//Bernice Johnson
//June 10, 2012
//Deliverable 3


//GLOBAL VARIABLES

var town = "Washington D.C.",
    weatherCheck = "First we need to check the weather",
    trolleyTimeInfo = "then head down to the lobby to get more info about the time the next trolley leaves.",
    timeLeftToWait = 0;

//ADD LOCAL VARIABLES
//INTRO TO STORY//PROCEDURE METHOD
var us = {
	nameE : "Esther", //object property
	nameB : "I",  //object property
	getReady : true, //boolean property
	day : "Friday morning", //string property
	wakeUp: function(day){  //string argument
		if (this.day === "Friday morning") {
            console.log("It\'s day 2" + this.day + "of our trip." + this.nameE + "and" + this.nameB + "decide we would like to go on a Trolley Tour of " + town + " today." + weatherCheck + trolleyTimeInfo);
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
    niceWeather: function(niceDay){  //METHOD FUNCTION//BOOLEAN ARGUMENT//ARGUMENT CONDITIONAL//NESTED CONDITIONAL//OUTPUT//RETURN
    	 if (niceDay === true) {
    	 	 console.log("The weather is nice enough outside to go on the " + this.name);
    	 	 if ( this.timeNow <= this.whatTime) {
    	 	 	 var timeLeftToWait = this.whatTime - this.timeNow; //MATH
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
                return false;
            };    

};//END OF 1# FUNCTION//return true

trolleyRideInfo.niceWeather(this.goodWeather);
/////////////////////////////////////////


//2# Buy the tickets//how many?//how many tickets/ how much each ticket cost/Math. return number. ticket cost? 
var trolleyTickets = {
    howMany : 2,  //number property
    eachTicketCost : 38, //number property
    getTickets: function() { //ASSESSOR METHOD.get
    	var totalForTwoTickets = this.howMany * this.eachTicketCost; //math for two tickets
    	return totalForTwoTickets; //return amount $76
    },
};
console.log("We just purchased two tickets and they cost $:" + trolleyTickets.getTickets());    

//END OF #2 ACCESSOR METHOD PROCEDURE // CODE WORKS
    

//3# Get on trolley-OBJECT?//Array? stops, return array? array.push?//WHILE LOOP
var trolleyRide = {
	vehicle : "trolley", //object property?
	tourGuide : "Loo Loo", //string property
	destinationStopsLoopOne : [ //array property
	"Woodley Park", 
	"National Zoo", 
	"Washington National Cathedral",
	"George Town",
	"Lincoln Memorial",
	"Museams"],
	destinationStopsLoopTwo : [ //array property
	"Union Station",
	"Washington Momument",
	"White House"
	],
	getOnTrolley : function() {

	}













//4# We get off at the white house, take a pic of us in front of it. walk back and buy an italian ice and water.//string? return string?
//ForLoop???
var whiteHouseTour = {
    attraction : "White house", //string property
    surrounding : "lots of people", //string property
    memories : "take picture of us", //string proprty
    busRideHome : ["Metro Stop", "Connecticut Ave NW", "Around Dupont Circle", "Stop in front of our Hotel"]; //array proprty



}

//5# We get back in line for the trolley ride to finish the tour.//FOR LOOP//ARRAY?



//6# The tour was fun. Now we are back in our room ready to relax and order dinner. We decide to order Sushi. return??
//RETURN ARRAY OF FOOD? CALIFORNIA ROLL, EEL ROLL, HOUSE COMBO CHOW-MEIN//ARGUMENT ARRRAY//Mutator Method..change drink
var dinner = {
    sushi : ["California roll", "EEl Roll", "House Combo Chow-mein"], //array property
    drink : "soda",
    relaxNow : "ready to relax and order dinner", 
    getSushi: function (sushi);



}




//Function.Method Calls//
//1#
//2#
//3#
//4#
//5#
//6#

/////END////////////////




