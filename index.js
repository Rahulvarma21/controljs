// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for( let i = 1;i <= 100; i++){
    if(i % 2 === 0)
    console.log(i);
  }
  // Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
  for( let i = 1;i <= 100; i++){
    if(i % 2 !== 0)
    console.log(i);
  }
  // Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
  var i = 1;
  do{
  if(i % 3 == 0){
  console.log(i);}
  i++;
  }while(i<100)
  // Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
  for (let i = 1; i <= 100; i++) {
    let count = 1;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(i);
    }
}