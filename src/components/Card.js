import React from 'react';

const Card = ({ name, id, email, username, location }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <h4>{username}</h4>
            <h5>{location}</h5>
            <p>{email}</p>
        </div>
    );
}

export default Card;