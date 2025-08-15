import './Sobre.css';

function Sobre() {
    return (
        <>
            <h1 style={{ textAlign: "center", color: "#bb8a50" }}>SOBRE MIM</h1>
            <br></br>

            <div className="container container-sobre"  >
                <div className="texto">
                    <h1><strong>Olá! Meu nome é Gabriella Souza</strong></h1>
                    <p>
                        Sou esteticista apaixonada por realçar a beleza e promover o bem-estar de cada cliente. Atuo na área da estética
                        com foco em procedimentos faciais, corporais, massagens relaxantes, depilação com cera e luz pulsada.
                    </p>
                    <p>
                        Acredito que cuidar da pele e do corpo é também uma forma de autocuidado, e por isso, meu atendimento é sempre
                        personalizado, com atenção às necessidades e objetivos individuais de cada pessoa que passa por aqui.
                    </p>
                    <p>
                        Estou em constante atualização para oferecer as melhores técnicas e produtos do mercado, com segurança,
                        responsabilidade e muito carinho. Mais do que resultados estéticos, busco proporcionar momentos de acolhimento,
                        confiança e transformação.
                    </p>
                    <p><strong>Seja muito bem-vinda(o)! Vai ser um prazer te atender.</strong></p>
                </div>
                <div className="imagemsobre">
                    <img src="/imagens/fundo2.png" alt="Gabriella Souza" />
                </div>
            </div>
        </>
    );
}

export default Sobre;