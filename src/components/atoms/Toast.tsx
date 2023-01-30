import { useEffect, useState } from 'react'
import { StatusType } from '_types/index'

type ToastProps = {
  status: StatusType
  isShowToast?: boolean
  message?: string
}

const STATUS_MAP = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

function Toast({
  status,
  isShowToast = true,
  message = 'New message arrived.',
}: ToastProps) {
  const alertColor = STATUS_MAP[status]
  const [asyncShow, setAsyncShow] = useState(isShowToast)

  useEffect(() => {
    setAsyncShow(isShowToast)

    if (!isShowToast) return
    const handleAsyncShow = () => {
      setTimeout(() => {
        setAsyncShow(false)
      }, 3000)
    }
    handleAsyncShow()
  }, [isShowToast])

  if (!asyncShow) return null
  return (
    <div className="toast">
      <div className={`alert ${alertColor}`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  )
}

export default Toast
