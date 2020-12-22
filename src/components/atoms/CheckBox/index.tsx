import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { FaCheck } from 'react-icons/fa'

interface IProps {
  className?: string
  checked: boolean
  onChange?(event: React.FormEvent<HTMLInputElement>): void
}

const CheckBox: React.FC<IProps> = ({ className, checked, onChange = () => { } }) => {
  const classProps = classNames(className, styles['default'])
  return <span className={classProps}>
    <span className={styles['box']}>
      {checked && <FaCheck className={styles['icon']} />}
    </span>
    <input className={styles['input']} type={'checkbox'} checked={checked} onChange={onChange} />
  </span>
}

export default CheckBox
