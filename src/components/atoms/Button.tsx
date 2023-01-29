import { ReactNode } from 'react'
import classNames from 'classnames'

type ButtonProps = {
  id?: string
  className?: string
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ id, className, children, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      className={classNames(className, 'btn btn-primary')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
