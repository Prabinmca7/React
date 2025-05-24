import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


const initialProperties = [
  {
    id: 1,
    title: 'House for sale',
    image: 'https://imagecdn.99acres.com/media1/26100/18/522018875M-1727835120997.webp',
    location: 'Marthandam',
    price: 'Rs 2,500,000',
    liked: false
  },
  {
    id: 2,
    title: '5 Cent Plot for sale',
    image: 'https://imagecdn.99acres.com/media1/29535/6/590706037M-1745829276351.jpg',
    location: 'Kaliyakavilai',
    price: 'Rs 1,200,000',
    liked: false
  },
  {
    id: 3,
    title: 'House For Sale',
    image: 'https://imagecdn.99acres.com/media1/29535/6/590706037M-1745829276351.jpg',
    location: 'Kanyakumari',
    price: ' RS 850,000',
    liked: false
  }
];



function App() {
  const [properties, setProperties] = useState(initialProperties);

  const toggleLike = (id) => {
    const updated = properties.map(property =>
      property.id === id
        ? { ...property, liked: !property.liked }
        : property
    );
    setProperties(updated);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🏠 Real Estate Listings</h2>
      <div className="row">
        {properties.map(property => (
          <div className="col-md-4 mb-4" key={property.id}>
            <div className="card h-100">
              <img src={property.image} className="card-img-top" alt={property.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.location}</p>
                <p className="card-text"><strong>{property.price}</strong></p>
                <button
                  className={`btn mt-auto ${property.liked ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleLike(property.id)}
                >
                  {property.liked ? '❤️ Liked' : '♡ Like'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
