import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { ITodo } from '../../../models/ITodo'
import Flex from '../../layouts/Flex'

import TodoItem from '../../molecules/TodoItem'

interface IProps {
  className?: string
  items: ITodo[]
  onRemove(item: ITodo): void
  onChange(item: ITodo): void
}

const TodoList: React.FC<IProps> = ({ className, items, onRemove, onChange }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Flex className={classProps} direction={'column'} wrap={'no-wrap'} overflow={'scroll'}>
      {items.map((item, index) => {
        return <TodoItem key={index} subject={item.subject} checked={item.checked} onRemove={() => onRemove(item)} onChange={() => onChange(item)} />
      })}
    </Flex>
  )
}

export default TodoList
