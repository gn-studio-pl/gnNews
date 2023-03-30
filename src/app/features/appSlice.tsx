import { createSlice } from '@reduxjs/toolkit'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { NApi } from '../services/newsApi.interface'

export interface IApp {
  activeModalId: number | null
  openedArticle: NApi.IArticle | null
  totalArticles: number | null
  contentView: TTypeView
}

export type TTypeView = 'list' | 'grid'

const initialState: IApp = {
  activeModalId: null,
  openedArticle: null,
  totalArticles: null,
  contentView: 'grid'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    registerModal: (state, action: { payload: number }) => {
      const id = action.payload
      disableBodyScroll(document.body)
      return {
        ...state,
        activeModalId: id
      }
    },
    unRegisterModal: (state) => {
      enableBodyScroll(document.body)
      return {
        ...state,
        activeModalId: null
      }
    },
    saveOpenedArticle: (state, action: { payload: NApi.IArticle }) => {
      return {
        ...state,
        openedArticle: action.payload
      }
    },
    setListContentView: (state) => {
      return {
        ...state,
        contentView: 'list'
      }
    },
    setGridContentView: (state) => {
      return {
        ...state,
        contentView: 'grid'
      }
    },
    setTotalArticles: (state, action: { payload: number }) => {
      return {
        ...state,
        totalArticles: action.payload
      }
    }
  }
})

export const appData = {
  getActiveModal: (state: { app: IApp }) => state.app.activeModalId,
  getArticle: (state: { app: IApp }) => state.app.openedArticle,
  getTotalArticles: (state: { app: IApp }) => state.app.totalArticles,
  getContentView: (state: { app: IApp }) => state.app.contentView
}

export const appActions = appSlice.actions
export const {
  registerModal,
  unRegisterModal,
  setListContentView,
  setGridContentView,
  saveOpenedArticle,
  setTotalArticles
} = appSlice.actions

export default appSlice.reducer
