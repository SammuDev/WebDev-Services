import { Carr1 } from './Components/Carr1';
import { Carr2 } from './Components/Carr2';

import './style.css';

export const Main = () => {

    return (
        <div className="main">
            <section>
                <Carr1/>
            </section>

            <section className='sectionMain'>
                <h1>Empreendedorismo: o que é, tipos, cenário do Brasil, vantagens e ideias</h1>

                <div className='publicity'>
                    <figure>
                        <Carr2/>
                    </figure>
                </div>

                <p>Resolveu se aventurar no empreendedorismo e quer saber os segredos do sucesso?</p>
                <p>A verdade é que não existem fórmulas prontas, mas alguns atalhos que encurtam sua caminhada rumo ao sonho de se tornar bem-sucedido nos negócios.</p>
                <p>Como principiante, você deve se focar no planejamento e se preparar para os desafios, além de assumir uma postura confiante e determinada.</p>
                <p>Aqui, você vai encontrar orientações para facilitar os seus primeiros passos e guiar sua trajetória no empreendedorismo.</p>
                <p>Lembre-se: o começo pode parecer difícil, mas ter a própria empresa vale todo o esforço!</p>
                <p>Não é à toa que os jovens estão encarando o empreendedorismo cada vez mais cedo, como você vai descobrir ao longo do texto.</p>
            
            </section>
        </div>
    )
}
