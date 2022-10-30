import { useSelector } from "react-redux";
import { selectOneModel } from "../../../../Store/Constants";

function AboutProject() {
  const consts = useSelector(selectOneModel)
  const ABOUT_TITLE = consts?.data?.find((constant)=> constant.key === "about_title")
  const ABOUT_DESCRIPTION = consts?.data?.find((constant)=> constant.key === "about_description")


  console.log(ABOUT_DESCRIPTION?.value);


  return (
    <section id="about" className=" about-project">
      <div className="about-project__wrap" >
        <div className="about-project__col">
          <img className='about-project__img' src="../../img/about-project-logo.svg" alt="" />
        </div>
        <div className='about-project__col global__bg'>
          <h2 className='about-project__title global__text--color'>{ABOUT_TITLE?.value}</h2>
          <p className='about-project__desc global__text--color'>{ABOUT_DESCRIPTION?.value}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
