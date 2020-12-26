import TodoItem from './TodoItem/TodoItem'
import { changeDone, removeCase } from '../../store/actions/todoList'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { createSelector } from 'reselect'

const getTodos = (state) => state.todos
const getFilterText = (state) => state.filterText
const getChosen = (state) => state.chosen

const getFilteredTodos = createSelector(
  [getTodos, getFilterText, getChosen],
  (todos, filterText, chosen) => {
    let filteredTodos = todos

    if (chosen === 'done') {
      return (filteredTodos = filteredTodos.filter((todo) => todo.done))
    } else if (chosen === 'not-done') {
      return (filteredTodos = filteredTodos.filter((todo) => !todo.done))
    }
    filteredTodos = filteredTodos.filter(({ text }) =>
      text.toLowerCase().includes(filterText.toLowerCase())
    )
    return filteredTodos
  }
)

const TodoList = () => {
  const dispatch = useDispatch()
  const filteredTodos = useSelector(getFilteredTodos)

  const onDone = useCallback((id) => {
    dispatch(changeDone(id))
  })

  const onRemove = useCallback((id) => {
    dispatch(removeCase(id))
  }, [])

  return (
    <ul>
      {filteredTodos.map(({ text, id, done }) => (
        <TodoItem
          text={text}
          key={id}
          done={done}
          id={id}
          onDone={onDone}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default TodoList
