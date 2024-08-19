import React, {memo} from 'react';

export interface RenderItemProps {

}

function RenderItem({}: RenderItemProps) {
  return (
    <div></div>
  );
}

export default memo(RenderItem);
