import React from 'react'

import Container from '../components/layouts/Container'
import TodoList from '../components/organisms/TodoList'

const Home = () => {
  return (
    <>
      <TodoList
        items={[
          { checked: true, subject: 'hello1' },
          { checked: false, subject: 'hello2' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: true, subject: 'hello5' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: true, subject: 'hello5' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: true, subject: 'hello5' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: true, subject: 'hello5' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: false, subject: 'hello3' },
          { checked: true, subject: 'hello4' },
          { checked: true, subject: 'hello5' },
          { checked: true, subject: 'hello5' },
          { checked: false, subject: 'hello6' }
        ]}
      />
      <p>
        <p>{'test1'}</p>
        <p>{'test2'}</p>
        <p>{'test3'}</p>
      </p>
    </>
  )
}

export default Home
