import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"; 
import Footer from '../../components/Footer/Footer';

const Demand = () => {
  const [categoriaFilter, setCategoriaFilter] = useState(''); 

  return (
    <div>
      <Header />
      <h2>Demand title</h2> {/* Aquí se cogerá el título desde el back */}
      
      <label>Category</label> {/* Luego se cambiaría por un select cuando tengamos los datos del back */}
      <input
        type="text"
        placeholder="Filter by category"
        value={categoriaFilter}
        onChange={(e) => setCategoriaFilter(e.target.value)}
      />
      
      <section className='description'>
        <div>
          Demand description
          <p> FILES HERE</p>
        </div>
      </section>
      
      <section className='proposals'>
        <div>
          Proposal
          <p>FILES</p>
          <p>Votes</p>
        </div> {/* Aquí sustituir por los valores sacados del back y sacar el número de proposals deseados */}
      </section>
      
      <section className='userData'> {/* Sustituir todo por datos del back */}
        {/*<img alt="Imagen de perfil del usuario"/>*/}
        <p>Username</p>
        <p>User demands</p>
        <p>Voted proposals</p>
      </section>
      {/* AÑADIR UN ELEMENTO QUE PERMITA AÑADIR DEMANDAS */}
      <Footer/>
    </div>
  );
};

export default Demand;
//HE PUESTO CLASES A LOS SECTION PARA DESPUÉS ORDENARLOS CON CSS