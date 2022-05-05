import '../styles/App.css'
import Header from './Header'
import AddTodo from './AddTodo'
import { useState } from 'react'
import TodosContainer from './TodosContainer'

let myTodos = []
Object.keys(localStorage).sort((a, b) => {
    return b - a
}).forEach(key => {
    myTodos.push(JSON.parse(localStorage.getItem(key)))
})

let initCheckedCount = 0
myTodos.forEach((todo) => {
    if (todo.checked === true) {
        initCheckedCount++
    }
})


const App = () => {

    const [addOpen, setAddOpen] = useState(false)
    const [todos, setTodos] = useState(myTodos)
    const [checkedCount, setCheckedCount] = useState(initCheckedCount)

    function addTodo(todo) {              
        setTodos([todo, ...todos])
        setAddOpen(false)
        localStorage.setItem(todo.id, JSON.stringify(todo))
    }

    function checkTodo(id) {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.checked = !todo.checked
                localStorage.setItem(id, JSON.stringify(todo))

                if (todo.checked === true) {
                    setCheckedCount(checkedCount + 1)
                } else {
                    setCheckedCount(checkedCount - 1)
                }
            }
            return todo
        })
        
        setTodos(newTodos)        
    }

    function deleteTodo(id) {
        const newTodos = todos.filter(todo => {
            if (todo.id === id) {
                if (todo.checked === true) {
                    setCheckedCount(checkedCount - 1)
                }
                return false
            }
            return true
        })

        setTodos(newTodos)
        localStorage.removeItem(id)             
    }

    function toggleAddtodo() {
        setAddOpen(!addOpen)        
    }

    return (
        <div className="main-background">
            <div className="main-container">
                <AddTodo isOpen={addOpen} addTodo={addTodo} todosCount={todos.length} checkedCount={checkedCount} />
                <Header toggleAddTodo={toggleAddtodo} todosCount={todos.length} checkedCount={checkedCount} isOpen={addOpen} showAddbtn={true} />
                <TodosContainer todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
            </div>
        </div>
    )
}

export default App