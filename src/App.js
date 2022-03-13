import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './containers/List';
import Lists from './containers/Lists';
import Form from './containers/Form';
import Header from './components/Header';
import ListsContextProvider, {ListsContext} from './Context/ListsContextProvider';
import ItemsContextProvider, {ItemsContext} from './Context/ItemsContextProvider';


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
        <ItemsContextProvider>
          <ListsContext.Consumer>
            {({lists}) => (
              <ItemsContext.Consumer>
                {({items})=>(
                  <Router>
                   <Routes>
                     <Route path='/' element={<Lists lists={lists}/>} />
                     <Route path='/list/:id/new' element={<Form/>}/>
                     <Route path='/list/:id' element={<List lists={lists} listItem={items}/>} />
                   </Routes>
                 </Router>
                )}
              </ItemsContext.Consumer>
            )}
          </ListsContext.Consumer>
        </ItemsContextProvider>
      </ListsContextProvider>
    </AppWrapper>
  </>
);

export default App;