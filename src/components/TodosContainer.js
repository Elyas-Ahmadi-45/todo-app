import TodoItem from "./TodoItem"
import '../styles/TodosContainer.css'

const TodosContainer = (props) => {

    const todosView = props.todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} deleteTodo={props.deleteTodo} checkTodo={props.checkTodo} />
    })

    return (
        <div className="todos-container">
            {todosView.length > 0 ? todosView : <NoTodo />}            
        </div>
    )
}

const NoTodo = () => {
    return(
        <div className="todo-no-item">
            <h1>Nothing to show!</h1>
        </div>
    )
}

export default TodosContainer