import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  IArticle,
  useGetTopHeadlinesByCountryQuery
} from '../app/services/newsApi'
import { Skeleton } from '../components'

const DEFAULT_COUNTRY = 'us'

const Content = () => {
  const { id } = useParams()
  const { currentData, isFetching, isError } = useGetTopHeadlinesByCountryQuery(
    id || DEFAULT_COUNTRY
  )

  const onClickShowArticle = (article: IArticle): void => {
    console.log('article:', article)
  }

  function generateArticles(): React.ReactNode {
    return currentData?.articles.map((article) => (
      <button
        type="button"
        onClick={() => onClickShowArticle(article)}
        key={article.url}
        style={{ width: 200, height: 200 }}>
        {article.author}
      </button>
    ))
  }

  const renderArticles = generateArticles()

  return (
    <div className="page-content">
      {!currentData?.articles ? <Skeleton /> : renderArticles}
    </div>
  )
}

export default Content
