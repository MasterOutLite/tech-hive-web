import React, {memo} from 'react';
import {Box, Divider, Stack, styled, Typography} from "@mui/material";

function Footer() {
  return (
    <Stack component='footer'>
      <Divider/>
      <Stack direction='row' justifyContent='center' gap='40px' my='16px'>
        {
          labelList.map((value, index) =>
            <Label key={index}>{
              value
            }</Label>)
        }
      </Stack>
    </Stack>
  );
}

const labelList: string[] = ['Всі права захищені', 'TechHive 2024', 'Cookies'];

const Label = styled(Typography)({
  color: '#B3B3B3'
})
export default memo(Footer);
