//creating a React component that takes todos as an input and render them
interface TodoType {
    title: string,
    description: string,
    done: boolean
}

interface TodoInput {
    todo: TodoType
}

function Todo({ todo }: TodoInput) {
    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
    </div>
}