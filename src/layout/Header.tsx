import React, {memo} from 'react';
import {Box, ButtonGroup, IconButton, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AuthenticationButton from "components/AuthenticationButton";
import shoppingCart from 'assets/icon/shopping-cart.svg';
import heartIcon from 'assets/icon/heart-icon.svg';
import SearchField from "components/SearchField";

function Header() {

  const navigate = useNavigate();

  function goToByHref(href: string) {
    return () => {
      navigate(href);
    }
  }

  return (
    <Stack maxWidth='xl' component='header' direction='row' sx={{py: 2, px: 3, mx: 'auto'}} alignItems='center'
           justifyContent='space-between'>
      <Box sx={{background: '#F7F7F7', height: '46px', width: '94px'}}>
        Logo
      </Box>
      <Stack direction='row' spacing={2} alignItems='center'>
        {
          menuList.map((value, index) =>
            <Typography key={index} onClick={goToByHref(value.href)}>
              {value.title}
            </Typography>)
        }
      </Stack>
      <SearchField/>

      <ButtonGroup>
        <IconButton>
          <Box component='img' src={shoppingCart}/>
        </IconButton>
        <IconButton>
          <Box component='img' src={heartIcon}/>
        </IconButton>
      </ButtonGroup>

      <AuthenticationButton/>
    </Stack>
  );
}

const menuList: { title: string, href: string }[] = [
  {
    title: 'категорії',
    href: '#'
  },
  {
    title: 'доставка та оплата',
    href: '#'
  },
  {
    title: 'про нас',
    href: '#'
  },
  {
    title: 'підтримка',
    href: '#'
  },
];

export default memo(Header);
