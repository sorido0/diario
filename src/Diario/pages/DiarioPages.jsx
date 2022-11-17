

import { BotonFlotante } from '../components';
import { NadaSelecionado, VerNota } from '../views';
import { DiarioLayout } from './../layout/DiarioLayout';

export const DiarioPages = () => {
    return (
        <DiarioLayout>
           {/* <NadaSelecionado/> */}


           <VerNota/>

           <BotonFlotante />
        </DiarioLayout>
    )
}
