import React from 'react'
import { useGetListOfCountryQuery } from '../app/services/newsApi'
import { Menu, TextBold } from '../components'

const SideBar = () => {
  const { data } = useGetListOfCountryQuery('')

  return (
    <aside className="w-60 fixed top-[60px] overflow-y-auto h-[calc(100vh-60px)]">
      {data && (
        <div className="bg-white h-20 fixed z-50 flex items-center">
          <TextBold>News from country</TextBold>
        </div>
      )}

      <Menu />
    </aside>
  )
}

export default SideBar
