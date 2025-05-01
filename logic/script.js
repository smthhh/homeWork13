function editWords(arr) {
    return arr.map(function (str) {
        let newStr = str.split('').reverse().join('').toUpperCase();
        let avr = Math.floor((newStr.length + 1) / 2);
        let partLeft = newStr.slice(0, avr);
        let partRight = newStr.slice(avr);

        return partLeft + '-' + partRight;
    });
};

console.log(editWords(["new york city"]));
console.log(editWords(["null", "undefined"]));
console.log(editWords(["hello", "", "world"]));
console.log(editWords([""]));
