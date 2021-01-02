import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { ITodo } from '../../../models/ITodo'
import Flex from '../../layouts/Flex'

import TodoItem from '../../molecules/TodoItem'

interface IProps {
  className?: string
  items: ITodo[]
}

const TodoList: React.FC<IProps> = ({ className, items }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Flex className={classProps} direction={'column'} wrap={'no-wrap'} overflow={'scroll'}>
      {items.map((item, index) => {
        return (
          <TodoItem
            key={index}
            subject={item.subject}
            checked={item.checked}
            onRemove={() => {
              console.log('onRemove')
            }}
            onChange={() => {
              console.log('onChange')
            }}
          />
        )
      })}
    </Flex>
  )
}

export default TodoList
