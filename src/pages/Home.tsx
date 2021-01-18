import React, { useEffect, useState } from 'react'

import TodoList from '../components/organisms/TodoList'
import AddPanel from '../components/organisms/AddPanel'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from 'src/store'
import { fetchTodo, addTodo, removeTodo, checkTodo } from '../reducers/TodoList'
import Modal from '../components/templates/Modal'

const Home = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const { status, items } = useSelector((state: StoreState) => ({
    status: state.todoList.status,
    items: state.todoList.todos
  }))

  useEffect(() => {
    dispatch(fetchTodo())
  }, [])

  return (
    <>
      {status === 'success' ? (
        <>
          <TodoList items={items} onRemove={item => dispatch(removeTodo(item.id))} onChange={item => dispatch(checkTodo(item.id, !item.checked))} />
          <AddPanel
            subject={input}
            onChange={event => setInput(event.currentTarget.value)}
            onAppend={() => {
              if (input === '') {
                return
              }

              dispatch(
                addTodo({
                  id: Date.now().toString(),
                  checked: false,
                  subject: input
                })
              )
              setInput('')
            }}
          />
        </>
      ) : (
        <Modal>{status === 'failed' ? '로드 실패' : '로딩중'}</Modal>
      )}
    </>
  )
}

export default Home
