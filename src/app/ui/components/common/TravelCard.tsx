'use client'
import React from 'react'

type Props = {}

const TravelCard = (props: Props) => {
  return (
    <div>
        <div className="travel-card">
            <div className="card-header">
                <img className='card-img' src="https://vietnam-immi.org/images/our-service-1.png" alt="services1" />
                <button onClick={()=>{
                    console.log("Like this item")
                }}>
                    like
                </button>
            </div>
            <div className="card-body">
                <div className="card-infos">
                    <span>Thailand, Bangkok</span>
                    <span>|</span>
                    <span>3 days</span>
                </div>
                <div className="card-title">
                    <h4>3 Night Stay (Apartment) Sports City 5 Star Quality</h4>
                </div>
                <div className='card-review'>
                    *****
                </div>
            </div>
            <div className="card-footer">
                <span>From <strong> 90.00 USD </strong></span>
            </div>
        </div>
    </div>
  )
}

export default TravelCard