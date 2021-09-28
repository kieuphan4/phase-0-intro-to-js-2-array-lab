const cats = ['Milo', 'Otis', 'Garfield'];

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat() {
    return cats.push('Ralph')
}

function destructivelyPrependCat() {
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat() {
    const newCats = [...cats, 'Broom']
    return newCats
}

function prependCat() {
    const newCatsArray = ['Arnold', ...cats]
    return newCatsArray
}

function removeLastCat() {
    return cats.slice(0, -1)
    // return cats.slice(0,cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1)
}