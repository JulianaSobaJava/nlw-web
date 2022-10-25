import * as Dialog from '@radix-ui/react-dialog';

import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner() {
    return (
        <div className='self-stretch bg-nlw-gradient pt-1 mt-6 rounded-lg overflow-hidden'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className="text-2xl text-white font-black block">Não encntrou o seu duo?</strong>
                    <span className='text-zinc-400 text-sm block'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncios</Dialog.Trigger>
            </div>

        </div>
    )
}