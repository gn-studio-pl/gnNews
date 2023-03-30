import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useImageLoad } from '../hooks'

interface IProps {
  src: string
  title: string
}

const Image: FC<IProps> = ({ src, title }) => {
  const [isImage] = useImageLoad(src)

  return !isImage ? (
    <Skeleton height={'100%'} width={'100%'} />
  ) : (
    <img className="w-full" src={src} alt={title} />
  )
}

export default Image
