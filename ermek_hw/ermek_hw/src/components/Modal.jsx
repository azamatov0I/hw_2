import React from 'react';
import Input from './Input';

function Modal(props) {
  const { isOpen, onClose } = props;

  const handleInputChange = (value) => {
    console.log(value); // do something with the input value
  };

  return (
    <div className={isOpen ? 'modal open' : 'modal'}>
      <Input
        name="modalInput"
        placeholder="Enter some text"
        onChange={handleInputChange}
      />
      <button onClick={onClose}>Close modal</button>
    </div>
  );
}

export default Modal;
