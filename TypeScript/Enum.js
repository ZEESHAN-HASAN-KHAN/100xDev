// Enums -enumeration in typeScript are a
// feature that allows you to define a
// set of name constant
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Left"] = 2] = "Left";
    direction[direction["Right"] = 3] = "Right";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    console.log("This is key is pressed ".concat(keyPressed));
}
doSomething(direction.Down);
