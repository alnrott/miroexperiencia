import "./inspiration.css";

const InspirationSection = () => {
  return (
    <section className="next-dates-section">
      <div className="glass-boxx">
        <h1>Coleccion pinterest</h1>
      </div>
        <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/anapinskywalker/style/"></a>
        
        
        <button className="my-button" onClick={() => window.location.href='https://ar.pinterest.com/miroexperiencia/inspiraci%C3%B3n/'}>IR a pinterest</button>    </section>
  );
};

export default InspirationSection;
