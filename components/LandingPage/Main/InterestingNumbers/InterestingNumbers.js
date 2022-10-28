import { useSelector } from "react-redux";
import { selectOneModel } from "../../../../Store/Constants";

function InterestingNumbers() {
    const consts = useSelector(selectOneModel)
    
    const INTERESTING_NUMBERS_TITLE = consts?.data?.find((constant)=> constant.key === "interesting_numbers_title")
    const EMPLOYED_STUDENTS = consts?.data?.find((constant)=> constant.key === "employed_students")
    const STUDENTS_COUNT = consts?.data?.find((constant)=> constant.key === "students_count")
    const TELEGRAM_SUBSCIBERS = consts?.data?.find((constant)=> constant.key === "telegram_subscribers")

    return (
        <section className="interesting-numbers">
            <div className="global__bg">
                <div className="container main-container">
                    <div className="interesting-numbers__wrap">
                        <h2 className="interesting-numbers__title global__text--color">{INTERESTING_NUMBERS_TITLE?.value}</h2>
                        <ul className="interesting-numbers__list">
                            <li className="interesting-numbers__item">
                                <span className="interesting-numbers__count">{EMPLOYED_STUDENTS?.value}</span>
                                <p className="interesting-numbers__desc global__text--color">Ish bilan ta’minlangan o’quvchilar</p>
                            </li>   
                            <li className="interesting-numbers__item">
                                <span className="interesting-numbers__count">{STUDENTS_COUNT?.value}</span>
                                <p className="interesting-numbers__desc global__text--color">O’quvchilar soni</p>
                            </li>
                            <li className="interesting-numbers__item">
                                <span className="interesting-numbers__count">{TELEGRAM_SUBSCIBERS?.value}</span>
                                <p className="interesting-numbers__desc global__text--color">Telegram obunchilar</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export default InterestingNumbers;