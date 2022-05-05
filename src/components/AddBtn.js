import '../styles/AddBtn.css'
import {ReactComponent as AddIcon} from '../icons/add.svg'
import {ReactComponent as BackIcon} from '../icons/back.svg'

const AddBtn = (props) => {     

    return(
        <div className="addbtn-container">
            <div className='addbtn-btn' onClick={props.addTodo}>
                <AddIcon />
                <div className={"addbtn-btn addbtn-btn-back" + (props.isOpen ? ' addbtn-btn-back-show' : '')}>
                    <BackIcon />
                </div>
            </div>
            {/* <button onClick={props.addTodo}>Add</button> */}
        </div>
    )
}

export default AddBtn