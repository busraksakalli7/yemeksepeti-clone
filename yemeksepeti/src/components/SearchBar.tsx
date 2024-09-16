import React from 'react';
import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600,
        borderRadius: '30px',
        backgroundColor: '#f5f5f5',
        padding: '4px 8px',
      }}
    >
      <TextField
        variant="standard"
        placeholder="Yemek, mutfak veya restoran arayın"
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiInputBase-input': {
            padding: '8px 8px',
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;
