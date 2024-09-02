import React, {ReactNode} from 'react';
import {Footer, Header} from "./index";
import {Checkbox, Stack} from "@mui/material";

export interface MainProps {
  children: ReactNode
}

function Main({children}: MainProps) {
  return (
    <>
      <Header/>
      <Stack component='main' sx={{minHeight: '100dvh', mx: 'auto'}} direction='column'>
        {children}
      </Stack>
      <Footer/>
    </>
  );
}

export default Main;
