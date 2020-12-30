import axios from 'axios';

export default {
  send: async <ResponseType>(url: string, req: any = {}, type = 'get'): Promise<ResponseType> => {
    const defaultUrl = 'https://api.github.com/';
    const requestUrl = defaultUrl + url;

    return type === 'post' ? axios.post(requestUrl, req) : axios.get(requestUrl, req);
  },
};
