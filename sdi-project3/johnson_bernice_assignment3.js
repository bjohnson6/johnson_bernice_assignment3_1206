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
            console.log(this.nameE + " and " + this.nameB +" wake up to a beautiful " + this.day + " We decided it would be an awesome idea to go on a Trolley Tour of " + town + " today. " + weatherCheck + " " + trolleyTimeInfo);
        } else {
    	    console.log("We should plan something else.");
   
        };  
    }    

}; //END PROCEDURE FUNCTION//Fixed
us.wakeUp("Friday morning");	
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

};//END OF 1# FUNCTION//return true //kinda works.

trolleyRideInfo.niceWeather(this.goodWeather);
/////////////////////////////////////////


//2# Buy the tickets//how many?//how many tickets/ how much each ticket cost/Math. return number. ticket cost? 
var trolleyTickets = {
    howMany : 2,  //number property
    eachTicketCost : 38, //number property
    getTickets: function(howMany) { //ASSESSOR METHOD.get //Number argument
    	var totalForTwoTickets = this.howMany * this.eachTicketCost; //math for two tickets
    	return totalForTwoTickets; //return amount $76
    },
};
console.log("We just purchased two tickets and they cost $:" + trolleyTickets.getTickets());    

//END OF #2 ACCESSOR METHOD PROCEDURE // CODE WORKS
    

//3# Get on trolley-OBJECT?//Array? stops, return array? array.push?//For LOOP
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
		console.log("The " + this.vehicle + " has arrived and we are greeted by " + this.tourGuide + " the bubbly tour guide. We sit down in our seats and get ready to enjoy the ride.");
		console.log("On our first tour loop we will be passing these locations.");
	},
};	
		var handleData = function (json) {
			for (var i = 2; i < json.trolleyRide.length; i++){ //json forloop
				var  trolley = json.trolleyRide[1];
				console.log( "id: " + trolley.destinationStopsLoopOne);
			};	
                //ADD ANOTHER FOR LOOP
		};
trolleyRide.getOnTrolley();
//var json2 = handleData; ????? I keep getting the error that my json2 is undefined?//FIXED SOME OF IT
handleData(json2); //calls the json file                    

		
    

  //4# We get off at the white house, take a pic of us in front of it.//string? return string?
//For loop nested???
var whiteHouse = {
    attraction : ["There are lots of people here today.", "We took a cute picture of us together."],
    busRideHome : [ "Connecticut Ave NW.", "and around Dupont Circle.", "in front of our Hotel stop."], //array proprty
    getToWhiteHouse : function() { 
    	for (var i = 0, j = this.attraction.length; i < j; i++) { //for loop
    		console.log( this.attraction[i] + " Standing in front of the WhiteHouse."); 
        };
    	for (var i = 0, j = this.busRideHome.length; i < j; i++) { //nested forloop
    		console.log("We are on the Metro bus driving down " + this.busRideHome[i]);
                console.log("Yay we are back at our hotel now! We get off the bus and go to our room.");
       };
    },
 };       
whiteHouse.getToWhiteHouse();
//Finished 4# tested and works.



//5# The tour was fun. Now we are back in our room ready to relax and order dinner. We decide to order Sushi. return??
//RETURN ARRAY OF FOOD? CALIFORNIA ROLL, EEL ROLL, HOUSE COMBO CHOW-MEIN//ARGUMENT ARRRAY//Mutator Method..change drink
var dinner = {
    sushi : [" One California roll", "EEl Roll", " and the House Combo Chow-mein"], //array property
    drink : "soda",
    dinner : true,
    getSushi: function (sushi){ //array argument
        console.log("Let\'s order sushi take out from that place WoknRoll down the street for dinner. "); 
        if (this.dinner === true) {
        console.log("We call and place an order of " + this.sushi + " can\'t wait until it gets here.");
            var waitInLine = 15;
    	var timeStillWaitingInLine = 0;
         while (waitInLine > timeStillWaitingInLine) {
         	   console.log("The wait will be " + waitInLine + " minutes until our sushi arrives.");
               waitInLine -=5;
          };     
               console.log("Our food is here. It taste so good! I think I am going to have " + this.drink + "to drink.");
                 



        }else{ 
           console.log("No sushi for us.");
    };     return sushi;

    	
           //    var dinner = { 
           //    	   drink : "icetea",
            //    	newDrink : function (){
                    
               	}  
                //(mutator method changed my drink from soda to icetea)
         };      
     }
};
dinner.getSushi(this.sushi);
//dinner.newDrink();
//Finished 6#//need to test now.
    

//6# Time for bed. Object Property, Object Argument, object return
var bed = {              //object
	type : "king size",  //object property
	feel : "comfy",
	nice : " and soft bed.",
	dream : "Sweet dreams to me!",
	goToSleep: function (bed){ //object arguement
	   var goToSleeps = (this.type + " "  + this.feel+ this.nice + " " + this.dream);
	   return goToSleeps; //object return..king size, comfy, and soft bed. Sweet dreams to me!
       
    },

}; 
bed.goToSleep(bed); //calling the method
console.log("The day is over and I can\'t wait to go zzz in my nice big "+ bed.goToSleep(bed)); //console.log the return

//7# String Function 
var relaxInRoom = function (){ //string function
         var snackTea = "hotTea.";
         var snackCookie = " peanut butter cookie";
         var snack = console.log("I woke up in the middle of the night craving a " + snackCookie + " and some " + snackTea);
         var eatSnack =  console.log("I decided to use the coffee maker to make some " + snackTea + " It made me feel warm and toasty and I went back to zzz.");
         
         return snack + eatSnack; //return string 
};
relaxInRoom();

//End of 7# string function

////End of Object Property//Code works///////////////////////////////
//Function.Method Calls//
//1#
//2#
//3#
//
//6#

/////END////////////////




