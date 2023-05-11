const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) { cats.push(name) };
function destructivelyPrependCat(name) { cats.unshift(name) };
function destructivelyRemoveLastCat() { cats.pop(name) };
function destructivelyRemoveFirstCat() { cats.shift(name) };
function appendCat(name) { const appendCat = [...cats, name]; return appendCat; };
function prependCat(name) { const prependCat = [name, ...cats]; return prependCat; };
function removeLastCat() { const removeLastCat = cats.slice(); removeLastCat.pop(); return removeLastCat };
function removeFirstCat() { const removeFirstCat = cats.slice(1); return removeFirstCat };
/* function removeLastCat() { const removeLastCat = cats.splice(0,1) return removeLastCat } */