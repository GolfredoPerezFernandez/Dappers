
import {React , useEffect} from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css'
import routes from './pages';
import Page404 from './pages/404';
import { flare } from 'wagmi/chains'
import { createClient, configureChains, mainnet,WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
 
const { provider, webSocketProvider } = configureChains(
  [flare],
  [publicProvider()],
)
 
const client = createClient({
  provider,
  webSocketProvider,
})
 
function App() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);

    return (   <>
    <WagmiConfig client={client}>

            <Header />

            <Routes>

                {
                    routes.map((data,idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
            </Routes>

            <Footer />    
            </WagmiConfig>

        </>
    );
}

export default App;
