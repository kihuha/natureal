import React from 'react'


const Modal = ({ modal, setModal, selected, setSelected, images }) => {
    const handleImageSelect = (e) => {
        setSelected(e.target.currentSrc)
        document.getElementById(e.target.id).scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
          });
    }

    return (
        <div className={`modal ${modal && 'show'}`}>
            <div className={`modal__backdrop ${modal && 'show'}`} onClick={() => setModal(false)}></div>
            <div className="modal__content">
                <img src={selected} alt="Image" className={`modal__img ${modal && 'show'}`} />

                <div className="modal__slider" id="modalSlider">
                    {
                        images.map(
                            (image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="Photograph"
                                id={index}
                                className={`modal__slider-card ${selected == image && 'active'}`}
                                onClick={(e) => handleImageSelect(e)}
                            />)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal
