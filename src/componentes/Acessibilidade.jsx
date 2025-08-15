import './Acessibilidade.css';

function Acessibilidade() {
    return (
        <>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
        </>
    );
}

export default Acessibilidade;