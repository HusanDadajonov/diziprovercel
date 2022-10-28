import router from 'next/router'
import Footer from '../../components/LandingPage/Footer/Footer';
import SinglePostWrap from '../../components/LandingPage/SinglePostWrap/SinglePostWrap';
import SiteHeader from '../../components/SiteHeader';

function SinglePost() {
    console.log(4,'dataSingle');
    return (
        <>
            <SiteHeader/>
            <SinglePostWrap/>
            <Footer /> 
        </>
    )
}

export default SinglePost;
