import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { FaPlus } from 'react-icons/fa'

import Flex from '../../layouts/Flex'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'

interface IProps {
  className?: string
  subject: string
  onChange?(event: React.FormEvent<HTMLInputElement>): void
  onAppend?(): void
}

const ItemInput: React.FC<IProps> = ({ className, subject, onChange = () => {}, onAppend = () => {} }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <Flex className={classProps} direction={'row'}>
      <TextField type={'text'} error={subject === ''} errorText={'할 일을 입력해주세요'} value={subject} onChange={onChange} />
      <Button className={styles['add-button']} variant={'icon'} onClick={onAppend}>
        <FaPlus />
      </Button>
    </Flex>
  )
}

export default ItemInput
