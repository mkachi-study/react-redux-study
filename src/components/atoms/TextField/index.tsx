import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  error?: boolean
  errorText?: string
  placeholder?: string
  value?: string
  type?: 'text' | 'password'
  onChange?(event: React.SyntheticEvent<HTMLInputElement>)
}

const TextField: React.FC<IProps> = ({ className, error = false, errorText = '', placeholder = '', value = '', type = 'text', onChange = () => {} }) => {
  const [isFocus, setFocus] = useState(false)

  const classProps = classNames(className, styles['default'])
  const lineProps = classNames(styles['line-normal'], isFocus ? styles['line-focus'] : '', error ? styles['line-error'] : '')
  const inputProps = classNames(styles['input'], error ? styles['input-error'] : styles['input-normal'])
  const errorProps = classNames(styles['error-text'], errorText !== '' && error ? styles['error-text-show'] : '')

  return (
    <div className={classProps}>
      <span className={lineProps}>
        <input
          className={inputProps}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </span>
      <span className={errorProps}>{errorText}</span>
    </div>
  )
}

export default TextField
