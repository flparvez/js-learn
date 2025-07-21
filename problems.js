//  Problem : Create An Array Containing different types of tea

const teas = [ "Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea" ];

//  problem : Add " Chamomile "  to the existing array of teas
teas.push("Chamomile")
//  Problem :  Remove Oolong Tea From The  List Of Teas

const index = teas.indexOf("Oolong Tea");
console.log(index)
if (index > -1) {
              teas.splice(index,1)  
}


//  problem : Filter The List  to only include teas  that are caffeinated 
const caffinatedTeas = teas.filter((tea) => tea  !== "Heribal Tea")

// console.log(caffinatedTeas)
//  problem :  Sort the list of teas in alphabetical order


//  problem :  Use a for loop to print each type of tea in the array

for ( let i =0; i < teas.length; i++) {
console.log(`Tea Number ${i+1} is ${teas[i]}`)
}

//  use a for loop to  count how many types of teas are caffeinated (excluding "herbal teas")

let caffNatedMyTeas = 0;

for ( let i =0; i > teas.length; i++) {


if(teas[i] !== "Herbal Tea"){
caffNatedMyTeas++;
}
}
console.log("cafinate",caffNatedMyTeas)

//  Problem : Use a for loop to create  a new array with all the tea names in uppercase
const upperCase = [];

for ( let i =0; i < teas.length; i++){
upperCase.push(teas[i].toUpperCase())
}


console.log(upperCase)
//  problem : Use a for loop to find the tea name with the most characters

let longetstTea = ""
for (let i =0; i < teas.length; i++){
                if(teas[i].length > longetstTea.length){
                                longetstTea = teas[i]
                }
} 

console.log(longetstTea)
// problem : Use a for loop to reverse the order of teas in the array

let reversedArray = [];

for (let i = teas.length -1; i >= 0; i--){
    reversedArray.push(teas[i]);
}

console.log("reversedArray",reversedArray)


// console.log(teas)