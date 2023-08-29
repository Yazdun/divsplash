import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  as?: React.ElementType
  className?: string
}

export const Card: React.FC<CardProps> = ({
  as: Element = 'div',
  children,
  className,
  asChild,
  ...rest
}) => {
  if (asChild) {
    // If rendering as child, pass props to children
    return React.cloneElement(children as React.ReactElement, {
      ...rest,
      className: clsx(
        'p-5 bg-white border-2 rounded-md border-zinc-100',
        className,
      ),
    })
  }

  return (
    <Element
      {...rest}
      className={clsx(
        'p-5 bg-white border-2 rounded-md border-zinc-100',
        className,
      )}
    >
      {children}
    </Element>
  )
}
