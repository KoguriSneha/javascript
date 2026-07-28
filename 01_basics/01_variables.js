const accountId=165799
let accountEmail="sneha@gmail.com"
var accountPassword="1234"
accountCity="Hyderabad"
let accState;


// accountId=3   //not allowed
accountEmail="sn@gmail.com"
accountPassword="565444"
accountCity="Kerala"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accState])