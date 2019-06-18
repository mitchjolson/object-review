console.log( 'We\'ve got object notes!' )

// Object Literal
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log(baseballHat)

console.log(`The baseballHat is: ${baseballHat.color} in size: ${baseballHat.size}`)

// Const with objects
// Can I do this? YES
console.log('Before setting size:', sunHat)
sunHat.size = 'XL';
console.log('After setting size:', sunHat)

// Can't set to another object
/*sunHat = {
    type: 'sun',
    color: 'blue',
    size: 'S'
}
console.log( 'set a new hat?' sunHat )*/

let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

// Write a function that takes in an array and returns back an array of cute pengions,

function cuteDetection(array){
    let penguinArray = [];
    for(let i = 0; i < array.length; i++ ){
        if( array[i].isCute ){
            penguinArray.push (array[i]);
        }
    }
    return penguinArray;
}
console.log( cuteDetection(penguins) )

function findCuteOnes(inputArray){
    let outputArray = [];
    for( let thing of inputArray ){
        if ( thing.isCute ){
            outputArray.push(thing);
        }
    }
    return outputArray;
}
console.log( cuteDetection(penguins) )

// Object constructor functions
function Hat(myType, myColor, mySize){
    this.type = myType;
    this.color = myColor;
    this.size = mySize;
}

const fancyHat = new Hat('fancy', 'gold', 'M');
console.log(fancyHat);