
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-tamo-gray p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-tamo-dark-blue">Prisijungti</h1>
            <p className="text-tamo-text-gray mt-2">Prisijunkite prie TAMO dienyno</p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-tamo-text-gray">
                Vartotojo vardas
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-tamo-blue focus:border-tamo-blue"
                placeholder="pvz., vardas.pavardenis"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-tamo-text-gray">
                Slaptažodis
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-tamo-blue focus:border-tamo-blue"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-tamo-blue focus:ring-tamo-blue border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-tamo-text-gray">
                  Prisiminti mane
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-tamo-blue hover:text-tamo-dark-blue">
                  Pamiršote slaptažodį?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-tamo-blue hover:bg-tamo-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tamo-blue transition-colors duration-300"
              >
                Prisijungti
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-tamo-text-gray">
              Neturite paskyros? <Link to="/susisiekite" className="font-medium text-tamo-blue hover:text-tamo-dark-blue">Susisiekite su mumis</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
