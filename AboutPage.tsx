
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tamo-dark-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Apie TAMO</h1>
          <p className="mt-4 text-lg text-gray-300">Sujungiame technologijas ir švietimą</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-lg text-tamo-dark-gray">
          <p className="mb-6">
            TAMO yra moderni, integruota švietimo valdymo platforma, skirta palengvinti mokyklų, mokytojų, mokinių ir jų tėvų kasdienybę. Mūsų misija – teikti inovatyvius ir patogius skaitmeninius įrankius, kurie padeda gerinti mokymosi procesą, skatina bendradarbiavimą ir užtikrina skaidrumą.
          </p>
          <p className="mb-6">
            Nuo pat įkūrimo pradžios siekiame, kad mūsų sistema būtų ne tik funkcionali, bet ir intuityvi bei lengvai pritaikoma kiekvienos mokyklos individualiems poreikiams. Didžiuojamės galėdami prisidėti prie Lietuvos švietimo sistemos modernizavimo ir kurti vertę visai bendruomenei.
          </p>
          <div className="my-12">
            <img src="https://picsum.photos/800/400?random=about" alt="Team working" className="rounded-lg shadow-xl" />
          </div>
          <h2 className="text-3xl font-bold text-tamo-dark-blue mb-4">Mūsų vertybės</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li><span className="font-semibold">Inovacijos:</span> Nuolat ieškome naujų būdų tobulinti savo produktus ir paslaugas.</li>
            <li><span className="font-semibold">Partnerystė:</span> Glaudžiai bendradarbiaujame su mokyklomis, kad suprastume ir patenkintume jų lūkesčius.</li>
            <li><span className="font-semibold">Patikimumas:</span> Užtikriname sistemos stabilumą ir duomenų saugumą.</li>
            <li><span className="font-semibold">Paprastumas:</span> Kuriame įrankius, kuriais paprasta ir malonu naudotis.</li>
          </ul>
          <p>
            Dėkojame, kad domitės TAMO. Kviečiame susisiekti, jei turite klausimų ar norite sužinoti daugiau apie mūsų sprendimus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
