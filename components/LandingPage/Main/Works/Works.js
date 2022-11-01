import react, {useState, useEffect} from 'react'
import WorksItem from "./WorksItem/WorksItem"
import axios from '../../../../axios'
import { useSelector } from 'react-redux'
import { portfolios } from '../../../../Store/Portfolios'
import {Box ,Paper,styled} from '@mui/material';
import Masonry from '@mui/lab/Masonry';

function Works() {
    const portfoliosData = useSelector(portfolios)
    const [smallHeight,setSmallHeight] = useState(292)
    const [bigHeight,setBigHeight] = useState(456)
    const [columns,setColumns] = useState(3)
    const [heights,setHeights] = useState([bigHeight,smallHeight,bigHeight,bigHeight,smallHeight,smallHeight])
    const [space,setSpace] = useState(4)


    // useEffect(()=> {
    //   window.addEventListener("resize",() => {
    //     console.log(window.innerWidth);
    //     if(window.innerWidth <= 1015 && window.innerWidth >= 700){
    //       setSmallHeight(181)
    //       setBigHeight(275)
    //       setHeights([275,181,275,275,181,181])
    //       setSpace(2)
    //     }
    //     else if(window.innerWidth > 1015 && window.innerWidth >= 700){
    //       setSmallHeight(292)
    //       setBigHeight(456)
    //       setHeights([456,292,456,456,292,292])
    //       setSpace(4)
    //     }

    //     if(window.innerWidth <= 700){
    //       setSmallHeight(165)
    //       setBigHeight(236)
    //       setHeights([236,165,236,236,165,165])

    //     }

    //     if(window.innerWidth <= 580){
    //       setSpace(2)
    //       setColumns(2)
    //       setHeights([165,236,236,165,236,236])
    //     }

    //     else if(window.innerWidth > 580){
    //       setColumns(3)
    //     }

     

    //   })

    //   if(window.innerWidth <= 1015 && window.innerWidth >= 700){
    //     setSmallHeight(181)
    //     setBigHeight(275)
    //     setHeights([275,181,275,275,181,181])
    //     setSpace(2)
    //   }
    //   else if(window.innerWidth > 1015 && window.innerWidth >= 700){
    //     setSmallHeight(292)
    //     setBigHeight(456)
    //     setHeights([456,292,456,456,292,292])
    //     setSpace(4)
    //   }

    //   if(window.innerWidth <= 700){
    //     setSmallHeight(165)
    //     setBigHeight(236)
    //     setHeights([236,165,236,236,165,165])

    //   }

    //   if(window.innerWidth <= 580){
    //     setSpace(2)
    //     setColumns(2)
    //     setHeights([165,236,236,165,236,236])
    //   }

    //   else if(window.innerWidth > 580){
    //     setColumns(3)
    //   }
    // },[])
 
    return (
        <section className='works'>
            <div className='global__bg'>
                <div className='container main-container'>
                    <div className='works__wrap'>
                        <h2 className='works__title global__text--color'>O’quvchilarimizning ishlari</h2>
                        <Box >
                          {/* <Masonry columns={columns} spacing={space} sx={{margin:"0"}}>
                            {portfoliosData?.data?.map((item, index) => (
                              <Box className={`works__item--wrap ${heights[index]  === smallHeight ? "works__item--small" : ""}`} key={index}>
                                <WorksItem 
                                  key={index} 
                                  item={item}
                                />
                              </Box>
                            ))}
                          </Masonry> */}
                        </Box>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Works;
