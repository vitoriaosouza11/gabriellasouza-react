import './Acessibilidade.css';

function Acessibilidade() {
    return (
        <>
            <div vw="true" className="enabled">
                <div vw-access-button="true" className="active"></div>
                <div vw-plugin-wrapper="true">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
        </>
    );
}

export default Acessibilidade;