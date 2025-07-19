
import React from 'react';

interface GenericPageProps {
  title: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title }) => {
  return (
    <div className="bg-white">
      <section className="bg-tamo-dark-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-lg text-gray-300">Informacija ir naudingi resursai</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-tamo-light-blue border-l-4 border-tamo-blue text-tamo-dark-blue p-6 rounded-r-lg">
            <h2 className="text-2xl font-semibold mb-2">Turinys ruošiamas</h2>
            <p>Šio puslapio turinys šiuo metu yra aktyviai ruošiamas ir netrukus bus pasiekiamas. Atsiprašome už nepatogumus.</p>
          </div>
          
          <div className="mt-12 text-lg text-tamo-dark-gray space-y-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
