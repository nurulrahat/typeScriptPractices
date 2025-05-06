let numberArray: number[]=[1,2,3];
let strArray: string[]=["abd", 'y', 'z'];
let ageName: [number, string, boolean] = [23, 'anyName', false]


//objects
// in js
const user = {
    firstName: 'Nurul',
    middleName: 'Mostafa',
    lastName: 'Rahat'
}
//in ts
const userTS:{
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    company: 'TechZoo Bd'; 
    readonly role: string; // readonly and you can't assign any value in this obj rather than firstly assigned value.
} = {
    firstName: 'Nurul',
    middleName: 'Mostafa',
    lastName: 'Rahat',
    company: 'TechZoo Bd', //will show error for a single changes also.
    role: 'webDev',

}
// let's see the error 
userTS.role={};
userTS.company ={'TechZoo Bd'}

//..