import './Corporal.css';


function Corporal({ imagem, titulo }) {

    return (
        <>
            <div className="col-6 col-md-4 col-lg-2 d-flex">
                <div className="card h-100 w-100">
                    <img src={imagem} className="card-img-top" alt={titulo} />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corporal;

