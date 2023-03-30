import React, { FC } from 'react'
import { TTypeView } from '../../app/features/appSlice'
import { NApi } from '../../app/services/newsApi.interface'
import { NewsTeaser } from '../news'

interface IContentDataProps {
  data: NApi.ITopHeadlineByCountry
  typeContentView: TTypeView
}

const ContentData: FC<IContentDataProps> = ({ data, typeContentView }) => {
  return (
    <>
      {data?.articles.map((article, index) => (
        <NewsTeaser
          key={index}
          article={article}
          contentView={typeContentView}
        />
      ))}
    </>
  )
}

export default ContentData
