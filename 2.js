
    
//     <!-- Find if the conditions are obeyed or not?
// You are given two number first as 
// A
//  and second as 
// B
//  and check if both conditions (
// A
// <
// 10
//  and 
// A
// >
// B
// ) are satisfied or not with the help of operators.

// Note: You have to complete Is_Valid function. No need to take any input. -->



const Is_Valid = (a,b) => {
    if(a<10 && a>b){
       return true;
    }
    else{
      return false;
    }
  };
  let Numbers = Is_Valid(2, 3)
  console.log(Numbers);

  
  
  
