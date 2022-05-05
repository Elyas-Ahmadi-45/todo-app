import '../styles/Header.css'
import AddBtn from './AddBtn'


const Header = (props) => {

    return (
        <div className="header">
            <div className="header-main-container">
                {props.showAddbtn && <AddBtn addTodo={props.toggleAddTodo} isOpen={props.isOpen} />}                
                <div className='header-left-container'>
                    <h1>Todos: {props.todosCount}</h1>
                    <h1>Checked: {props.checkedCount}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header