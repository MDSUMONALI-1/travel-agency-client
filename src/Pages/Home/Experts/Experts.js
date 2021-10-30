import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://doc.vortala.com/childsites/uploads/3746/files/Jacoline-De-Jong.jpg" ,
        name: 'Dr.Jacoline De jong',
        expertize: '-scaling & polish Expert-'
    },
    {
        img: "https://doc.vortala.com/childsites/uploads/3746/files/tanya-2021.jpg",
        name: 'DR. Tanya Tadoda',
        expertize: '-Crows and Bridges-'
    },
    {
        img: "https://doc.vortala.com/childsites/uploads/3746/files/Sangeeta-Roy.jpg",
        name: 'Dr. sengeeta roy',
        expertize: '-Orthodontic Services-'
    },
    {
        img: "https://doc.vortala.com/childsites/uploads/3746/files/Chandani-Thadoda.jpg",
        name: 'Dr. chandani Tahododa',
        expertize: '-Emergency dental care-'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-secondary mt-8">Our Experts Doctor</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;