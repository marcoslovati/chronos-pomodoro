import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

function App() {
  // const [numero, setNumero] = useState(0); // não uso atribuição diretamente
  const [numero, setNumero] = useState(() => {
    // lazy initialization
    return 0;
  });

  function handleClick() {
    // setNumero(numero + 1); não fazer dessa forma para evitar que a atualização do valor ocorra somente uma vez
    // setNumero(numero + 1);
    // setNumero(numero + 1);

    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1);
  }
  return (
    <>
      {/* <Heading attr={123} attr2='texto'>Olá mundo</Heading> */}

      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='number'
              labelText={numero.toString()}
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'></div>
          <Cycles />

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
