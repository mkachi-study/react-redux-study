import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  element?: HTMLElement
  children?: React.ReactNode
}

const Modal: React.FC<IProps> = ({ className, element = document.getElementById('modal'), children }) => {
  const classProps = classNames(className, styles['default'])

  return ReactDOM.createPortal(
    <div className={styles['background']}>
      <div className={classProps}>{children}</div>
    </div>,
    element
  )
}

export default Modal
