import React from 'react'
import Button from './Shared/Button/Button';
import './world-traveler.scss';

function App() {
  return (
    <div className="world-traveler-container">
      <h1 className="world-traveler-header">
        World Traveler
      </h1>
      <div className='london-container'>
        <span className='london-color-block'>|</span>
        <Button text={'International'} />
            <img src={require('./Shared/Images/london-img.jpg')} alt='london storefront' className='london-image'/>
              <Button text={'REGISTER NOW'} gray={true} className='registation-btn'/>
                <h2 className='london-title'>London, England</h2>
                <h3 className='london-date'>APRIL 15, 2020</h3>
                  <p className='london-text'>Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio quaerimus igitur, quid et     caritatem, quae sine causa? quae fuerit causa, mox videro; interea hoc epicurus in culpa, qui blanditiis praesentium voluptatum adipiscendarum causa aut officiis debitis aut fugit, sed uti oratione perpetua.
                  </p>
      </div> 
      <div className='atlanta-container'>
        <span className='atlannta-color-block'>|</span>
          <Button text={'Domestic'} />
            <img src={require('./Shared/Images/atlanta-img.png')} alt='Atlanta skyline' className='london-image'/>
            <Button text={'REGISTER NOW'} gray={true} className='registation-btn'/>
              <h2 className='atlanta-title'>Atlanta, GA</h2>
                <h3 className='atltanta-date'>MARCH 10,2019</h3>
                  <p className='atlanta-text'>Torquatos nostros? quos tu paulo ante cum soluta nobis est.</p>
      </div> 
      <div className='singapore-container'>
        <span className='singapore-color-block'>|</span>
          <Button text={'International'} />
            <img src={require('./Shared/Images/singapore-img.jpg')} alt='Singapore skyline' className='singapore-image'/>
              <Button text={'REGISTER NOW'} gray={true} className='registation-btn'/>
                <h2 className='singapore-title'>Singapore</h2>
                  <h3 className='singapore-date'>FEBRUARY 15, 2020</h3>
                    <p className='singapore-text'>Primum igitur, inquit, sic agam, ut aliquid ex eo delectu.</p>
      </div>
    </div>
  );
}

export default App;
