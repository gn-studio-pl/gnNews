import React from 'react'
import { Link } from 'react-router-dom'
import { useGetListOfCountryQuery } from '../app/services/newsApi'
import { Skeleton } from '../components'

const SideBar = () => {
  const { data, isLoading, isError } = useGetListOfCountryQuery('')

  function generateCountryList(): React.ReactNode {
    return data?.map((countryName: string) => (
      <Link to={`country/${countryName}`} key={countryName}>
        {countryName}
      </Link>
    ))
  }

  const renderCountryList = generateCountryList()

  return (
    <div className="side-bar">
      {isLoading ? <Skeleton /> : renderCountryList}
    </div>
  )
}

export default SideBar
