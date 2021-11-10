import {  useEffect } from 'react';
import PropTypes from 'prop-types';
const ModalWin = ({ onModalClose, hits }) => {
  const handleKeyDown = e => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      onModalClose()
    }
  }
  const closeByKey = (e) => {
    e.code === 'Escape' && onModalClose()
  }
 
  useEffect(() => {
    window.addEventListener('keydown', closeByKey)
    const body = document.querySelector('body');
    body.style.overflow = "hidden";
    return () => {window.removeEventListener('keydown', closeByKey) }
  }, [ closeByKey ])

 
    return (
      <div className="Overlay" onClick= {handleKeyDown} >
        <div className="Modal"  >
          <img src={hits} alt={ hits} />
        </div>
      </div>
    )
  
};
ModalWin.propTypes = {
    hits: PropTypes.string,
    onModalClose: PropTypes.func,
};
export default ModalWin;