import { isProxy, toRaw } from 'vue';
import axios from 'axios';

const default_url = 'https://api.github.com/';

export default async function ({
  url,
  method = 'get',
  params = {},
  handleError = () => {},
}) {
  try {
    const parsed_params = new URLSearchParams({ ...params })
    const data = await axios[method](`${default_url}${url}`, { params: parsed_params })

    return { ...data };
  } catch (err) {
    handleError();

    return err;
  }
}