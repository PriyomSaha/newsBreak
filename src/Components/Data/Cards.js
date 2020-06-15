import React from 'react'
import './Cards.css'
function Cards({Title,Image}) {
    return (
            <div class="column">
                <div class="card">
                    <img src={Image} style={{width:'100%',maxHeight:'30vh'}} />
                    <p>{Title}</p>
                </div>
            </div>
    )
}

export default Cards
