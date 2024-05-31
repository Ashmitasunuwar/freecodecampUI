import SearchBar from "./SearchBar";
import logoImg from '../images/fcc_primary_large.svg'
import { Link } from 'react-router-dom'
import LandingPage from "./LandingPage";
import '../css/home.css'
function Home() {
    const handleSignInClick = () => {
        console.log('SignIn clicked!')
    }
    return (<>
        <header style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1' }}>
            <nav className="navbar" style={{ backgroundColor: "#0a0a23", height: '50px', padding: ' 0 15px' }}>
                <div className="col-md-3">
                    <SearchBar />
                </div>
                <Link to='/' > <div className="col-md-2"> <img className="logo" src={logoImg} height={40} width={200} alt='image not found' /></div></Link>
                <div className="col-md-5" style={{ textAlign: "end" }}>
                    <button className="menu-btn btn">Menu</button>
                    <Link to='/signin' >  <button onClick={handleSignInClick} className="btn btn-warning">Sign in</button></Link>
                </div>
            </nav>
        </header>
        <LandingPage />

    </>)
}
export default Home