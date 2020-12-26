import { connect } from 'react-redux'
import { filterChange } from '../../store/actions/todoList'

const TodoFilter = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onFilterChange} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: ({ target: { value } }) => dispatch(filterChange(value)),
  }
}

export default connect(null, mapDispatchToProps)(TodoFilter)
