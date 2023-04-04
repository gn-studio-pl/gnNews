import axios from "axios";
import { API_KEY, API_URL } from "../config/API.config";
import { locale } from "../config/translator.config";
import { ArticlesSuccesResponse } from "../types/responses.types";
import { ArticlesQueryParams } from "../types/types";

class ArticlesService {
  private readonly defaultParams: ArticlesQueryParams = {
    country: locale.substring(0, 2),
    pageSize: 10,
    page: 1,
  };

  public async getAllArticlesForCountry(
    params: ArticlesQueryParams
  ): Promise<ArticlesSuccesResponse> {
    return await axios
      .get<ArticlesSuccesResponse>(API_URL + `/top-headlines`, {
        params: {
          ...this.defaultParams,
          ...params,
        },
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => res.data);
  }
}

export default ArticlesService;
