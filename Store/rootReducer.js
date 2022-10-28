import { combineReducers } from "redux";
import { reducer as themeSlice } from "./themeSlice";
import { reducer as ConstantsSlice } from "./Constants";
import { reducer as TestimonialsSlice } from "./Testimonials";
import { reducer as CoursesSlice } from "./Courses";
import { reducer as FaqsSlice } from "./Faqs"
import { reducer as PortfoliosSlice } from "./Portfolios"


const rootReducer = combineReducers({
    themeSlice,
    get_constats: ConstantsSlice,
    get_testimonials:TestimonialsSlice,
    get_courses:CoursesSlice,
    get_faqs:FaqsSlice,
    get_portfolios:PortfoliosSlice
})

export default rootReducer  