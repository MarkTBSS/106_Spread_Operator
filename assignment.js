"use strict";

// Sample books array to avoid ReferenceError
const books = [
    { author: "Author One" },
    { author: ["Author Two", "Author Three"] }
];

// 3.1
const bookAuthors = [
    ...(Array.isArray(books[0].author) ? books[0].author : [books[0].author]),
    ...(Array.isArray(books[1].author) ? books[1].author : [books[1].author])
];

console.log(bookAuthors); // To verify the output

// 3.2
function spellWord(word) {
    console.log(word.split('').join(' '));
}

spellWord('JavaScript'); // To verify the output