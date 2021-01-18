import { ITodo } from '../../models/ITodo'

export const FETCH_TODO = 'todoList/fetch'
export const FETCH_TODO_SUCCESS = 'todoList/fetch/success'
export const FETCH_TODO_FAILED = 'todoList/fetch/failed'

export const fetchTodo = () => ({ type: FETCH_TODO })
export const fetchSuccess = (items: ITodo[]) => ({ type: FETCH_TODO_SUCCESS, payload: items })
export const fetchFailed = () => ({ type: FETCH_TODO_FAILED })

export const ADD_TODO = 'todoList/add'
export const REMOVE_TODO = 'todoList/remove'
export const CHECK_TODO = 'todoList/check'

export const addTodo = (item: ITodo) => ({ type: ADD_TODO, payload: item })
export const removeTodo = (id: string) => ({ type: REMOVE_TODO, payload: id })
export const checkTodo = (id: string, checked: boolean) => ({ type: CHECK_TODO, payload: { id, checked } })

interface IState {
  todos: ITodo[]
  status: 'fetching' | 'success' | 'failed'
}

interface IAction {
  type: string
  payload: any
}

const initialState: IState = {
  todos: [],
  status: 'fetching'
}

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        status: 'fetching'
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        status: 'success',
        todos: action.payload
      }
    case FETCH_TODO_FAILED:
      return {
        ...state,
        status: 'failed'
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload)]
      }
    case CHECK_TODO:
      const items = state.todos.map(item => {
        if (item.id === action.payload.id) {
          item.checked = action.payload.checked
        }
        return item
      })
      return {
        ...state,
        todos: items
      }
    default:
      return state
  }
}

export default reducer
