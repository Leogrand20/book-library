import { useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import { clearError } from '../../redux/slices/errorSlice'
import { selectError } from '../../redux/selectors/error-selectors'
import { useAppDispatch, useAppSelector } from '../../redux/store'

export const Error = () => {
  const errorMessage = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  )
}
