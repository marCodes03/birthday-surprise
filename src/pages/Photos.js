import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import pic1 from '../asset/pic-1.jpg';
import pic2 from '../asset/pic-2.jpg';
import pic3 from '../asset/pic-3.jpg';
import pic4 from '../asset/pic-4.jpg';
import pic5 from '../asset/pic-5.jpg';
import pic6 from '../asset/pic-6.jpg';
import pic7 from '../asset/pic-7.jpg';
import pic8 from '../asset/pic-8.jpg';
import pic9 from '../asset/pic-9.jpg';
import '../styles/Photos.css';
import '../App.css';

const PolaroidGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Sample data - replacing these with your own URLs
  const images = [
    { id: 1, src: pic1, caption: 'First Meet' },
    { id: 0, src: pic2, caption: '08-30-2025' },
    { id: 2, src: pic3, caption: 'Church Together' },
    { id: 3, src: pic4, caption: 'Demons Slayer Cutie' },
    { id: 4, src: pic5, caption: 'Back Hug' },
    { id: 5, src: pic6, caption: 'Sleeping Beauty' },
    { id: 6, src: pic7, caption: 'I lose' },
    { id: 7, src: pic8, caption: 'Movie Date' },
    { id: 8, src: pic9, caption: 'Make up' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = (e) => {
    // Close only if clicking the background or close button, not the image itself
    if (e.target.classList.contains('modal-overlay') || e.target.className === 'close-btn') {
      setSelectedImage(null);
    }
  };

  return (
    
    <div className="gallery-container">
      <button className="back-button" onClick={() => navigate("/gifts")}>
            Back to Gifts
          </button>
      <h1 >Our Memories</h1>
      
      {/* Grid Layout */}
      <div className="polaroid-grid">
        {images.map((img, index) => (
          <div 
            key={img.id} 
            className="polaroid-card"
            onClick={() => openModal(img)}
            // Add a slight random rotation for realism based on index
            style={{ transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)' }}
          >
            <div className="image-wrapper">
              <img src={img.src} alt={img.caption} />
            </div>
            <div className="caption">{img.caption}</div>
          </div>
        ))}
      </div>

      {/* Modal Logic */}
      
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolaroidGallery;