import { Link } from 'react-router-dom';

const Home = () => {

  return (
      <Link to="/about">
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>
          Welcome!
        </h1>
        </div>
      </Link>
  );
};

export default Home;
