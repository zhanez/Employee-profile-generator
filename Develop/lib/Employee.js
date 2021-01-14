// TODO: Write code to define and export the Employee class
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee{
    constructor(name, id, email){
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports= Employee


// var dog={
//     name:"wolfy",
//     haircolor:"brown",
//     age:11
// }

// var cat={
//     name:"meow",
//     type="cat",
//     haircolor:"black"
// }


// class food{
//     constructor(brand,type){
//       this.brand=brand
//       this.type=type
//     }
//     getBrand(){
//        return this.brand 
//     }

//     getType(){
//         return this.type
//     }


// }
// class Human extends Food{
//     constructor(name,gender,brand,type){
//         super(brand,type)
//        this.name=name
//        this.gender=gender
//     }
//     getname(){
//         return this.name
//     }
//     getGender(){
//         return this.gender
//     }
// }

// class Animal extends Food{
//     constructor(name,haircolor,brand,type){
//         super(brand,type)    
//       this.name=name
//       this.haircolor=haircolor
//     }
//     getName(){
//         return this.name
//     }
//     getHaircolor(){
//         return this.haircolor
//     }
// }
 

// var dog=new Animal("wolfy","brown","purina","dog")
// var phil= new Human("phil","male","asian","chinese")