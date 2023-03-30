import { urls } from '../constants/urls'
import { INews } from '../models/INews'
import { api_key } from '../constants/apikey';
import { IApiResponse } from '../models/IApiResponse';

export const api = {
    getNews: async (country?: string): Promise<IApiResponse> => {
        let url = urls.API_BASE_URL + "?";
        if (country) {
            url = url + 'country=' + country + "&";
        }
        url = url + 'api_key=' + api_key
        return new Promise<IApiResponse>(async (resolve, reject) => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                resolve(data as IApiResponse);
            } catch {
                reject();
            }
        })
    }
};