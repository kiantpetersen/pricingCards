import React from 'react';

function PriceCard(props) {
    function getCard() {
        let res
        if (props.isPrimary === false) {
            res = <div className='price-card'>
                <p className='pricing-title'>Basic</p>
                <p className='pricing-amount'>$19.99</p>
                <div className='price-text-container'>
                    <p className='price-text'>500 GB Storage</p>
                    <p className='price-text'>2 Users Allowed</p>
                    <p className='price-text'>Send up to 3 GB</p>
                </div>
                <button className='btn price-btn'>Learn More</button>

            </div>
        } else {
            res = <div className='price-card primary-card'>
                <p className='pricing-title'>Basic</p>
                <p className='pricing-amount'>$19.99</p>
                <div className='price-text-container'>
                    <p className='price-text'>500 GB Storage</p>
                    <p className='price-text'>2 Users Allowed</p>
                    <p className='price-text'>Send up to 3 GB</p>
                </div>
                <button className='btn price-btn price-btn-primary'>Learn More</button>

            </div>
        }
        return res
    }
    return (getCard()
        // <div className='price-card'>
        //     <p className='pricing-title'>Basic</p>
        //     <p className='pricing-amount'>$19.99</p>
        //     <div className='price-text-container'>
        //         <p className='price-text'>500 GB Storage</p>
        //         <p className='price-text'>2 Users Allowed</p>
        //         <p className='price-text'>Send up to 3 GB</p>
        //     </div>
        //     <button className='btn price-btn'>Learn More</button>

        // </div>
    );
}

export default PriceCard;