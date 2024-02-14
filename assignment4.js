function calculateMoney(ticketSale){
    if(ticketSale >= 0){
    let dayIncome = ticketSale * 120;
    let dayExpense = 500 + (8 * 50);
    let netDayIncome = dayIncome - dayExpense;
    return netDayIncome;
    }
    else{
    return "Invalid Number";
    }
    }


    function checkName(name){
    if(typeof name == "string"){
    let str = name.length;
    let str1 = name.charAt(str - 1);
    if(str1 == "a" || str1 == "e" || str1 == "i" || str1 == "o" ||
    str1 == "u" || str1 == "w" || str1 == "y" || str1 == "A" ||
    str == "E" || str1 == "I" || str1 == "O" || str1 == "U" ||
    str1 == "W" || str1 == "Y"){
    return "Good Name";
    }
    else{
    return "Bad Name";
    }
    }
    else{
    return "Invalid"
    }
    }



    function deleteInvalids(array){
    if(Array.isArray(array)){
    const result = [];
    for(let i = 0; i < array.length; i++){
    if(isNaN(array[i]) == false && typeof array[i] == 'number'){
    result.push(array[i]);
    }
    }
    return result;
    }
    }


    function password(obj) {
    let birthYear = obj.birthYear;
    let name = obj.name;
    let website = obj.siteName;
    let check = birthYear.toString().length;
    if (typeof birthYear == "undefined" || typeof name == "undefined" || typeof website == "undefined" || check!== 4) {
    return "Invalid Input";
    }
    else {
    return website.charAt(0).toUpperCase() + website.slice(1) + "#" + name + "@" + birthYear;
    }


    }
    function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost != 'number'){
    return "Invalid Input";
    }
    else{
    let sum =0;
    for(let i=0 ; i< arr.length ; i++){
    if(arr[i]>=3000){
    arr[i] = arr[i]*0.8;
    }
    }
    for(let j=0 ; j < arr.length ; j++){
    sum += arr[j];
    }
    let savings = sum - livingCost;
    if(savings < 0){
    return "earn more";
    }
    else{
    return savings;
    }
    }
    }