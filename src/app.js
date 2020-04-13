import React, { Fragment, useState } from 'react'
import './sass/main.scss'

import Image from './components/image'
import Modal from './components/modal'

import Logo from './img/logo.svg'
import Abstract from './img/abstract.svg'
import One from './img/1.jpg'
import Two from './img/2.jpg'
import Three from './img/3.jpg'
import Four from './img/4.jpg'
import Five from './img/5.jpg'
import Six from './img/6.jpg'
import Seven from './img/7.jpg'
import Eight from './img/8.jpg'
import Nine from './img/9.jpg'

const App = () => {
    const images = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine]
    const [selected, setSelected] = useState()
    const [modal, setModal] = useState(false)

    return (
        <Fragment>
            <header className="header container">
                <img src={Logo} alt="Logo" className="header__brand" />

                <div className="header__text-content">
                    <h1 className="header__title">Natureal</h1>
                    <p className="header__text">
                        An album viewing app built using react. The digital album includes an image viewer,
                        a modal for selected images and image preview box within the modal
                    </p>
                </div>

                <img src={Abstract} alt="Abstract Background" className="header__abstract" />
            </header>
            <div className="container-fluid image__content">
                <div className="image__row">
                    <Image setSelected={setSelected} setModal={setModal} link={Three} />
                    <Image setSelected={setSelected} setModal={setModal} link={One} />
                    <Image setSelected={setSelected} setModal={setModal} link={Six} />
                </div>
                <div className="image__row">
                    <Image setSelected={setSelected} setModal={setModal} link={Two} />
                    <Image setSelected={setSelected} setModal={setModal} link={Five} />
                    <Image setSelected={setSelected} setModal={setModal} link={Eight} />
                </div>
                <div className="image__row">
                    <Image setSelected={setSelected} setModal={setModal} link={Seven} />
                    <Image setSelected={setSelected} setModal={setModal} link={Four} />
                    <Image setSelected={setSelected} setModal={setModal} link={Nine} />
                </div>
            </div>
            <Modal
                imgLink={selected}
                modal={modal}
                setModal={setModal}
                selected={selected}
                setSelected={setSelected}
                images={images}
            />
        </Fragment >
    )
}

export default App
