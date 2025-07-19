
import React from 'react';

const ContactInfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="text-center">
    <div className="mx-auto bg-tamo-light-blue text-tamo-blue w-20 h-20 rounded-full flex items-center justify-center mb-4">
      <i className={`fas ${icon} text-3xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-tamo-dark-blue mb-2">{title}</h3>
    <div className="text-tamo-text-gray">{children}</div>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tamo-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-tamo-dark-blue">Susisiekite su mumis</h1>
          <p className="mt-4 text-lg text-tamo-text-gray">Turite klausimų? Mielai Jums padėsime.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ContactInfoCard icon="fa-map-marker-alt" title="Adresas">
            <p>Placeholder g. 123,</p>
            <p>LT-01234 Vilnius</p>
          </ContactInfoCard>
          <ContactInfoCard icon="fa-phone" title="Telefonas">
            <p>Konsultacijos klientams:</p>
            <p className="font-semibold">+370 5 123 4567</p>
          </ContactInfoCard>
          <ContactInfoCard icon="fa-envelope" title="El. Paštas">
            <p>Bendri klausimai:</p>
            <p className="font-semibold">info@tamo-clone.lt</p>
          </ContactInfoCard>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="bg-tamo-gray py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-tamo-dark-blue mb-6">Parašykite mums</h2>
              <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-tamo-text-gray">Vardas</label>
                    <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-tamo-blue focus:border-tamo-blue" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tamo-text-gray">El. Paštas</label>
                    <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-tamo-blue focus:border-tamo-blue" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-tamo-text-gray">Tema</label>
                  <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-tamo-blue focus:border-tamo-blue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tamo-text-gray">Jūsų žinutė</label>
                  <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-tamo-blue focus:border-tamo-blue"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-tamo-blue text-white font-bold py-3 px-6 rounded-full hover:bg-tamo-dark-blue transition-colors duration-300">
                    Siųsti žinutę
                  </button>
                </div>
              </form>
            </div>
            <div className="h-full min-h-[400px] lg:min-h-full">
              <h2 className="text-3xl font-bold text-tamo-dark-blue mb-6 lg:invisible">Mūsų vieta</h2>
              <div className="bg-gray-300 w-full h-full rounded-lg shadow-lg flex items-center justify-center">
                 <p className="text-gray-500">Žemėlapio vieta (placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
