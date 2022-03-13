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

const List = ({ data, loading, error, lists }) => {

  console.log(lists);

  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

//   console.log(location.state)

  const item =
  lists && lists.filter(item => item.id === parseInt(params.id));

  console.log(item);

  return !loading && !error ? (
    <>
      {location && (
        <SubHeader
          title={item[0].title}
          goBack={() => navigate("/")}
          openForm={() => navigate(`${location.pathname}/new`)}
        />
      )}
      <ListItemWrapper>
        {item && item.map(item => <ListItem key={item.id} data={item} />)}
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