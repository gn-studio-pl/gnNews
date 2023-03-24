import { useGetAllNewsQuery, useGetCountryNewsQuery } from '../store/newsApi'
import Header from 'containers/Header/Header'
import SideMenu from 'containers/Sidebar/Sidebar'
import MainContent from 'containers/MainContent/MainContent'
import Footer from 'containers/Footer/Footer'

const HomePage:React.FC = () => {
  const { data: allNews, error, isLoading } = useGetAllNewsQuery()
  const { data: countryNews } = useGetCountryNewsQuery('pl')

  console.log(allNews)
  console.log(countryNews)

  return (
    <div>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage