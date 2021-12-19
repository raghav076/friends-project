import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Form from '../../components/form';
import Header from '../../components/header';
import ShowAds from '../../components/showAds';
import CustomFilters from '../../customComponent/filters';
import './request.scss';

const Request = () => {
    
    const { state } = useLocation();
    const { type } = state;
    console.log(type);

    const maxItemWidth = { state: 225, district: 175, blood: 175 };
    const [itemWidth, setItemWidth] = useState(maxItemWidth);


    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth < 700) {
                setItemWidth({ state: 170, district: 120, blood: 120 })
            } else setItemWidth(maxItemWidth);
        }
        window.addEventListener('resize', checkSize)

        return () => window.removeEventListener('resize', checkSize);
    }, [])

    return (
        <div>
            <Header />
            <div className="filters__container">

            <CustomFilters itemWidth={itemWidth} />
            </div>
            <div className="ads__display">
                <ShowAds role={type==='donor'?'request':'donor'} />
            </div>
            <div className="section__break"></div>
            <Form type={type} />
        </div>
    )
}

export default Request;
