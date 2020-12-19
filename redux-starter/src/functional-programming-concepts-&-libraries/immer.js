import {produce} from 'immer';

let book = {title: 'Harry Potter'};

function publish(book){
    return produce(book, draftBook => { //1st param the object; 2nd a function with what you want to change
        draftBook.isPublished = true;
    })
}
let updated = publish(book);
console.log(book);
console.log(updated);