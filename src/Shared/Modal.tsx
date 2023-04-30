import React from 'react';
import ReactDOM from "react-dom";
interface ModalProp{
    children: React.ReactNode;
}
const Modal:React.FC<ModalProp> = ({children}) => {
  return (
   ReactDOM.createPortal(<div className='bg-[rgba(0,0,0,0.8)] absolute w-full h-full top-0 left-0 flex items-center justify-center  z-50'>{children}</div>, document.getElementById('modal') as HTMLDivElement)
  )
}

export default Modal