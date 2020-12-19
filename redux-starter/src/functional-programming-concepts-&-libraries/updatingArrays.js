const numbers = [1, 2, 3];

// Adding at end
const addedEnd = [...numbers, 4];
// Adding at beginning
const addedBegin = [4, ...numbers];
// Add at a especific index, like before 2
const index = numbers.indexOf(2);
const addedAtIndex = [...numbers.slice(0, index), 4, ...numbers.slice(index)] // we spread the slices because .slice returns an array

// Removing
const removed = numbers.filter(n => n !== 2);

// Updating, like replacing 2 with 20
const updated = numbers.map(n => n === 2 ? 20 : n);


