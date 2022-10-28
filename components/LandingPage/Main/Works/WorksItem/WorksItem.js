import { baseUrl } from "../../../../../axios";
function WorksItem({item}) {
  
  return (
    <div className={`works__item`}>
        <img className="works__img" src={`${baseUrl}/uploads/images/${item.user_image_src}`} alt="" />
        <div className="works__person">
            <img className="works__person--avatar" src={`${baseUrl}/uploads/images/${item.user_image_src}`} alt="" />
            <div className="works__person--texts">
                <h3 className="works__person--name global__text--color">{item.student_full_name}</h3>
                <p className="works__desc global__text--color">"{item.course_name}" kursi o'quvchisi</p>
            </div>
        </div>
    </div>
  )
}

export default WorksItem;
