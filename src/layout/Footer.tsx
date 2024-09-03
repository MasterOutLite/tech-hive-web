import React, {memo} from 'react';
import {Box, Container, Divider, Grid2, Stack, styled, Typography} from "@mui/material";

function Footer() {
  return (
    <Stack component='footer'>
      <Divider/>
      <Container>
        <Stack direction='row' justifyContent='center' spacing={6} my='16px'>
          {
            labelList.map((value, index) =>
              <Label key={index}>{
                value
              }</Label>)
          }
        </Stack>
      </Container>
    </Stack>
  );
}

const labelList: string[] = ['Всі права захищені', 'TechHive 2024', 'Cookies'];

const Label = styled(Typography)({
  color: '#B3B3B3'
})
export default memo(Footer);
