import React from 'react'

export type TagType = 'div' | 'article' | 'aside' | 'details' | 'figcaption' | 'figure' | 'footer' | 'header' | 'main' | 'mark' | 'nav' | 'section' | 'summary' | 'time'

interface IProps {
  className?: string
  element?: TagType
  children?: React.ReactNode
}

const Semantics: React.FC<IProps> = ({ className, element = 'div', children, ...props }) => {
  const Element = element
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  )
}

export default Semantics
