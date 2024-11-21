import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: "Seveston Ironman SV-7", price: 9459, desc: "Luxury watch", img: "/images/7471-03.WEBP" },
    { id: 2, name: "Rolex Submariner", price: 150000, desc: "Classic luxury watch", img: "/images/rolex-submariner.JPG" },
    { id: 3, name: "Casio G-Shock", price: 10000, desc: "Durable sports watch", img: "/images/casio-gshock.JPG" },
    { id: 4, name: "Omega Speedmaster", price: 250000, desc: "Space exploration watch", img: "/images/omega-speedmaster.WEBP" },
    { id: 5, name: "moscow russia", price: 50000, desc: "Classic luxury watch", img: "/images/moscow-russia.WEBP" },
    { id: 6, name: "Luxury watch2", price: 250000, desc: "Luxury watch", img: "/images/Luxury-watch2.JPG" },
  ];



  
  return (
    <div className='watches'>
      {watchData.map((watch) => (
        <div key={watch.id} className='watch-card'>
          <img src={watch.img} 
            alt={watch.name} style={{ width: "300px", height: "auto" }} />
            <h3>{watch.name}</h3>
            <p>{watch.desc}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;