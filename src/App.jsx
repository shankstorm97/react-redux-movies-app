import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);
  return <div>App</div>;
}

export default App;
