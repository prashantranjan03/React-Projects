import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {
        // Use the 'todo' parameter in the function logic
        console.log("Adding todo:", todo);
    },
    updateTodo: (id, todo) => {
        // Use the 'todo' parameter in the function logic
        console.log("Updating todo:", id, todo);
    },
    deleteTodo: (id) => {
        // No 'todo' parameter used here
        console.log("Deleting todo with ID:", id);
    },
    toggleComplete: (id) => {
        // No 'todo' parameter used here
        console.log("Toggling completion for todo with ID:", id);
    }
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider