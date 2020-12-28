import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  variant?: 'text' | 'icon' | 'none'
  children?: React.ReactNode
  onClick?(event: React.FormEvent<HTMLButtonElement>): void
}

const Button: React.FC<IProps> = ({ className, variant = 'text', children, onClick = () => {} }) => {
  const classProps = classNames(className, styles['default'], styles[variant])
  return (
    <button className={classProps} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
