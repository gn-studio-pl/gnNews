import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { locale } from "../../config/translator.config";
import { delay } from "../../helpers/delay";
import ArticlesService from "../../services/articlesService";
import { RootState } from "../../store";
import {
  ArticlesErrorResponse,
  ArticlesSuccesResponse,
} from "../../types/responses.types";
import { Article, ArticlesQueryParams, ArticlesState } from "../../types/types";

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  focusedArticle: null,
  params: {
    country: locale.substring(0, 2),
    category: undefined,
    page: 1,
    pageSize: 12,
    q: undefined,
  },
  totalResults: 0,
  error: undefined,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    focuseArticle: (state, { payload }: PayloadAction<Article>) => {
      state.focusedArticle = payload;
    },
    updateParams: (state, { payload }: PayloadAction<ArticlesQueryParams>) => {
      state.params = { ...state.params, ...payload };
    },
    closeError: (state) => {
      state.error = initialState.error;
    },
  },
  extraReducers(builder) {
    builder.addCase(getArticles.pending, (state) => {
      state.articles = [];
      state.focusedArticle = null;
      state.params.page = 1;
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      getArticles.fulfilled,
      (state, { payload }: PayloadAction<ArticlesSuccesResponse>) => {
        state.isLoading = false;
        state.articles = payload.articles;
        state.totalResults = payload.totalResults;
      }
    );
    builder.addCase(
      getArticles.rejected,
      (state, { payload }: PayloadAction<ArticlesErrorResponse>) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
    builder.addCase(fetchNextArticles.pending, (state) => {
      state.focusedArticle = null;
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchNextArticles.fulfilled,
      (state, { payload }: PayloadAction<ArticlesSuccesResponse>) => {
        state.isLoading = false;
        payload.articles.forEach((article) => {
          state.articles.push(article);
        });
      }
    );
    builder.addCase(
      fetchNextArticles.rejected,
      (state, { payload }: PayloadAction<ArticlesErrorResponse>) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
  },
});

export const getArticles = createAsyncThunk<
  ArticlesSuccesResponse,
  undefined,
  {
    state: RootState;
    rejectValue: ArticlesErrorResponse;
  }
>("articles/getArticles", async (__, thunkAPI) => {
  const service = new ArticlesService();
  const params = thunkAPI.getState().articles.params;

  //FAKE DELAY FOR LAZY LOADING
  await delay(3000, "");

  let response: ArticlesSuccesResponse = await service
    .getAllArticlesForCountry(params)
    .catch((err: AxiosError) => {
      const responseErr = err.response?.data as ArticlesErrorResponse;
      throw thunkAPI.rejectWithValue(responseErr);
    });

  return response;
});

export const fetchNextArticles = createAsyncThunk<
  ArticlesSuccesResponse,
  undefined,
  {
    state: RootState;
    rejectValue: ArticlesErrorResponse;
  }
>("articles/getMoreArticles", async (__, thunkAPI) => {
  const service = new ArticlesService();
  const params = thunkAPI.getState().articles.params;

  let page = params.page;
  let newParams: ArticlesQueryParams = {
    ...params,
    page: (page = page + 1),
  };

  thunkAPI.dispatch(updateParams(newParams));

  //FAKE DELAY FOR LAZY LOADING
  await delay(3000, "");

  let response: ArticlesSuccesResponse = await service
    .getAllArticlesForCountry(newParams)
    .catch((err: AxiosError) => {
      const responseErr = err.response?.data as ArticlesErrorResponse;
      throw thunkAPI.rejectWithValue(responseErr);
    });

  return response;
});

export const { updateParams, focuseArticle, closeError } =
  articlesSlice.actions;

export default articlesSlice.reducer;
