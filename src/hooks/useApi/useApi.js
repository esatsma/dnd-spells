import axios from "axios";
import { useContext } from "react";
import configContext from "../../context/config/config";

export const useAPI = () => {
  const { config } = useContext(configContext);

  const instance = axios.create({
    baseURL: config.apiBase,
  });

  return instance;
};

export default useAPI;
