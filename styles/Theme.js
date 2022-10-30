import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    themeSunColor: "#000",
    themeMoonColor:"#000",
    themeMoonOpacity:0.3,
    themeSunOpacity: 1,
    textColor:"#000",
    borderColor:"#000",
    bg:"#fff",
    aboutBg:"#fcfcfc",
    logo:"/img/header-logo.svg",
    cardBg:"#fff",
    courseItemBorderColor:"#d9d9d9",
    themeBtnBorder: "1px solid rgba(0, 0, 0, 0.4)",
    interestingNumbersColor:"#e50000",
    worksBorderColor:"#efefef",
    commentsCardBorderColor:"#d9d9d9",
    accardionBorderColor:"#efefef",
    sliderICon:"./img/slider-item-icon.svg",    
    socialMediaBg:"#ededed",
    footerBg:"#fafafa",
    telegramIcon:"./img/icon-telegram.svg",
    instagramIcon:"./img/icon-instagram.svg",
    youtubeIcon:"./img/icon-youtube.svg",
    sliderLeftArrow:"./img/left-arrow.svg",
    sliderRightArrow:"./img/right-arrow.svg",
    heroBg:"#fff",
    accardionOpen:"#FAFAFA",
    accarionOpenBorder:"#d9d9d9",
    accardionOpen:"#FAFAFA"
}

export const  darkTheme = {
    themeMoonColor:"#fff",
    themeMoonOpacity:1,
    themeSunOpacity: 0.3,
    themeSunColor: "#fff",
    textColor:"#fff",
    borderColor:"#fff",
    bg:"#111114",
    aboutBg:"#1f1f1f",
    logo:"/img/dark-logo.svg",
    cardBg:"#0d0d0d",
    courseItemBorderColor:"#333",
    themeBtnBorder:"1px solid rgba(255, 255, 255, 0.4) ",
    interestingNumbersColor:"#ff0000",
    worksBorderColor:"#1d1d1d",
    commentsCardBorderColor:"#333",
    accardionBorderColor:"#1d1d1d",
    sliderICon:"./img/slider-item-dark-icon.svg",
    socialMediaBg:"#1f1f1f",
    footerBg:"#121212",
    instagramIcon:"./img/insta-dark.svg",
    telegramIcon:"./img/telegram-dark.svg",
    youtubeIcon:"./img/youtube-dark.svg",
    sliderLeftArrow:"./img/left-arrow-dar.svg",
    sliderRightArrow:"./img/right-arrow-dark.svg",
    heroBg:"#1E0F0F",
    accardionOpen:"#1A1A1A",
    accarionOpenBorder:"#333",
    accardionOpen:"#1A1A1A"
}


export const GlobalStyles = createGlobalStyle`

    .header__theme--moon-icon{
        fill: ${props => props.theme.themeMoonColor};
        font-size: 19px;
        opacity: ${props => props.theme.themeMoonOpacity};
    
    }

    .hero__img--bg{
       background:${props => props.theme.heroBg} !important
    }

    .header__theme--sun-icon{
        fill:${props => props.theme.themeSunColor};
        font-size: 24px;
        opacity: ${props => props.theme.themeSunOpacity};
    }

    .header__logo{
        background-image:url(${props => props.theme.logo})
    }

    .global__text--color{
        color: ${props => props.theme.textColor}
    }
    .global__border--color{
        border-color: ${props => props.theme.borderColor}
    }
    .global__bg{
       background:${props => props.theme.bg} !important
    }
    .about-project__col:nth-child(2){
        background:${props => props.theme.aboutBg} !important
    }
    .our-courses__item{
        background:${props => props.theme.cardBg}
    }
    .comments__slider--item{
        background:${props => props.theme.cardBg}
    }
    .footer__logo{
        background-image:url(${props => props.theme.logo})
    }
    .our-courses__item{
        border-color:${props => props.theme.courseItemBorderColor}
    }

    .header__theme--btn{
        border:${props => props.theme.themeBtnBorder}
    }

    .interesting-numbers__count{
        color:${props => props.theme.interestingNumbersColor}
    }

    .works__person{
        border-color:${props => props.theme.worksBorderColor}
    }

    .comments__slider--item{
        border-color:${props => props.theme.commentsCardBorderColor}
    }

    .MuiAccordion-root   {
        border-color:${props => props.theme.accardionBorderColor}
    }

    .accordion-drop{
        border-color:${props => props.theme.accardionBorderColor}
    }

    .comments__slider--icon{
        background-image:url(${props => props.theme.sliderICon})

    }
    .footer{
        border-color:${props => props.theme.worksBorderColor};  
        background:${props => props.theme.footerBg}
    }

    .footer__social-medias__item a{
        background:${props => props.theme.socialMediaBg}
    }
    
    .footer__social-medias__instagram-link::before{
        background-image:url(${props => props.theme.instagramIcon})
    }
    
    .footer__social-medias__telegram-link::before{
        background-image:url(${props => props.theme.telegramIcon})
    }
    .footer__social-medias__youtube-link::before{
        background-image:url(${props => props.theme.youtubeIcon})
    }
    
    .slider-arrow__prev::after{
        background-image:url(${props => props.theme.sliderLeftArrow})
    }
    .slider-arrow__next::after{
        background-image:url(${props => props.theme.sliderRightArrow})
    }
 

    .slider-arrow{
        border-color:${props => props.theme.commentsCardBorderColor} !important;  
    }

    .accardion_open{
        background:${props => props.theme.accardionOpen} !important;
        border-color:${props => props.theme.accarionOpenBorder};
    }

 
    
    .MuiAccordionSummary-expandIconWrapper svg{
        color: ${props => props.theme.textColor}
    }


  
`

