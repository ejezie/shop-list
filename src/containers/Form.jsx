import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import FormItem from '../components/FormItem';
import Button from '../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const Form = ( ) => {

  let location = useLocation();
  let navigate = useNavigate();

  return(

  <>
    {location && (
      <SubHeader goBack={() => navigate(-1)} title={`Add Item`} />
    )}
    <FormWrapper>
      <form>
        <FormItem id='title' label='Title' placeholder='Insert title' />
        <FormItem
          id='quantity'
          label='Quantity'
          type='number'
          placeholder='0'
        />
        <FormItem id='price' label='Price' type='number' placeholder='0.00' />
        <SubmitButton>Add Item</SubmitButton>
      </form>
    </FormWrapper>
  </>
)
};

export default Form;