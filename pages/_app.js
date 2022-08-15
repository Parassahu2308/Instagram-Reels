import '../styles/globals.css'
import './login/login.css'
import './signup/signup.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Components/Feed.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
