import './Contato.css';

function Contato() {
    return (
        <>
            <h2 style={{ "text-align": "center", color: "#bb8a50" }}>FALE CONOSCO</h2>
            <div className="container mt-5 mb-5">

                <form>
                    <div className="mb-3">
                        <label for="nome" className="form-label">Nome completo</label>
                        <input type="text" className="form-control" id="nome" required />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label for="telefone" className="form-label">Telefone</label>
                        <input type="tel" className="form-control" id="telefone" required />
                    </div>
                    <div className="mb-3">
                        <label for="mensagem" className="form-label">Mensagem</label>
                        <textarea className="form-control" id="mensagem" rows="5" required></textarea>
                    </div>
                </form>
                <form onsubmit="enviarFormulario(event)">
                    <button type="submit" className="btn" onclick="enviarFormulario()"
                        style={{ backgroundColor: "#bb8a50", color: "white" }}>Enviar</button>
                </form>


            </div>
            <script>
                function enviarFormulario(event) {
                    event.preventDefault();

                const nome = document.getElementById("nome").value;
                const email = document.getElementById("email").value;
                const telefone = document.getElementById("telefone").value;
                const textoMensagem = document.getElementById("mensagem").value;
                const data = document.getElementById("data") ? document.getElementById("data").value : "";

                if (!nome || !email || !telefone || !textoMensagem) {
                    alert("Por favor, preencha todos os campos.");
                return;
                }

                const numeroWhatsApp = "5519993344430";
                const mensagemFinal = `Olá, meu nome é ${nome}. Gostaria de agendar o(os) seguintes procedimentos:\n\n${textoMensagem}\n\nData desejada: ${data}`;
                const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemFinal);

                window.open(url, "_blank");
    }
            </script>
        </>
    );
}

export default Contato;