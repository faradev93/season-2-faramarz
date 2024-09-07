let fara2 = (["faramarz", 3, 5, 110, "string", true, function () { }]);
console.log(typeof fara2);
function test(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
    }
}
test(fara2);