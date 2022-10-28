import React, {useState, useEffect} from "react";
import ArticlesItem from "./ArticlesItem/ArticlesItem";
import axios from '../../axios'
const Articles = () => {
  const [data, setData]= useState([])
  useEffect(()=>{
    axios.get('api/posts').then((res)=>{
      setData(res.data.data.posts)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <section className="articles">
      <div className="articles__container container">
        <div className="articles__header articles__header-landing ">
          <h3>Maqolalar</h3>
        </div>
        <ul className="articles__list">
          {data.map((el)=>(
            <ArticlesItem data={el} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
