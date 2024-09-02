import React, {memo} from 'react';
import {Stack} from "@mui/material";
import RenderItem from "components/RenderItem";

export interface HomePageProps {

}

function HomePage({}: HomePageProps) {
  return (
    <Stack>
      <RenderItem/>
    </Stack>
  );
}

export default memo(HomePage);
