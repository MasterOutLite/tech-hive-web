import React from 'react';
import {Button, Stack, styled} from "@mui/material";

const CustomButton = styled(Button)(({theme}) => ({
  borderRadius: 10, // змінити радіус
  padding: '8px 16px', // змінити відступи
  textTransform: 'none', // прибрати всі великі літери
  fontWeight: 'bold', // зробити текст жирним
  backgroundColor: '#333', // встановити власний колір фону
  color: '#fff', // встановити колір тексту
  '&:hover': {
    backgroundColor: '#555', // змінити колір при наведенні
  },
}));

function AuthenticationButton() {
  return (
    <Stack spacing={2} direction='row'>
      <Button variant='contained' sx={{height: '32px', py: '8px', px: 0, textTransform: 'none', lineHeight: 0}}>
        Sign in</Button>
      <Button variant='contained' color='secondary' sx={{height: '32px', py: '8px', px: 0, textTransform: 'none'}}>
        Sign up</Button>
    </Stack>
  );
}

export default AuthenticationButton;
