// Marks Calculator
//     Shyam has got his marks in three subjects as 
//     A
//     , 
//     B
//      and 
//     C
//      (out of 100).Write a program to calculate his total marks and his total percentage.
    
//     Note: You have to complete Sum and Average function. No need to take any input. 

    


const Sum = (A, B, C) => 
{
 let sum = A + B + C;
 return sum;
};

const Average = (A, B, C) => 
{
let total = A + B + C;
let result = (total*100)/300;
return result;
};
let Numbers = Sum(2,3,4)
console.log(Numbers);

