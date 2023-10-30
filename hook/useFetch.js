import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]); // создаю состояния (data - для хранения данных, полученных после выполнения запроса)
  const [isLoading, setIsLoading] = useState(); // isLoading - для отслеживания состояния выполнения запроса
  const [error, setError] = useState(null); // для отслеживания ошибок

  const axios = require("axios");

  // Это взято из RapidAPI
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    params: { ...query },
  };

  //   fetchData - асинхронная ф-ия, которая выполняет запрос к серверу. Она устанавливает флаг isLoading в true перед отправкой запроса. Если запрос успешно выполнен, данные сохраняются в состоянии data, и флаг isLoading устанавливается в false. Если ошибка, то isLoading - false, и состояние сохраняется в error.
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect используется, чтобы выполнить запрос при монтировании компонента. Этот гарантирует, что запрос будет выполнен, когда компонент будет включен.
  useEffect(() => {
    fetchData();
  }, []);
  // Это ф-ия, которая позволяет повторно выполнить запрос. Устанавливает флаг isLoading в true и вызывает fetchData, чтобы выполнить запрос повторно
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  // Возвращаю объект с данными. data - полученные данные. isLoading - флаг, указывающий на состояние выполнения запроса. error - информация об ошибке. refetch - ф-ия для повторного выполнения запроса
  return { data, isLoading, error, refetch };
};
