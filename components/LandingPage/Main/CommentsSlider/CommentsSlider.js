import { useState } from "react";
import { useSelector } from "react-redux"
import instance from "../../../../axios";
import { testimonials } from "../../../../Store/Testimonials"
import CommentsSliderItem from "./CommentsSliderItem/CommentsSliderItem"

function CommentsSlider() {
    const [sliderStyle,setSliderStyle] = useState(236)
    const testimonialsData = useSelector(testimonials)
    console.log();
    const [slideIndex,setSlideIndex] = useState(0)

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={"slider-arrow slider-arrow__prev"}
            onClick={onClick}
          />
        );
      }

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={"slider-arrow slider-arrow__next"}
            onClick={onClick}
          />
        );
      }

    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 900,
        beforeChange: (current,next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      
    };


      

    return (
        <div className="comments global__bg">
            <div className="full-container">
                <h2 className="comments__title global__text--color">O’quchilar izohi</h2>
         
            </div>
            <div>


            {/* <Slider  style={{display:"flex"}} {...settings}>
                {
                    testimonialsData?.data?.map((item,index) => (
                        <div className="slider-item">
                            <CommentsSliderItem key={item.id}  item={item}/>
                        </div>

                    ))
                }

            </Slider>  */}
            
      </div>
           
        </div>
    )
}

export default CommentsSlider
