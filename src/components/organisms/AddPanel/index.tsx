import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Flex from '../../layouts/Flex'
import AddButton from '../../molecules/AddButton'
import ItemInput from '../../molecules/ItemInput'

interface IProps {
  className?: string
  subject: string
  onChange?(event: React.FormEvent<HTMLInputElement>): void
  onAppend?(): void
}

const AddPanel: React.FC<IProps> = ({ className, subject, onChange = () => {}, onAppend = () => {} }) => {
  const [open, setOpen] = useState(false)
  const classProps = classNames(className, styles['default'], open ? styles['popup'] : '')

  return (
    <Flex className={classProps} element={'nav'} direction={'column'} align={'center'} justify={'center'}>
      {open && <ItemInput className={styles['input']} subject={subject} onChange={event => onChange(event)} onAppend={onAppend} />}
      <AddButton className={styles['button']} toggle={open} onClick={() => setOpen(!open)} />
    </Flex>
  )
}

export default AddPanel
