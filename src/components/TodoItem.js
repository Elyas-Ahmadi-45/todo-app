import '../styles/TodoItem.css'
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <div className="todo-item-container">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h6>{props.date}</h6>
            </div>
            <div className="todo-item-left-container">
                <button onClick={() => { props.deleteTodo(props.id) }} >
                    <DeleteIcon />
                </button>
                <input type="checkbox" checked={props.checked} onChange={() => { props.checkTodo(props.id) }} />
            </div>
        </div>
    )
}

export default TodoItem