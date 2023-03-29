import React from 'react'
import { Error, Text } from '../components'
import { useGetListOfCountryQuery } from '../app/services/newsApi'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { unRegisterModal } from '../app/features/appSlice'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { Desktop, MobileTablet } from './responsive'
import { useAppDispatch } from '../app/hooks'

const Menu = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, isError } = useGetListOfCountryQuery('')

  function closeMenuMobile(): void {
    dispatch(unRegisterModal())
  }

  return (
    <nav className="flex flex-col desktop:mt-20 pl-2 h-max">
      {isError && <Error />}

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4">
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
          <Skeleton height="100%" width={'80%'} />
        </div>
      ) : (
        <div className="h-screen grid mobile:grid-cols-4 tablet:grid-cols-5 gap-1 grid-cols-1">
          {data?.map((countryName: string) => (
            <Link
              className="hover:bg-lightgray pl-2"
              to={`country/${countryName}`}
              key={countryName}
              onClick={closeMenuMobile}>
              <MobileTablet>
                <div>
                  <Text className="uppercase pb-1">{countryName}</Text>
                  <span
                    className={`fi fi-${countryName} fis mobile:text-5xl text-6xl`}></span>
                </div>
              </MobileTablet>

              <Desktop>
                <div className="flex items-center">
                  <span className={`fi fi-${countryName} fis text-3xl`}></span>
                  <Text className="uppercase pb-1 pl-2">{countryName}</Text>
                </div>
              </Desktop>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Menu
