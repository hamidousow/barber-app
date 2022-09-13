import React from 'react';
// import LeftContent from '../LeftContent/LeftContent';
// import RightContent from '../RightContent/RightContent';

const Tarifs = () => {

    const tabTarifs = [
        {
            title: "Taper",
            price: "15.00€",
            details: "quelques détails concernant le service",
            id: "123"
        },
        {
            title: "Teinture",
            price: "30.00€",
            details: "quelques détails concernant le service",
            id: "456"
        },
        {
            title: "Taille barbe à l'ancienne",
            price: "10.00€",
            details: "quelques détails concernant le service",
            id: "789"
        }        
    ]
    return (
        <section id='section-tarifs'>
            {/* <RightContent/>
            <LeftContent/> */}
            <div className='tarifs_background'></div>
            <div className='tarifs_content'>
                <h2 className="section_title">Tarifs</h2>
                <ul>
                    {tabTarifs.map((tarif) => {
                        return <li className='tarif_service' key={tarif.id}>
                                <div className='tarif_wrapServiceTitlePrice'>
                                    <p className='tarif_service-title'>{tarif.title}</p>
                                    <p className='tarif_price'>{tarif.price}</p>
                                </div>                                    
                                <p className='tarif_service-details'>{tarif.details}</p>
                            </li>
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Tarifs;