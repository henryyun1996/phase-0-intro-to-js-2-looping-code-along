// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(name, eventName) {
    for (let t = 0; t < name.length; t++) {
        console.log(`Thank you, ${name[t]}, for the wonderful ${eventName} gift!`);
    }

    return name, eventName
}

writeCards (["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(positiveInteger) {
    let p = 0
    while (p > 0) {
        console.log(`${positiveInteger}`);
        p++;
    }

    return positiveInteger;
}