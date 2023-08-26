import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function PriceCard(props) {
    function getPerks() {
        return props.data.perks.map((perk) => {
            return <p key={uuidv4()} className='price-text'>{perk}</p>

        })

    }
    function getCard() {
        let res
        if (props.isPrimary === false) {
            res = <div className='price-card'>
                <p className='pricing-title'>{props.data.title}</p>
                <p className='pricing-amount'>{props.price}</p>
                <div className='price-text-container'>
                    {getPerks()}
                    {/* <p className='price-text'>2 Users Allowed</p>
                    <p className='price-text'>Send up to 3 GB</p> */}
                </div>
                <button className='btn price-btn'>Learn More</button>

            </div>
        } else {
            res = <div className='price-card primary-card'>
                <p className='pricing-title'>{props.data.title}</p>
                <p className='pricing-amount'>{props.price}</p>
                <div className='price-text-container'>
                    {getPerks()}
                </div>
                <button className='btn price-btn price-btn-primary '>Learn More</button>

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