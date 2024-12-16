import React from 'react';
import Image from 'next/image';

const Watches = () => {
  const watchData = [
    { id: 1, name: "Seveston Ironman SV-7", price: 9459, desc: "Luxury watch", img: "/images/7471-03.webp" },
    { id: 2, name: "Rolex Submariner", price: 150000, desc: "Classic luxury watch", img: "/images/rolex-submariner.jpg" },
    { id: 3, name: "Casio G-Shock", price: 10000, desc: "Durable sports watch", img: "/images/casio-gshock.jpg" },
    { id: 4, name: "Omega Speedmaster", price: 250000, desc: "Space exploration watch", img: "/images/omega-speedmaster.webp" },
    { id: 5, name: "moscow russia", price: 50000, desc: "Classic luxury watch", img: "/images/moscow-russia.webp" },
    { id: 6, name: "Luxury watch2", price: 250000, desc: "Luxury watch", img: "/images/Luxury-watch2.jpg" },
  ];



  
  return (
    <div className='watches'>
      {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
        <Image src={watch.img} alt={watch.name} width={300} height={300} />
        <h2>{watch.name}</h2>
        <p>{watch.desc}</p>
        <p>Price: ₹{watch.price}</p>
      </div>
      ))}
    </div>
  );
};

export default Watches;