
import React from 'react';
import { Link } from 'react-router-dom';

const AdvantageCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
    <div className="text-tamo-blue text-5xl mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-tamo-dark-blue mb-2">{title}</h3>
    <p className="text-tamo-text-gray">{text}</p>
  </div>
);

const NewsCard: React.FC<{ imageUrl: string; title: string; date: string }> = ({ imageUrl, title, date }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
      <p className="text-sm text-tamo-text-gray mb-2">{date}</p>
      <h3 className="text-lg font-semibold text-tamo-dark-blue hover:text-tamo-blue transition-colors cursor-pointer">{title}</h3>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="absolute inset-0 bg-tamo-dark-blue opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Elektroninis dienynas TAMO</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Patogus ir šiuolaikiškas įrankis mokyklos bendruomenei
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/prisijungti" className="bg-tamo-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Jungtis prie dienyno
            </Link>
            <Link to="/apie-tamo" className="bg-white text-tamo-dark-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Sužinoti daugiau
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-tamo-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tamo-dark-blue mb-12">TAMO privalumai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard icon="fa-rocket" title="Greitis ir patogumas" text="Greita prieiga prie visos svarbiausios informacijos bet kuriuo metu." />
            <AdvantageCard icon="fa-users" title="Visa bendruomenė" text="Apjungiame mokytojus, mokinius ir tėvus į vieną bendrą sistemą." />
            <AdvantageCard icon="fa-chart-line" title="Pažangos stebėjimas" text="Detali analizė ir ataskaitos padeda sekti mokymosi rezultatus." />
            <AdvantageCard icon="fa-shield-alt" title="Saugumas" text="Užtikriname aukščiausio lygio duomenų saugumą ir privatumą." />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-tamo-dark-blue mb-12 text-center">Naujienos ir aktualijos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard imageUrl="https://picsum.photos/400/300?random=1" title="Startuoja nauji TAMO moduliai mokykloms" date="2024-09-01" />
            <NewsCard imageUrl="https://picsum.photos/400/300?random=2" title="Kaip efektyviai naudotis dienynu: patarimai tėvams" date="2024-08-25" />
            <NewsCard imageUrl="https://picsum.photos/400/300?random=3" title="Mokytojų konferencija: „Skaitmeninė transformacija“" date="2024-08-15" />
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-12 bg-tamo-gray">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold text-tamo-dark-blue mb-8 text-center">Partneriai</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale hover:grayscale-0 transition-all">
                <p className="text-2xl font-bold text-gray-500">Švietimo grupė</p>
            </div>
             <div className="grayscale hover:grayscale-0 transition-all">
                <p className="text-2xl font-bold text-gray-500">Mokyklų Lyderiai</p>
            </div>
             <div className="grayscale hover:grayscale-0 transition-all">
                <p className="text-2xl font-bold text-gray-500">IT Inovacijos</p>
            </div>
             <div className="grayscale hover:grayscale-0 transition-all">
                <p className="text-2xl font-bold text-gray-500">Ateities Fondas</p>
            </div>
             <div className="grayscale hover:grayscale-0 transition-all">
                <p className="text-2xl font-bold text-gray-500">Geros Idėjos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
