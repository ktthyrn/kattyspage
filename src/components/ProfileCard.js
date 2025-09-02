import React from 'react';
// IMPORTANTE: Cambia la imagen en la carpeta assets por la de Snoopy
import profileImage from '../assets/profile-image.png';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        {/* Estructura actualizada del ícono de corazón */}
        <div className="heart-icon-wrapper">
            <span role="img" aria-label="heart">❤️</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;