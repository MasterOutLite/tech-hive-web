import React, {ReactNode} from 'react';
import {Footer, Header} from "./index";

export interface MainProps {
  children: ReactNode
}

function Main({children}: MainProps) {
  return (
    <div>
      <Header/>
      {children}
      {/*<Stack component='main' sx={{minHeight: '100dvh'}} direction='column'>*/}
      {/*  {children}*/}
      {/*</Stack>*/}
      <Footer/>
    </div>
  );
}

export default Main;
