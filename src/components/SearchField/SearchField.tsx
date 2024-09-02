import React, {memo} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';


export interface SearchFieldProps {
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchField({value, onChange}: SearchFieldProps) {
  return (<>
      <Search variant="outlined"
              value={value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}/>
    </>
  );
}

const Search = styled(TextField)({
  padding: 0,
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
    paddingRight: 0,
    paddingLeft: 0,
    padding: '8px 12px',
  },
  '& .MuiInputBase-input': {
    padding: '8px 16px', // Налаштування внутрішніх відступів для тексту
    margin: 0, // Прибирання зовнішніх відступів
    height: '16px', // Висота тексту, щоб зменшити зайві відступи
    boxSizing: 'border-box', // Врахування рамки та відступів
  },
});

export default memo(SearchField);
