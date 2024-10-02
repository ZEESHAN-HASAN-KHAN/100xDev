"use strict";
function Todo({ todo }) {
    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
    </div>;
}
