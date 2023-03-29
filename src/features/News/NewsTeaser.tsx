import React, { FC } from 'react'
import {
  registerModal,
  saveOpenedArticle,
  TTypeView
} from '../../app/features/appSlice'
import { useAppDispatch } from '../../app/hooks'
import { NApi } from '../../app/services/newsApi.interface'
import { MODALS } from '../../constant/modalsId'
import { getDateFromString } from '../../helpers/dateHelpers'
import NewsTeaserRow from './NewsTeaserRow'
import NewsTeaserTile from './NewsTeaserTile'

interface INewsTeaserProps {
  article: NApi.IArticle
  contentView: TTypeView
}

const NewsTeaser: FC<INewsTeaserProps> = ({ article, contentView }) => {
  const publicationTime = getDateFromString(article.publishedAt)

  const dispatch = useAppDispatch()
  const onClickShowArticle = (article: NApi.IArticle): void => {
    dispatch(registerModal(MODALS.id.newsCard))
    dispatch(saveOpenedArticle(article))
  }

  // list view
  if (contentView === 'list')
    return (
      <NewsTeaserRow
        article={article}
        onClick={() => onClickShowArticle(article)}
        publicationTime={publicationTime}
      />
    )

  // default view: grid
  return (
    <NewsTeaserTile
      article={article}
      onClick={() => onClickShowArticle(article)}
      publicationTime={publicationTime}
    />
  )
}

export default NewsTeaser
