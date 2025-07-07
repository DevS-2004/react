import {createContext, useContext} from 'react'

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo: "ToDo massage",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProviider = ToDoContext.Provider