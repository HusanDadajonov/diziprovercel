import Skelet from '../Skeleton'
const LessonsLoading = ()=>{
    const Fake =[1,2,3,4]
    return(
        <>
        {Fake.map((el)=>(
            <li className="course__item">
                    <a className="course__link">
                      <div className="course__item-play">
                          <Skelet width={297} height={167} />
                      </div>
                      <p className="course__item-name">
                      <Skelet width={140} height={36} />
                      </p>
                    </a>
                </li>
                    ))}
        </>
    )
}
export default LessonsLoading