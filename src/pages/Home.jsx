import Banner from '../components/Banner.jsx';

function Home() {
  return (
    <>
     <div className="imagem" style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={banner5} 
            alt="Gabriella Souza" 
            className="imagem-banner" 
          />
        </div>
    </>
  );
}

export default Home;