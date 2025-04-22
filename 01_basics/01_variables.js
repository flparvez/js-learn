
const account_id = 134213412;

let acccountEmail = "flparvez23@gmail.com"
let accountstatus;
var  accountPassword = "1234567890"

/*
prefer not to use var
because it is function scoped
and can be re-declared

*/

accountCity = "Cumilla"

// account_id =23   // not allowed
acccountEmail="test23@gmail.com"
accountPassword="23232323"
accountCity="Dhaka" // not allowed


console.table({
    // account_id,
    acccountEmail,
    accountPassword,
    accountCity,
    accountstatus
})