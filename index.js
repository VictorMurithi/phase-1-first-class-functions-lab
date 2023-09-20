const returnFirstTwoDrivers = function (array){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    let n =drivers.slice(0,2);
    return n;
}
const returnLastTwoDrivers = function(array){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    let n = drivers.slice(2);
    return n ;
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    const multiplyFare = fare => fare * fare;
    return multiplyFare;
}

function fareDoubler(fare){
    const result = fare *2;
    return result;
}
function fareTripler(fare){
    const total = fare * 3 ;
    return total;
}

function selectDifferentDrivers(drivers,functions){
    if (functions === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else if(functions === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}