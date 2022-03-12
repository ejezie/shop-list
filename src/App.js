import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './containers/List';
import Lists from './containers/Lists';
import Form from './containers/Form';
import Header from './components/Header';
import ListsContextProvider, {ListsContext} from './Context/ListsContextProvider';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <ListsContextProvider>
        <ListsContext.Consumer>
          {({lists}) => {
            <Router>
            <Routes>
              <Route path='/' element={<Lists/>} />
              <Route path='/list/:id/new' element={<Form/>} />
              <Route path='/list/:id' element={<List/>} />
            </Routes>
          </Router>
          }}
        </ListsContext.Consumer>
      </ListsContextProvider>
    </AppWrapper>
  </>
);

export default App;