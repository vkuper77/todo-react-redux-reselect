import { connect } from 'react-redux';
import {changeChoiser} from '../../store/actions/todoList';

const TodoChoiser = ({onChoiserClick}) => {
    return (
        <div>
            <button onClick={()=>onChoiserClick('done')}>Done</button>
            <button onClick={()=>onChoiserClick('not-done')}>Not done</button>
            <button onClick={()=>onChoiserClick('all')}>All</button>
        </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChoiserClick: (type) => dispatch(changeChoiser(type))
    }
}

export default connect(null, mapDispatchToProps)(TodoChoiser);