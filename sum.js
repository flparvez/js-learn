
let myArray = [1,4,2,3,5,6]

function SumFac(numbers){
                let sum = 0;
                for ( let i = 0;  i < numbers.length; i++ ) {
                               sum = sum + numbers[i] 
                //                sum  += numbers[1] 
                }
      


                 //                sum  += numbers[1] 
                // sum =  0 +1 ;
                //   1 + 4 = 5
                //  5 + 2 = 7
                //  7 +3 =10
                return sum;

}
let result =SumFac(myArray)
let Anotherresult =SumFac([3,5,7,7,9])
console.log(result)