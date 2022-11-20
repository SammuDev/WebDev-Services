// import logo from './logo.svg';
import './styleHome.css';
import { Header } from './../../Components/Header';
import { Main } from '../../Components/Main';
import { Aside } from '../../Components/Main';
import { Footer } from '../../Components/Main';

export const Home = () => (
    <div>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
    </div>
)
