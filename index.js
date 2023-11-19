const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

/* 
Let's say we are hard at work in the battery factory. 
We've assembled several batches of batteries today. 
Let's count how many assembled batteries we ended up with.

Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array. 
(Note that the batteryBatches variable has been provided for you in index.js.) Naturally, you should use reduce() for this!
*/

const totalBatteries = batteryBatches.reduce(function batteryCounter(accumulator, batteries) {
    return accumulator + batteries;
  }, 0);
  