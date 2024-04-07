import axios from "axios";


export const getFilters = async () => {
  return await axios.get('https://api.russpass.ru/search/portal/catalog/filter?catalog=tours-and-routes-catalog', {
    headers: {
      "Content-Language": "ru",
      "Rqid": "3ef2c857-d4b6-47ec-932f-9f7d67e97020"
    }
  }).then(result => {
    return result.data.filters;
  })
    .catch(err => console.error(err));
}
