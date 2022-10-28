import axios, { baseUrl } from '../../../axios';
import React, { useEffect, useState } from 'react'
import router from 'next/router';
function SinglePostWrap({id}) {
    const [data, setData] = useState("");
    useEffect(() => {
      axios
        .get(`api/posts/${router.query.id}`)
        .then((res) => {
            setData(res.data.data.post)
            })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    console.log(data,'dataSingle');

    return (
        <section className='single'>
            <div className='single__container container'>
                <h2 className='single__title'>{data ? data.title : ""}</h2>
                <span className='single__time'>12 aprel</span>
                <img className='single__img' src={ data !== ""  ? `${baseUrl}uploads/images/${data.post_images[0].image.src}` : ""} alt="" />
                <p className='single__desc'>{data.content}</p>
            </div>
        </section>
    )
}

export default SinglePostWrap;
