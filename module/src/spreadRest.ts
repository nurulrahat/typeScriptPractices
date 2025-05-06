{
    //...spread

    const arr1:string []=['Nurul', 'Mostafa'];
    const arr2:string[] = ['Nick name = Rahat'];
    //error code
    arr1.push(arr2)
    //right one is:
    arr1.push(...arr2)

// Base object
const user = {
  id: 101,
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  location: "New York"
};
//spreading
const updatedUser = {
    ...user,
    age: 31,             // Overriding age
    isActive: true       // Adding new property
  };
  
  console.log(updatedUser);
  
/* output:

Email: alice@example.com
Rest of user: {
  id: 101,
  name: "Alice",
  age: 30,
  location: "New York"
}
 */

  //rest system

  const numbrs: number[] = [10, 20, 30, 40, 50];

  // Destructuring with type inference
  const [first, second, ...restNmbrs] = numbrs;
  
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest of numbers:", restNmbrs);
  
  console.log()
//using function 1
function logScores(player: string, ...scores: number[]): void {
    console.log(`Player: ${player}`);
    console.log("Scores:", scores);
    const total = scores.reduce((sum, score) => sum + score, 0);
    console.log("Total Score:", total);
  }
  
  // Call the function
  logScores("Alice", 10, 20, 30, 25);

/* output: 
Player: Alice
Scores: [10, 20, 30, 25]
Total Score: 85

*/  
const welcomeFrnds = (...friends:string[]) => {
    // const friendsList = friends;
    friends.forEach((friendsName:string)=> console.log(`You all are Welcome : ${friendsName}`))
       
};
welcomeFrnds('kamal','jamal','rony','shofiqul');

}