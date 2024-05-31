import React from 'react'
import '../css/assignment.css'

function ProfileCard({ imgsrc, name, location, occupation, company, testimonyDesc }) {
    return (<>
        <img src={imgsrc} alt='image not found' height={320} width={350} />

        <div className='testimonialbox'>
            <div className='location-occupation'>
                <h3 className="location"> <strong>{name}</strong> {location}</h3>
                <p className="occupation">{occupation} <strong>{company}</strong></p>
            </div>
            <div>
                <blockquote><p className="testimony">
                    <strong>{testimonyDesc}</strong></p></blockquote>
            </div>
        </div>

    </>
    )
}

export default ProfileCard