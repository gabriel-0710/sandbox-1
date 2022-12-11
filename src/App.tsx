import { Login } from "./Login"

function App() {
  const [count, setCount] = useState(0);

  const [country, setCountry] = useState<CountryType>();

  return (
    <Login/>
  )
}

export default App
