import React from 'react';
import {
  Accordion, AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid2,
  MenuItem,
  Select,
  Stack,
  Typography
} from "@mui/material";
import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Reviews from "components/Reviews";

function ItemPage() {
  return (
    <Container maxWidth='xl'>
      <Grid2 container spacing={4} py={8}>
        <Grid2 size={{xs: 12, md: 6}}>
          <Box>
            <Box sx={{
              aspectRatio: '1/1.1', background: '#E3E3E3',
              display: 'flex', // Додаємо flex-контейнер
              justifyContent: 'center', // Центруємо іконку по горизонталі
              alignItems: 'center', // Центруємо іконку по вертикалі
            }}>
              <EmojiNatureOutlinedIcon sx={{fontSize: 'inherit', height: '100%', width: '100%'}}/>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{xs: 12, md: 6}}>
          <Stack spacing={1} minHeight='100%'>
            <Typography variant='h6'>Text Heading</Typography>
            <Stack direction='row'>
              <Chip label='text' color='success'/>
            </Stack>
            <Typography variant='h3' fontWeight={600}>$50</Typography>

            <Typography variant='body2'>Description</Typography>

            <Grid2 container spacing={2}>
              <Grid2 size={{xs: 6}}>
                <Typography variant='body2' mb={1}>Label</Typography>
                <Select fullWidth value='' displayEmpty>
                  <MenuItem value=''>Value</MenuItem>
                </Select>
              </Grid2>

              <Grid2 size={{xs: 6}}>
                <Typography variant='body2' mb={1}>Label</Typography>
                <Select fullWidth value='' displayEmpty>
                  <MenuItem value=''>Value</MenuItem>
                </Select>
              </Grid2>
            </Grid2>

            <Button variant='contained'>Button</Button>

            <Box sx={{pt: 1}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    marginY: 1, // Єдиний мержен для всіх станів
                    '& .MuiAccordionSummary-content': {
                      marginY: 1, // Прибирає додаткові мержени вмісту
                    },
                    '& .MuiAccordionSummary-contentGutters': {
                      marginY: 1, // Також для стану з gutters
                    },
                    minHeight: 'auto', // Прибирає мінімальну висоту
                    '&.Mui-expanded': {
                      minHeight: 'auto', // Не додає відступів при розгортанні
                    },
                  }}
                >
                  Title
                </AccordionSummary>
                <AccordionDetails sx={{
                  paddingTop: 0, // Прибирає padding зверху
                }}>
                  Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                </AccordionDetails>
              </Accordion>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>

      <Typography>
        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
        perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential
        lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft
        power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable
        officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
      </Typography>

      <Box py={8}>
        <Typography variant='h6' mb={6} fontWeight={600}>Latest reviews</Typography>
        <Grid2 container spacing={4}>
          {
            [1, 2, 3].map((value, index) =>
              <Grid2 key={value} size={{xs: 12, sm: 6, md: 4,}}>
                <Reviews/>
              </Grid2>)
          }
        </Grid2>
      </Box>
    </Container>
  );
}

export default ItemPage;
