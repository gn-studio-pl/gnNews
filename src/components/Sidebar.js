import { useTranslation } from "react-i18next";

import { Outlet, NavLink } from "react-router-dom";

function Sidebar({getCountry}) {
    const { t } = useTranslation();
    const altText = 'flaga kraju ';
    const countryInUrl = '/country/'

    const links = [
        {label: '', to: '/'},
        {label: `${t("france")}`, to: `${countryInUrl}francja`, img: 'https://newsapi.org/images/flags/fr.svg', country: 'fr'},
        {label: `${t("italy")}`, to: `${countryInUrl}wlochy`, img: 'https://newsapi.org/images/flags/it.svg', country: 'it'},
        {label: `${t("malaysia")}`, to: `${countryInUrl}malezja`, img: 'https://newsapi.org/images/flags/my.svg', country: 'my'},
        {label: `${t("singapore")}`, to: `${countryInUrl}singapur`, img: 'https://newsapi.org/images/flags/sg.svg', country: 'sg'},
        {label: `${t("usa")}`, to: `${countryInUrl}usa`, img: 'https://newsapi.org/images/flags/us.svg', country: 'us'},
        {label: `${t("canada")}`, to: `${countryInUrl}kanada`, img: 'https://newsapi.org/images/flags/ca.svg', country: 'ca'}
    ]

    const renderedLinks = links.map(({country, label, to, img }) => {
      return <NavLink onClick={() => getCountry(country)} key={label} to={to}>{img && <img src={img} alt={altText + label}></img>} {label}</NavLink>
  })

  return (
    <section className="main-content">
      <nav className="main-content__nav">
        {renderedLinks}
      </nav>
      <div className="main-content__articles">
        <Outlet />
      </div>
    </section>
  );
}

export default Sidebar;
