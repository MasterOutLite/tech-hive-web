import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControlLabel,
  Grid2,
  Paper,
  Slider,
  Stack,
  Typography
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import RenderItem from "components/RenderItem";

function FilterPage() {
  const [value, setValue] = React.useState<number[]>([0, 60000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Container sx={{pb: 10}}>
      <Grid2 container>
        <Grid2 size={{xs: 3}} display={{xs: 'none', sm: 'block'}}>
          <Paper>
            <Stack p={2}>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>

              <Typography>Text</Typography>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                max={60000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
              />
            </Stack>
          </Paper>
        </Grid2>

        <Grid2 size={{xs: 12, sm: 9}}>

          <Stack direction='row' pb={6} flexWrap='wrap' alignItems='flex-start' justifyContent='flex-end' spacing={1}>
            <Button variant='contained'>New</Button>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={1}>
              <Button variant='contained'>Price ascending</Button>
              <Button variant='contained'>Price descending</Button>
            </Stack>
          </Stack>

          <Box>
            <Grid2 container spacing={1}>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(value =>
                  <Grid2 key={value} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <RenderItem maxWidth={'100%'}/>
                  </Grid2>
                )
              }
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default FilterPage;
