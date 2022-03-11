import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/SubHeader';
import ListItem from '../components/ListItem';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = ({ data, loading, error, history }) => {

  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

//   console.log(location.state)

  const items =
    data && data.filter(item => item.listId === parseInt(params.id));

  return !loading && !error ? (
    <>
      {location && (
        <SubHeader
          goBack={() => navigate("/")}
          openForm={() => navigate(`${location.pathname}/new`)}
        />
      )}
      <ListItemWrapper>
        {items && items.map(item => <ListItem key={item.id} data={item} />)}
      </ListItemWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default withDataFetching({
  dataSource:
    'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/items',
})(List);