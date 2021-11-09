import {  useState } from "react";
import PropTypes from 'prop-types';
import ModalWin from "../Modal/Modal.jsx";
const ImageGalleryItem = ({id, src, alt, largeImageURL}) => {
    const [isModalOpen, setIsModalOpen]=useState(false)
    const onToggleModal = () => {
        setIsModalOpen((!isModalOpen))
    };
    
          return (
        
              <li className="ImageGalleryItem"  id={id}>
            <img src={src} alt={ alt}  onClick={ onToggleModal} className="ImageGalleryItem-image" />
         {isModalOpen && <ModalWin onModalClose={onToggleModal} hits={largeImageURL}/>}
        </li >
 
    )
    
}
 ImageGalleryItem.propTypes = {
     alt: PropTypes.string,
     id: PropTypes.number,
     largeImageURL: PropTypes.string,
     src: PropTypes.string,
             
};

export default ImageGalleryItem;