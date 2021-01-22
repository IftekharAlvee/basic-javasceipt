function hotelCost(day){

    function checkNumberIfFloat(value) {
        return Number(value) === value && value % 1 !== 0;  //function for checking this input is float or int  
     }
    if(checkNumberIfFloat(day)==true ) {
        return "Error: please input a valid parameter hint: Day can't be fraction number";

    }

    if(day<0){
               return "Error: please input a valid parameter hint: Quantity can't be negative";
    }
    else if(0<=day && day<=10){
        var cost = day*100;
        return cost;
    }
    else if(10<day && day<=20){
        var cost1 = 10*100;
        var day2 = day-10;
        var cost2 = day2*80;
        var cost = cost1 + cost2;
        return cost;
    }
    else {
        var cost1 = 10*100;
        var cost2 = 10*80;
        var day3 = day-20;
        var cost3 = day3*50;
        var cost = cost1 + cost2 + cost3;
        return cost;
    }
}


var result = hotelCost(7.5);
console.log(result);