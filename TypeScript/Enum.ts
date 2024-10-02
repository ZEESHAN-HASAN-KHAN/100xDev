// Enums -enumeration in typeScript are a
// feature that allows you to define a
// set of name constant

enum direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: direction) {
    console.log(`This is key is pressed ${keyPressed}`);
}
doSomething(direction.Down);