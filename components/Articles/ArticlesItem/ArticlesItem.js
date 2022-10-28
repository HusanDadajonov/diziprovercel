import React from 'react'
import { useRouter } from 'next/router';
import { baseUrl } from '../../../axios';

 function ArticlesItem(props) {
     console.log(props.data.post_images[0].image.src)
    //  console.log(`${baseUrl}uploads/images/${props.data.post_images.image}`)
    const router = useRouter()

    function itemHandler() {
        console.log(props.data.id,"hand");
        router.push(`/posts/${props.data.id}`)
    }

    return (
        <li className="articles__item" onClick={itemHandler}>
            <div className="articles__img--wrap">
                <img className="articles__item-img" src={`${baseUrl}uploads/images/${props.data.post_images[0].image.src}`} />
            </div>
            <div className="articles__item-infos">
                <h4 className="articles__item-title">{props.data.title}</h4>
                <p className="articles__item-text">
                    {props.data.content}
                </p>
                <p className="articles__item-date">{props.data.created_at.slice(0,10)}</p>
            </div>
        </li>
    )
}

export default ArticlesItem;
