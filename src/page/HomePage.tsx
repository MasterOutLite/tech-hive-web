import React, {memo} from 'react';
import {Box, Button, Container, Grid2, Stack, Typography} from "@mui/material";
import RenderItem from "components/RenderItem";
import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";

export interface HomePageProps {

}

function HomePage({}: HomePageProps) {
  return (
    <Container maxWidth='xl' sx={{pb: 6}}>
      <Stack>
        <Grid2 container height={{xs: 'auto', md: 530}} spacing={4} py={6} px={4}>
          <Grid2 component='article' size={{xs: 12, md: 4}}>
            <Stack spacing={2} display='flex' flexDirection='column'>
              <Stack>
                <Typography variant='h6'>Heading</Typography>
                <Typography variant='subtitle1'>Subheading</Typography>
              </Stack>
              <Typography variant='body1'>Body text for your whole article or post. We’ll put in some lorem ipsum to
                show
                how a filled-out
                page might look:</Typography>
              <Typography variant='body1'>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza
                conversation
                exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. </Typography>

              <Button variant='contained' sx={{alignSelf: 'start'}}>call to action</Button>
            </Stack>
          </Grid2>

          <Grid2 size={{xs: 12, md: 8}} sx={{
            maxHeight: '100%',
            background: '#E3E3E3',
            display: 'flex', // Додаємо flex-контейнер
            justifyContent: 'center', // Центруємо іконку по горизонталі
            alignItems: 'center', // Центруємо іконку по вертикалі
          }} mb={2}>
            <EmojiNatureOutlinedIcon sx={{fontSize: 'inherit', height: '100%', width: '100%'}}/>
          </Grid2>
        </Grid2>


        <Box>
          <Typography variant='h6' mb={3} textTransform='uppercase'>Новинки</Typography>
          <Stack direction='row'>
            <RenderItem/>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default memo(HomePage);
