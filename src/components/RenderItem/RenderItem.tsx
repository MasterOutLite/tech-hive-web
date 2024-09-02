import React, {memo} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';

export interface RenderItemProps {

}

function RenderItem({}: RenderItemProps) {
  return (
    <Stack p={2} maxWidth={260} boxSizing='border-box' border='1px solid #D9D9D9' borderRadius='5px'>
      <Box sx={{
        aspectRatio: '1/1.1', background: '#E3E3E3',
        display: 'flex', // Додаємо flex-контейнер
        justifyContent: 'center', // Центруємо іконку по горизонталі
        alignItems: 'center', // Центруємо іконку по вертикалі
      }} mb={2}>
        <EmojiNatureOutlinedIcon sx={{fontSize: 'inherit', height: '100%', width: '100%'}}/>
      </Box>
      <Stack>
        <Typography>Title</Typography>
        <Typography>0$</Typography>
      </Stack>
    </Stack>
  );
}

export default memo(RenderItem);
