import { Carr1 } from './Components/Carr1';
import { Carr2 } from './Components/Carr2';

import amazon1 from './images-Ex-publicidades/amazon3.png';
import amazon2 from './images-Ex-publicidades/amazon4.png';

import './style.css';

export const Main = () => {

    return (
        <main className="main">
            <section>
                <Carr1/>
            </section>

            <section className='sectionMain'>
                <h1><em>EMPREENDEDORISMO DIGITAL:</em></h1>

                <div className='publicity none'>
                    <figure>
                        <Carr2/>
                    </figure>
                </div>

                <div className='publicity2 none2'>
                    <figure>
                        <img src={amazon1} className='ad-left' alt="Primeiro Comercial" />
                        <img src={amazon2} className='ad-right' alt="Segundo Comercial" />
                    </figure>
                    <hr />
                </div>

                <div className='text'>
                    <p>Resolveu se aventurar no empreendedorismo e quer saber os segredos do sucesso?
                        A verdade é que não existem fórmulas prontas, mas alguns atalhos que encurtam
                        sua caminhada rumo ao sonho de se tornar bem-sucedido nos negócios. Como
                        principiante, você deve se focar no planejamento e se preparar para os desafios, 
                        além de assumir uma postura confiante e determinada.</p>
                    
                    <p>Aqui, você vai encontrar orientações para facilitar os seus primeiros passos e guiar sua trajetória no empreendedorismo.</p>
                    
                    <h2>O QUE É:</h2>
                    <p>Empreendedorismo digital é o processo de criação de novos negócios utilizando
                        tecnologia de informação e comunicação. Refere-se à ideia de criar um negócio com a
                        ajuda da tecnologia digital. O termo é usado em todo o mundo e está ganhando força. No
                        entanto, não é um conceito novo; os empreendedores sempre usaram a tecnologia para
                        criar novos negócios.</p>

                    <p>O pensamento empreendedor é uma habilidade essencial na economia atual. O
                        empreendedorismo digital é uma abordagem para criar novos negócios usando a
                        tecnologia digital. Isso inclui aplicativos, mídias sociais e web design. Também
                        inclui marketing online e crowdfunding, entre outras técnicas. O empreendedorismo
                        digital pode ser uma forma de encontrar soluções para questões econômicas globais,
                        como desemprego e desigualdade de renda, por meio da inovação e do empreendedorismo.</p>
                </div>
            </section>
        </main>
    )
}
