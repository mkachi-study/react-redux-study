import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { MdClose } from 'react-icons/md'

import Button from '../../atoms/Button'
import CheckBox from '../../atoms/CheckBox'

import Flex from '../../layouts/Flex'

interface IProps {
  className?: string
  subject: string
  checked: boolean
  onChange?(event: React.FormEvent<HTMLInputElement>): void
  onRemove?(): void
}

const TodoItem: React.FC<IProps> = ({ className, subject, checked = false, onChange = () => { }, onRemove = () => { } }) => {
  const classProps = classNames(className, styles['default'])
  const subjectProps = classNames(styles['subject'], checked ? styles['subject-check'] : '')

  return <Flex element={'section'} className={classProps}>
    <CheckBox checked={checked} onChange={onChange}/>
    <span className={subjectProps}>
      {subject}
    </span>
    <Button variant={'icon'} onClick={onRemove}>
      <MdClose/>
    </Button>
  </Flex>
}

export default TodoItem
