import React, {memo, useState} from 'react';
import {Box, Button, IconButton, Link, Stack, Typography} from "@mui/material";
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';
import {useNavigate} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {AppRoutes} from "router";
import {Link as RouterLink} from "react-router-dom";

export interface RenderItemProps {
  maxWidth?: number | string;
}

function RenderItem({maxWidth = 260}: RenderItemProps) {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState<boolean>(false)

  function switchFollow() {
    setIsFollow(s => !s);
  }

  function goToByHref(href: string) {
    return () => {
      navigate(href);
    }
  }

  return (

    <Stack p={2} maxWidth={maxWidth} boxSizing='border-box'
           border='1px solid #D9D9D9' borderRadius='5px'>
      <Box sx={{
        aspectRatio: '1/1.1', background: '#E3E3E3',
        display: 'flex', // Додаємо flex-контейнер
        position: 'relative',
        justifyContent: 'center', // Центруємо іконку по горизонталі
        alignItems: 'center', // Центруємо іконку по вертикалі
      }} mb={2}>
        <EmojiNatureOutlinedIcon sx={{fontSize: 'inherit', height: '100%', width: '100%'}}/>

        <IconButton sx={{position: 'absolute', right: 0, top: 0}} onClick={switchFollow}>
          {
            isFollow ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>
          }
        </IconButton>
      </Box>

      <Stack>

        <Link component={RouterLink} to={AppRoutes.Item + `/fg`}
              variant='body1'
              underline="hover">
          Title
        </Link>
        <Typography>Description</Typography>
        <Typography fontWeight={600}>0$</Typography>
      </Stack>
      <Stack mt={2} direction='row' alignItems='center' justifyContent='space-between'>
        <Button variant='contained'>Buy now</Button>
        <ShoppingCartOutlinedIcon fontSize='large'/>
      </Stack>
    </Stack>

  );
}

export default memo(RenderItem);
