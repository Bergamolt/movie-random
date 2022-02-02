import { useState } from 'react'

export const useShowModal = () => {
  const [ show, setShow ] = useState(false)

  const onShow = () => setShow(true)

  const onHide = () => setShow(false)

  return { show, onShow, onHide }
}