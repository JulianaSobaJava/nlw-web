import logoImg from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './components/gameBanner';
import { CreateAdBanner } from './components/createAdBanner';

function App() {

    return (
        <div className='max-w-[1344px] mx-auto flex items-center flex-col my-10'>
            <img src={logoImg} alt='logo' />

            <h1 className='text-5xl text-white font-black mt-10'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

            <div className='grid grid-cols-6 gap-6 mt-16 '>
                <GameBanner imageUrl='./image 1.png' adsCount={4} title='League Of Legends' />
            </div>

            <CreateAdBanner />
        </div>
    )
}

export default App
