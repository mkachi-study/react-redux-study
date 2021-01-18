import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { FaPlus } from 'react-icons/fa'

import Button from '../../atoms/Button'

interface IProps {
  className?: string
  toggle?: boolean
  onClick?(): void
}

const AddButton: React.FC<IProps> = ({ className, toggle = false, onClick = () => {} }) => {
  const classProps = classNames(className, styles['default'], toggle ? styles['toggle'] : '')
  return (
    <Button className={classProps} variant={'none'} onClick={onClick}>
      <FaPlus />
    </Button>
  )
}

export default AddButton
