//a Map holds key-value pairs where the keys can be any datatype.
//a Map remembers the original insertion order of the keys

/*
ESSENTIAL MAP METHODS

new Map() = Creates a new Map
set() = Sets the value for a key in a Map
get() = Gets the value for a key in a Map
delete() = Removes a Map element specified by the key
has() Return true if a key exists in a Map
forEach() Calls a function for each key/ value pair in a Map
entries() Returns an iterator with the key [key,value] pairs in a Map

PROPERTY
size = returns the number of elements in a Map
*/


/*
HOW TO CREATE A MAP
1. Passing an array to new Map()
2. Create a map and use Map.set()
*/

// Create a map using new Map()
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas",300],
//     ["oranges", 200]
// ])

// console.log(fruits.get("apples"))

// Create a Map using set() Method

const fruits = new Map();

fruits.set("apples", 500)
fruits.set("bananas", 300)
fruits.set("oranges", 200)

console.log(fruits.get("oranges"))//200

//the size property returns the number of elements in a Map
console.log(fruits.size) //3

//THE delete() METHOD
//delete() method removes a map element:
fruits.delete("apples");

//THE has() METHOD
//has() method returns true if a key exists in a map

console.log(fruits.has("bananas"))

/*
JAVASCRIPT OBJECTS VS MAPS

difference between Java script Objects and maps
-----------------------------------------------------------------------------|
                Object	                         Map                                         |
Iterable	   Not directly iterable	            Directly iterable
Size	       Do not have a size property	        Have a size property
Key Types	   Keys must be Strings (or Symbols)	Keys can be any datatype
Key Order	   Keys are not well ordered	        Keys are ordered by insertion
Defaults	   Have default keys	                Do not have default keys
*/


//The forEach() method calls a function for each key/value pair in a Map:

//List all entries
// let text = '';
// fruits.forEach (function(value,key){
//     text += key + '=' + value;
// })

// console.log(text)

//the entries() method returns an iterator object with the [key,values] in a Map:

let text= '';
for(let i of fruits.entries()){
    text+= i
}

console.log(text)
