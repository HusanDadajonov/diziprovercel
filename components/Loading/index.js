import Link from 'next/link'
import Skelet from '../Skeleton'
const MainPageLoading  = ()=>{
    const Fake = [1,2,3]
    return(
        <>
        {Fake.map((el)=>(
            <li className="courses__item">
               <Skelet width={396} height={230} className="" />
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                        </p>
                      </div>
                    </div>
                    <p className="courses__item-name">
                    <Skelet width={140} height={36} />
                    </p>
                  </a>
              </li>
        ))}
        </>
    )
}
export default MainPageLoading