import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Adidas Ultraboost",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/2/22-08-2018_adidas_ultraboost40_white_bb6168_ka_1.jpG",
      ],
      description: "White",
      content:
        "Comfort is in the Ultraboost’s DNA, and the latest from adidas continues to prove that. It’s crafted from soft white Primeknit — a partially recycled variant, though, that repurposes ocean plastic — and supported with synthetic three stripe caging. Repsonsive boost™ cushioning forms the midsole, as always, for unrivalled comfort.",
    },
    {
      _id: "2",
      title: "Nike AF1",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/3/0/30-11-2020_jm_CI0919-100_m1_1.jpg",
      ],
      description: "White / Black",
      content: "Nice shoes.",
    },
    {
      _id: "3",
      title: "Common Projects",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
      ],
      description: "White",
    },
    {
      _id: "4",
      title: "Nike Air Max 95 Essential",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/0/20-11-2020_SI_CT1268-100_1_1.jpg",
      ],
      description: "White",
    },
    {
      _id: "5",
      title: "New Balance",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-11-2020_jm_M990GL5_1_1.jpg",
      ],
      description: "Gray",
    },
    {
      _id: "6",
      title: "Saint Laurent",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-10-2020_jd_603223-1jz10-9030_m7.jpg",
      ],
      description: "White",
    },
  ]);

  const value = {
    products: [products, setProducts],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
