
const addFunc = (a:number, b:number=10):number => a + b //if {} are used there should have a bracket
addFunc(2,1);

function anyName(num1:number, num2:number):number {
    return num1 + num2;}

//object - function - method

const anyUser = {
    name: 'Mostafa',
    balance: 10,
  //doesn't allow arrofunction as like
  //addBalance(newBalance:number):number => this.balance+balance
  //bcz this is not supported in arrowfunc
  //without return type of the function
 /* addBalance (newBalance:number){
    return `Your new balance is ${this.balance+newBalance}`;
  }*/
 //with string type return of the fun
  addBalance (newBalance:number):string {
    return `Your new balance is ${this.balance+newBalance}`;

  }
}
//map fun 
const arr: number[]=[1,2,3,4]

const newArr:number[] = arr.map((elem:number):number=>elem*elem);

// diff between map and forEach fun- types are not applied here
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>> Uncaught TypeError in js files: Cannot read property 'reduce' of undefined
//but it's showing error here because of the (.ts)-typeScript file

myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
//>>>return value: 55
