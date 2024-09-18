import React, {memo} from 'react';
import {Box, Button, ButtonGroup, IconButton, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AuthenticationButton from "components/AuthenticationButton";
import shoppingCart from 'assets/icon/shopping_cart.svg';
import heartIcon from 'assets/icon/heart_icon.svg';
import logo from 'assets/icon/logo.png';
import SearchField from "components/SearchField";
import {AppRoutes} from "router";
import { Link } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  function goToByHref(href: string) {
    return () => {
      navigate(href);
    }
  }

  return (
    <Stack maxWidth='xl' component='header' direction='row' sx={{py: 2, px: 3, mx: 'auto'}}
           alignItems='center'
           justifyContent='space-between'>

      <Link to={AppRoutes.Home}>
        <Box component='img' src={logo} maxWidth={'100%'} maxHeight={46} onClick={goToByHref(AppRoutes.Home)}/>
      </Link>

      {/*<Stack direction='row' spacing={2} alignItems='center' sx={{display: {xs: 'none', md: 'flex'}}}>*/}
      {/*  {*/}
      {/*    menuList.map((value, index) =>*/}
      {/*      <Typography key={index} onClick={goToByHref(value.href)}>*/}
      {/*        {value.title}*/}
      {/*      </Typography>)*/}
      {/*  }*/}
      {/*</Stack>*/}
      <SearchField/>

      <Button variant='outlined' onClick={goToByHref(AppRoutes.Category)}>Категорії</Button>

      <Stack direction='row' alignItems='center' spacing={1}>
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
