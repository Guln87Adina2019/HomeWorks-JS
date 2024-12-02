let sandar = [];
while (true) {
    let san = parseInt(prompt("Сан енгізіңіз (тоқтату үшін 0 енгізіңіз):"), 10);
    if (san === 0) {
        break;
    }
    if (san % 2 === 0) {
        sandar.unshift(san);
    } else {
        sandar.push(san);
    }
}
console.log("Массив:", sandar);
console.log("Массив ұзындығы:", sandar.length);