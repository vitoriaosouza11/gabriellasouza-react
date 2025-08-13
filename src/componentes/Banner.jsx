import './Banner.css'
import banner5 from '/imagens/banner5.jpg'; 

export default function Banner() {
  return (
    <div className="imagem" style={{ display: 'flex', justifyContent: 'center' }}>
      <img 
        src={banner5} 
        alt="Gabriella Souza" 
        className="imagem-banner" 
      />
    </div>
  );
}




