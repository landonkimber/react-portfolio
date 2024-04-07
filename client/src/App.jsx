import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
