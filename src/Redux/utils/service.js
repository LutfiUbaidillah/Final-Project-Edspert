import Axios from "axios";

const httpService = Axios.create({
  baseURL: "https://63b7a42f4f17e3a931d89449.mockapi.io/api/v1",
});

export default httpService;
