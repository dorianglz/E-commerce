import React from "react";
import axios from "axios";
import Catalog from "../component/catalog/catalog";
import HeaderImage from "../component/headerImg/headerImg";

const Index = ({ data }) => {
  const indexStyle = {
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    padding: "0 100px",
    gap: '30px',
  };

  return (
    <div style={indexStyle}>
      <HeaderImage />
      <Catalog data={data} length={8}/>
    </div>
  );
}

export const getStaticProps = async () => {
    
  const options = {
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {
        limit: '10',
        brand: 'Nike',
      },
      headers: {
          'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
          'X-RapidAPI-Key': '76c50f9cacmsha755bad15080406p16c4bejsnbd601e1a346b'
      }
  };
  
  const res = await axios.request(options).then(function (response) {
      return response.data;
  }).catch(function (error) {
      console.error(error);
  });

  return {
      props: { data: res },
  };
};

export default Index;