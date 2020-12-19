const person1 = {
    name: 'John'
};
const updated1 = {...person1, name: 'Bob'} // passes person and changes the name to 'Bob'
console.log(updated);

// if there are nested objects we have to be careful since ... (spread operator) does a shallow copy so

const person2 = {
    name: 'John',
    address:{
        country: 'USA',
        city: 'San Francisco'
    }
};
const updated2 = {
    ...person2,
    address: {
        ...person2.address,
    },
     name: 'Bob', city: "New York"} 
console.log(updated2);
//since this is so verbose we use a immutability library like Structural Sharing => immer