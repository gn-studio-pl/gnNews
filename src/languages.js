
import i18next from "i18next";

const changeLanguage = () => {
    const btnLanguageChange = document.querySelectorAll('.select-language__btn')
    const btnSwicth = document.querySelector('.select-language-switch')
    let cookieValue = document.cookie.split('=')[1]

    const languages = [
        {
            code: 'pl',
            name: 'polski'
        },
        {
            code: 'en',
            name: 'english'
        }
    ]

    btnLanguageChange.forEach(btn => {
        if (btn.id === cookieValue) {
            btn.classList.add('select-language__btn--active')
            btnSwicth.classList.add('select-language-switch--change')
        } else if (btn.id !== cookieValue) {
            btn.classList.remove('select-language__btn--active')
            btnSwicth.classList.remove('select-language-switch--change')
        }
    })

    const selectAppLanguage = ({code}) => {
        i18next.changeLanguage(code)
        }

    const selectLanguage = <div className="select-language"> <div className="select-language-switch"></div> {
        languages.map(({code, name}) => {
        return <button key={code} id={code} className="select-language__btn" onClick={() => selectAppLanguage({code})}>{name}</button>
        })
     } </div>
       
     return selectLanguage
}

export default changeLanguage;