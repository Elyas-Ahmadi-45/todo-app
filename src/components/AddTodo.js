import '../styles/AddTodo.css'
import { useState, useEffect } from 'react'
import Header from './Header'


const AddTodo = (props) => {
    const myDate = new Date()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addBtnDisabled, setaddBtnDisabled] = useState(true)


    useEffect(() => {
        if (title && description) {
            setaddBtnDisabled(false)
        } else {
            setaddBtnDisabled(true)
        }
    }, [title, description])

    useEffect(() => {
        setTitle('')
        setDescription('')
    }, [props.isOpen])


    function addTodo() {
        const todo = {
            id: myDate.getTime(),
            title: title,
            description: description,
            date: `${myDate.getFullYear()} - ${myDate.getMonth()} - ${myDate.getDay()}`,
            checked: false
        }
        props.addTodo(todo)
    }

    return (
        <div className={"addtodo-container" + (props.isOpen ? ' open' : '')}>
            <div className='addtodo-header-container'>
                <Header todosCount={props.todosCount} checkedCount={props.checkedCount} isOpen={props.isOpen} showAddbtn={false} />
            </div>
            <div className='addtodo-inputs-container'>
                <h2>Todo Title</h2>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <h2>Todo Description</h2>
                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <button onClick={addTodo} disabled={addBtnDisabled}>Add</button>
            </div>
        </div>
    )
}

export default AddTodo