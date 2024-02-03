function isLeapYear (year){
    const isLeapYear = year % 4;
    if(isLeapYear == 0){
        console.log(year +" is leap year ")
    }
    else{
        console.log(year +" is not leap year ")
    }
}
const leapYear = isLeapYear(2024);