import React from 'react';


const TeamCard = ({ title, imageSrc }) => {
    return (
        <div className="team-card">
            <img src={imageSrc} alt={`${title} icon`} className="team-image" />
            <h3>{title}</h3>
        </div>
    );
};

export default TeamCard;
