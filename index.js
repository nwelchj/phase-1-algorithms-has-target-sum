

function hasTargetSum(array, target) {
  // Write your algorithm here
 
    
    for (let i = 0; i < array.length; i++) {
    
      const complement = target - array[i];
      
      for (let j = i + 1; j < array.length; j++) {
       
        if (array[j] === complement) return true;
      }
    }
    
    return false;
  }

  // console.log(array[1] + target,array,target);
  // for (let i =0; i <array.length ; i++){
  //   console.log (array[0] + array[i]);
  //   console.log(i)
  //   if (array[0] + array[i] === target){

      
  //     return true

  //   }else return false
  // }



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here


*/

/*
  Add written explanation of your solution here

  takes in array and target
  takes the numbers in the arrry adds them together to eqaul the tagrent 
  takes the target and compares them with the numbers in the array 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
