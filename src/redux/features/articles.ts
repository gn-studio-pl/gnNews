import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description?: any;
  url: string;
  urlToImage?: any;
  publishedAt: string;
  content?: any;
}

export interface articlesProps {
  loading: boolean;
  articles: Article[];
  error: string | undefined;
  articlesNumber: number;
}

const initialState: articlesProps = {
  loading: false,
  articles: [],
  error: "",
  articlesNumber: 0,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (country: string | undefined) => {
    return axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => res.data.articles);
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setNumberOfArticles: (state, action: PayloadAction<number>) => {
      state.articlesNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = true;
      state.articles = [];
      state.error = action.error.message;
    });
  },
});

export const { setNumberOfArticles } = articlesSlice.actions;
export default articlesSlice.reducer;

export const selectArticles = (state: RootState) => state.articles.articles;
