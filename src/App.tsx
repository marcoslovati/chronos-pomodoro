import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

function App() {
  return (
    <>
      {/* <Heading attr={123} attr2='texto'>Olá mundo</Heading> */}
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

export { App };
