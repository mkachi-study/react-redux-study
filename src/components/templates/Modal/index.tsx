import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  elementId?: string
  children?: React.ReactNode
}

const Modal: React.FC<IProps> = ({ className, elementId = 'modal', children }) => {
  const classProps = classNames(className, styles['default'])
  const target = document.getElementById(elementId)

  return ReactDOM.createPortal(
    <div className={styles['background']}>
      <div className={classProps}>{children}</div>
    </div>,
    target
  )
}

export default Modal
