//  Primitive types

// * 7 types :  String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 23
const scoreValue = 23.5
const isAdmin = false

let name;

const outSideTemperature = null

const  id = Symbol("2323")
const anId = Symbol("2323")

console.log(id === anId) 

const bigNumber = 3452342334233n;



// *  Refference types (Non Primitive types) : 3 Types =  Object, Array, Function

//  array

const heros =[
    "osman",
    "mehmed",
    "ali",
]

//  object

let myObj = {
    name: "osman",
    age: 23,
}

//  function

  const myFunc = function (){
console.log("This Is Function")
  }

  console.log(typeof bigNumber)



  // **  memory (stack and heap)


  //  Stack(Primitivie) = copy,    
  //         Heap(Reference(Non Primitive)) = reference(move)

let shoName = "Unique Store Bd"

let anotherShopName = shoName

anotherShopName= "Unique Shop"
console.log(shoName)
console.log(anotherShopName)


let userOne = {
  name : "Mehmed",
  faith : "constantinople",
}

let userTwo = userOne

userTwo.name = "Mohammad"

console.log(userOne)

console.log("test git")