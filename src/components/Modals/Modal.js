import React,{ useContext } from 'react';
import styles from './style.module.scss';
import ReactDOM from 'react-dom';

function MyModal(props) {

  const{
    pedido,
    onClose
  } = props;

  console.log(pedido);
  
  // const context = useContext();

  const node = (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <h1 onClick={onClose}>Modal</h1>
      </div>
    </div>
  );

  return ReactDOM.createPortal(node, document.getElementById('modal-root'));
}

export default MyModal;