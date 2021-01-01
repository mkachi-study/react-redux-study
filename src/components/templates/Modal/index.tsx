import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  elementId?: string
  children?: React.ReactNode
  onBackClick?(event: React.SyntheticEvent<HTMLDivElement>): void
}

const Modal: React.FC<IProps> = ({ className, elementId = 'modal', onBackClick = () => {}, children }) => {
  const classProps = classNames(className, styles['default'])
  const target = document.getElementById(elementId)

  return ReactDOM.createPortal(
    <div className={styles['background']} onClick={onBackClick}>
      <div className={classProps}>{children}</div>
    </div>,
    target
  )
}

export default Modal
