import React, { useImperativeHandle, forwardRef, useState, useRef, useEffect } from 'react';
 
const Modal = forwardRef(({ children }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
 
  useImperativeHandle(ref, () => ({
    open: () => setIsVisible(true),
    close: () => setIsVisible(false),
  }));
 
  useEffect(() => {
    if (isVisible) {
      modalRef.current.focus();
    }
  }, [isVisible]);
 
  if (!isVisible) {
    return null;
  }
 
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg relative" ref={modalRef} tabIndex="-1" onClick={(e) => e.stopPropagation()}>
        <button className="absolute h-[10px] top-2 right-2 text-gray-600 hover:text-gray-900" onClick={() => setIsVisible(false)}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
});
 
export default Modal;