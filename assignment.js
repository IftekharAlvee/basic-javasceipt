// https://github.com/IftekharAlvee/basic-javasceipt

// kilometerToMeter

function kilometerToMeter(kilometer){

    if(kilometer<0){
       return "Error: please input a valid parameter hint: kilometer can't be negative";
    }
    else{
        var meter = kilometer*1000;
        return meter;
    }
}


// budgetCalculator

function budgetCalculator(watch,phone,laptop){

    if(watch<0 || phone<0 || laptop<0){
       return "Error: please input a valid parameter hint: Quantity can't be negative";
    }
    else{
        var watchTaka = watch*50;
        var phoneTaka = phone*100;
        var laptopTaka = laptop*500;
    
        var totalCost = watchTaka+phoneTaka+laptopTaka;
     return totalCost;
    }
}
 


// hotelCost
     
function hotelCost(day){
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


// megaFriend


function megaFriend(nameArray){

    var max = nameArray[0];

    for(var i = 0; i < nameArray.length; i++ ){
        var element = nameArray[i];
        if(element.length>max.length){
            max = element;
        }
    }
    return max;
}


