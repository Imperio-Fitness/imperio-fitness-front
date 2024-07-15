'use client'
import Image from "next/image";
import MainLogo from '../public/mainLogo.svg';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const route = useRouter()

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    // Clear error message on input change
    setErrorMessage('');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log('Submitting login form:', username, password);

    // Simulação para logar, validção de campo
    // TODO quando o endpoint do back estiver pronto ajustar 
    if (username !== 'valid@email.com' || password !== 'correctPassword') {
      setErrorMessage('Senha incorreta');
    } else {
      route.push('./Dashboard')
    }
  };

  return (
    <div className="w-full h-full pt-14 flex flex-col items-center">
      <Image className="pb-6" alt="MainLogo" width={154} height={154} src={MainLogo} />
      <form className="bg-white w-auto shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Login
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Informe seu E-mail"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
