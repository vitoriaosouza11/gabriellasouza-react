import React, { useState } from 'react';
import './Contato.css';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [data, setData] = useState('');

    function enviarFormulario(event) {
        event.preventDefault();

        if (!nome || !email || !telefone || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const numeroWhatsApp = "5519993344430";
        const mensagemFinal = `Olá, meu nome é ${nome}. Gostaria de agendar o(os) seguintes procedimentos:\n\n${mensagem}\n\nData desejada: ${data}`;
        const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemFinal);

        window.open(url, "_blank");
    }

    return (
        <>
            <br></br>
            <h2 style={{ textAlign: "center", color: "#bb8a50" }}>FALE CONOSCO</h2>
            <div className="container mt-5 mb-5">
                <form onSubmit={enviarFormulario}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefone"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                        <textarea
                            className="form-control"
                            id="mensagem"
                            rows="5"
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                            required
                        ></textarea>
                    </div>


                    <label htmlFor="data" className="form-label">Data desejada</label>
                    <input
                        type="date"
                        className="form-control"
                        id="data"
                        value={data}
                        onChange={e => setData(e.target.value)}
                    />
                    <br></br>
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: "#bb8a50", color: "white" }}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
}

export default Contato;