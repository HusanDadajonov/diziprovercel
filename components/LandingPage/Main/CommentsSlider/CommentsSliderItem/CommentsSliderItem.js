

function CommentsSliderItem({item}) {



  return (
    <div className="comments__slider--item">
        <div>
          <div className="comments__slider--icon" />
          <p className="comments__slider--desc global__text--color">{item?.comment}</p>
        </div>
        <div className="comments__slider--account">
            <img className="comments__slider--avatar" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user-avatar" />
            <div className="comments__slider--info">
                <h2 className="comments__slider--name global__text--color">{item?.student_full_name}</h2>
                <p className="comments__slider--subtitle global__text--color">“{item?.course_name}” kursi o’quchisi</p>
            </div>
        </div>
    </div>
  )
}
export default CommentsSliderItem
