import { apiUrl } from "../APIConstant";
import axios from "axios";

export const getCategories = () => {
   return axios.get(apiUrl + "categories");
};
