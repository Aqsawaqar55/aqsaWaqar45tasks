//write a program that create objects containing these items.
//datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean
}
//person object
let person:person = {

    age: 30,
    name :'AQsa',
    nationality : 'Pakistan',
    student : true
}
//datatype of car object
interface car{
    maker:string,
    colour:string,
    automatic:boolean
}
//print person
console.log(person);
//car object
let car={
    maker: 'toyota',
    color: 'black',
    automatic:true
}
//print car
console.log(car);