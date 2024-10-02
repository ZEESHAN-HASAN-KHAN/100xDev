// What are Types
// Very Simmilar to interface
//Types let you aggregate data together
type user = {
    firstName: string;
    lastName: string;
    age: number
}
//But they let you to do a few other things

//1. Unions

type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
    console.log(`Id ${id}`);
}
printId(191);
printId("202");

//2. Intersection
// What if you want to create a type that
// has every property of multiples types/inteface

type Employee = {
    name: string;
    startDate: Date;
}
type Manager = {
    name: string;
    department: string
}
type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
    name: "Zeeshan",
    startDate: new Date(),
    department: 'Software Developer'
}
