const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCatsArray = [...cats, "Broom"];
    return newCatsArray;
}

function prependCat() {
    const newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
}

function removeLastCat() {
    return cats.slice(0,cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1);
}


