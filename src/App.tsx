import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LucasInput } from './LucasInput'
import { Stack } from "@chakra-ui/react";

type CountryType = {
  name: string;
  population: number;
}

function App() {
  const [count, setCount] = useState(0);

  const [country, setCountry] = useState<CountryType>();

  return (
    <div className="App">
      <Stack gap={4}>
      <LucasInput title="nome" placeholder='insira o seu nome'/>
      <LucasInput title="sobrenome" placeholder='insira o seu sobrenome'/>
      <LucasInput title="telefone" placeholder='insira o seu telefone'/>
      <LucasInput title="cep" placeholder='insira o seu cep'/>

      <LucasInput title="valor definido" value='valorzinho'/>
      </Stack>


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          setCountry({name: 'Brazil', population: 2000000});
          }}>
          count is {count} and country is {country?.name} and the population is {country?.population}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
