import React from 'react'
import ExpandIcon from '../img/expand.svg'
import HeartIcon from '../img/heart.svg'

const Image = ({ link, setModal, setSelected }) => {
    return (
        <div className="image__box">
            <img src={link} alt="Landscape Photo" className="image" />
            <div
                className="image__elements expand-icon"
                onClick={
                    () => {
                        setModal(true)
                        setSelected(link)
                    }
                }
            >
                <img src={ExpandIcon} alt="expand icon"></img>
            </div>
            <div className="image__elements footer">
                <div className="title">
                    <h4 className="title--main">Image Title</h4>
                    <p className="title--sub">by photographer</p>
                </div>
                <button className="btn btn--outline-primary">
                    <img src={HeartIcon} alt="Like Icon" />
                    Like
                </button>
            </div>
        </div>
    )
}

export default Image
