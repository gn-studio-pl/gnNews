import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams } from 'react-router-dom'
import { appData, setTotalArticles } from '../app/features/appSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useGetTopHeadlinesByCountryQuery } from '../app/services/newsApi'
import { Error } from '../components'
import { ContentData, ContentHeading } from '../features/content'

const DEFAULT_COUNTRY = 'us'

const Content = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { currentData, isError, isLoading } = useGetTopHeadlinesByCountryQuery(
    id || DEFAULT_COUNTRY
  )
  const typeContentView = useAppSelector(appData.getContentView)

  const gridViewTiles =
    'grid mobile:grid-cols-1 tablet:grid-cols-2 gap-8 desktop:grid-cols-3'
  const gridViewList = 'grid gap-4 grid-cols-1'
  const viewClasses = typeContentView === 'grid' ? gridViewTiles : gridViewList

  const heightSkeleton = typeContentView === 'grid' ? '15rem' : '4rem'

  useEffect(() => {
    saveTotalArticles()
  }, [currentData])

  function saveTotalArticles(): void {
    if (currentData) dispatch(setTotalArticles(currentData.articles.length))
  }

  return (
    <main className="p-6 mobile:px-0 tablet:px-0 desktop:ml-60 min-h-[50vh] desktop:border-l-lightgray desktop:border-l desktop:border-solid">
      {isError && <Error />}

      {isLoading && (
        <div className={viewClasses}>
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
          <Skeleton width={'100%'} height={heightSkeleton} />
        </div>
      )}

      {currentData && (
        <>
          <ContentHeading id={id || DEFAULT_COUNTRY} />
          <div className={viewClasses}>
            <ContentData data={currentData} typeContentView={typeContentView} />
          </div>
        </>
      )}
    </main>
  )
}

export default Content
