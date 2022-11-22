import { Carr1 } from './Components/Carr1';
import { Carr2 } from './Components/Carr2';

import amazon1 from './images-Ex-publicidades/amazon3.png';
import amazon2 from './images-Ex-publicidades/amazon4.png';

import celular from './images-slide/celular.png';
import emp3 from './images-slide/emp3.png';
import dados from './images-slide/dados.png';
import mao from './images-slide/aperto-de-mao.png';
import emp7 from './images-slide/emp7.png';
import emp2 from './images-slide/emp2.png';
import emp1 from './images-slide/emp1.png';

import './style.css';

export const Main = () => {

    return (
        <main className="main">
            <section>
                <Carr1/>
            </section>

            <section className='sectionMain'>
                <h1>Empreendedorismo Digital,o que é, como iniciar e quais resultados posso obter:</h1>

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
                    <p>Empreendedorismo digital é um termo que está cada vez mais em alta. Mas, afinal,
                        o que significa empreender digitalmente? Como você pode iniciar um negócio online?
                        E quais os resultados que você pode obter? Neste artigo, vamos explorar o
                        empreendedorismo digital de A a Z. Você vai descobrir o que significa empreender
                        digitalmente, como iniciar um negócio online e quais os resultados que você pode
                        obter.</p>

                    <figure>
                        <img src={celular} alt="Imagem representativa de um celular" />
                    </figure>

                    <h2>O que é Empreendedorismo Digital?</h2>

                    <p>O empreendedorismo digital é uma forma de empreender usando as ferramentas da internet.
                        Isso pode incluir a criação de um negócio online, o marketing online, a venda de
                        produtos digitais ou serviços online.</p>

                    <p>Muitos empreendedores digitais começam como um hobby e acabam criando um negócio
                        rentável. No entanto, para ter sucesso como empreendedor digital, é importante
                        compreender os fundamentos do marketing e dos negócios online. Além disso, é
                        preciso estar disposto a investir tempo e energia no seu projeto.</p>
                
                    <p>Os empreendedores digitais podem obter muitos tipos de resultados, desde obter mais
                        visibilidade para o seu negócio até aumentar as vendas. No entanto, o principal
                        objetivo de muitos empreendedores digitais é criar uma renda passiva, ou seja, uma
                        fonte de renda que não requer muito trabalho para manter.</p>

                    <figure>
                        <img src={emp3} alt="" />
                    </figure>

                    <h2>Como iniciar um Empreendimento Digital?</h2>

                    <p>Como iniciar um Empreendimento Digital?</p>

                    <p>Se você quer iniciar um empreendimento digital, precisará investir em algumas coisas
                        fundamentais para o seu sucesso. Aqui estão as principais:</p>

                    <ol start='1'>
                        <li>Crie um site profissional: seja ele uma loja virtual ou um blog, é importante ter
                        um site que reflita a seriedade do seu negócio. Para isso, invista em uma boa
                        plataforma e contrate um webdesigner para criar um layout atraente e funcional.</li>

                        <li>Invista em SEO: com uma boa estratégia de SEO, você aumentará consideravelmente
                        as chances de aparecer nas primeiras páginas dos resultados de pesquisa do Google,
                        o que significa mais visitantes e, consequentemente, mais clientes para o seu
                        negócio.</li>

                        <li>Redes Sociais: as redes sociais são fundamentais para qualquer negócio nos
                        dias de hoje, pois é nelas que a maior parte das pessoas está presente. Crie perfis
                        profissionais nas principais redes (Facebook, Instagram, You Tube, Linkedin)</li>
                    </ol>

                    <figure>
                        <img src={dados} alt="" />
                    </figure>

                    <h2>Quais os principais resultados que podemos obter com o Empreendedorismo Digital?</h2>

                    <p>O empreendedorismo digital pode nos ajudar a alcançar uma série de objetivos,
                        tanto pessoais quanto profissionais. Podemos usar o empreendedorismo digital para:</p>
                
                    <ul>
                        <li>- Aumentar a visibilidade da nossa marca;</li>
                        <li>- Gerar novos leads e clientes;</li>
                        <li>- Melhorar o relacionamento com os nossos clientes;</li>
                        <li>- Aumentar as vendas;</li>
                        <li>- Desenvolver novos produtos e serviços;</li>
                        <li>- Criar um negócio escalável.</li>
                    </ul>

                    <figure>
                        <img src={mao} alt="" />
                    </figure>

                    <h2>Exemplos de Empreendedorismo Digital</h2>

                    <p>O Empreendedorismo Digital está em alta e cada vez mais pessoas buscam como
                        iniciar um negócio online. Mas afinal, o que é Empreendedorismo Digital?</p>

                    <p>Empreendedorismo Digital é a arte de utilizar a internet para criar uma startup ou
                        negócio, desde a concepção dos produtos e serviços até a execução das vendas. É
                        uma forma de empreender que leva em consideração as características do meio digital,
                        como a globalização e a interatividade.</p>

                    <p>Existem diversos exemplos de Empreendedorismo Digital no Brasil e no mundo.
                        Alguns dos principais são:</p>

                    <ul>
                        <li>- E-commerce: lojas virtuais que vendem produtos e serviços online;</li>
                        <li>- Marketplaces: plataformas que conectam compradores e vendedores;</li>
                        <li>- Saas (Software as a Service): plataformas que oferecem software sob demanda;</li>
                        <li>- Aplicativos: programas para dispositivos móveis;</li>
                        <li>- Desenvolver novos produtos e serviços;</li>
                        <li>- Blogs: sites que disponibilizam conteúdo sobre divers.</li>
                    </ul>

                    <figure>
                        <img src={emp7} alt="" />
                    </figure>

                    <h2>Dicas para ter sucesso no Empreendedorismo Digital</h2>

                    <p>O empreendedorismo digital está em alta. Se você quer iniciar um negócio
                        online ou aumentar as vendas da sua loja, é preciso saber como ter sucesso
                        nesse mercado.</p>

                    <p>Para ter sucesso no empreendedorismo digital, é importante investir em tráfego
                        orgânico e na criação de uma boa reputação online. Além disso, é preciso oferecer
                        um produto ou serviço de qualidade e fazer um bom marketing para promover seu
                        negócio.</p>
                    
                    <p>Aqui estão algumas dicas para ter sucesso no empreendedorismo digital:</p>

                    <ol start='1'>
                        <li>Invista em SEO para aumentar o tráfego do seu site.</li>
                        <li>Crie uma boa reputação online.</li>
                        <li>Ofereça produtos ou serviços de qualidade.</li>
                        <li>Faça um bom marketing para promover seu negócio.</li>
                    </ol>

                    <figure>
                        <img src={emp2} alt="" />
                    </figure>

                    <h2>Conclusão</h2>

                    <p>Não há dúvidas de que o empreendedorismo digital está em alta. Com o mundo cada vez
                        mais conectado, surgem novas oportunidades para quem quer iniciar um negócio online.</p>

                    <p>Mas, antes de tudo, é importante entender o que é empreendedorismo digital. Em
                        suma, trata-se de um modelo de negócio que utiliza a internet como principal
                        canal de comunicação e venda de produtos ou serviços.</p>

                    <p>Para ser bem-sucedido nesse tipo de empreendimento, é preciso investir em estratégias
                        de marketing digital e ter um bom site ou loja virtual. Além disso, é fundamental
                        saber como gerar tráfego qualificado para converter visitantes em clientes
                        potenciais.</p>

                    <p>Uma vez que você domine esses conceitos básicos do empreendedorismo digital, poderá
                        iniciar seu negócio com mais confiança e obter os melhores resultados.</p>

                    <figure>
                        <img src={emp1} alt="" />
                    </figure>
                </div>
            </section>
        </main>
    )
}
