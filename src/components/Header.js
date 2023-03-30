import '../css/header.css';
import '../css/modal-header.css';

import { useTranslation } from "react-i18next";
import changeLanguage from '../languages'

import { useDispatch, useSelector } from "react-redux";
import { viewChange } from "../store";
import { useState } from 'react';
import {FiList, FiGrid} from 'react-icons/fi';

import Modal from './Modal';

function Header() {
    const articlesContainer = document.querySelector('.articles-container');

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const showIconGrid = useSelector((state) => {
        return state.icon;
      });

    const handleChangeView = () => {
        dispatch(viewChange())
        articlesContainer.classList.toggle('articles-container--grid')
    }

    const handleOpen = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionButton = <button className='btn-general__bg btn-general modal-btn' onClick={handleClose}>{t("btn_close")}</button>

    const modal = <Modal onClose={handleClose} actionButton={actionButton}><p className='modal-header-box__text'>
        <strong>{t("popup_text_strong")}</strong>{t("popup_text")}</p></Modal>

    return (
        <header className="header-wrapper">
            {showModal && modal}
            <h1 className='header-title'><a href="/">{t("title")}</a></h1>
                {changeLanguage()}
            <div className='header-btns'>
                <button className=' btn-general__bg btn-general header-btns__item' onClick={handleOpen}>{t("btn_popup_open")}</button>
                {articlesContainer && <button className='btn-general header-btns__item' onClick={handleChangeView}>{(showIconGrid && <FiGrid/>) || <FiList/>}</button>}
            </div>
        </header>
    )
}

export default Header;