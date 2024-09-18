import React from 'react';
import {Avatar, Box, Paper, Stack, Typography} from "@mui/material";
import {StarOutline,} from "@mui/icons-material";

function Reviews() {
  return (
    <Paper sx={{width: '100%'}}>
      <Stack p={3} spacing={3}>
        <Stack direction='row'>
          <StarOutline/>
          <StarOutline/>
          <StarOutline/>
          <StarOutline/>
          <StarOutline/>
        </Stack>

        <Box component='article'>
          <Typography fontWeight={600}> Review title </Typography>
          <Typography> Review body </Typography>
        </Box>

        <Stack component='section' direction='row' spacing={1}>
          <Avatar/>
          <Box>
            <Typography fontWeight={600}>Reviewer name</Typography>
            <Typography>Date (20.08.25)</Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Reviews;
