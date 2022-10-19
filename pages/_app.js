import '../styles/globals.css'
import './login/login.css'
import './signup/signup.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Components/Feed.css"
import "../Components/Profile.css"
import AuthWrapper from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
  
}

export default MyApp
