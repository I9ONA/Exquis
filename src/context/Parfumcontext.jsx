import React, { createContext, useState } from 'react';
import data from '../Data/HomeData';
import BestSellersdata from '../Data/BestSellers';
import ShopsParfumesdata from '../Data/ShopsParfumes.json';
import MenParfumesdata from '../Data/Menparfumes.json';
import WomenParfumesdata from '../Data/Womenparfumes.json';
import signData from '../Data/Sign.json';
import seasondata from '../Data/season.json';
import brandsdata from '../Data/brands.json'

export const Parfumcontext = createContext();

export const ParfumProvider = ({ children }) => {
  const [ImgHome, setImgHome] = useState(data);
  const [BestSellers, setBestSellers] = useState(BestSellersdata);
  const [ShopsParfumes, setShopsParfumes] = useState(ShopsParfumesdata);
  const [MenParfumes, setMenParfumes] = useState(MenParfumesdata);
  const [WomenParfumes, setWomenParfumes] = useState(WomenParfumesdata);
  const [Sign, setSign] = useState(signData);  
  const [season , setseason] = useState(seasondata);
  const [brands , setbrands] = useState(brandsdata);
  const [isAdmin, setIsAdmin] = useState(false);
  

  return (
    <Parfumcontext.Provider
      value={{
        ImgHome,
        BestSellers,
        ShopsParfumes,
        MenParfumes,
        WomenParfumes,
        Sign,
        brands,
        season,
        isAdmin,
        setImgHome,
        setBestSellers,
        setShopsParfumes,
        setMenParfumes,
        setWomenParfumes,
        setSign,
        setseason,
        setbrands,
        setIsAdmin,
      }}
    >
      {children}
    </Parfumcontext.Provider>
  );
};
