import React, { useState } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Divider, Paper, IconButton, InputBase, Slider, FormGroup, Checkbox, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function FilterSidebar() {
  const [sepetTutari, setSepetTutari] = useState<number>(450);

  const handleSepetTutariChange = (event: Event, newValue: number | number[]) => {
    setSepetTutari(newValue as number);
  };

  const marks = [
    { value: 0, label: '0 TL' },
    { value: 1000, label: 'Tümü' },
  ];

  return (
    <Box
      sx={{
        width: '250px',
        height: '100vh', // Yüksekliği ekran yüksekliğine eşitle
        overflowY: 'auto', // Dikey kaydırma çubuğu
        overflowX: 'hidden',
        border: '1px solid #ccc', // Kutu sınırı
        borderRadius: '8px', // Köşe yuvarlatma
        padding: '16px',
        position: 'sticky', // Sabit pozisyon
        top: 0, // Üstten sıfır mesafe
        marginLeft:'-100px'
      }}
    >
      <FormControl component="fieldset">
        <Typography variant="h6" gutterBottom>Filtrele</Typography>
        <Divider sx={{ marginBottom: '16px' }} />

        <RadioGroup
          aria-labelledby="filter-radio-buttons-group-label"
          defaultValue="Önerilen(Varsayılan)"
          name="filter-radio-buttons-group"
        >
          <label>Sıralama</label>
          <FormControlLabel value="Önerilen(Varsayılan)" control={<Radio />} label="Önerilen (Varsayılan)" />
          <FormControlLabel value="Teslimat Süresi" control={<Radio />} label="Teslimat Süresi" />
          <FormControlLabel value="Mesafe" control={<Radio />} label="Mesafe" />
          <FormControlLabel value="Restoran Puanı" control={<Radio />} label="Restoran Puanı" />
        </RadioGroup>

        <Divider sx={{ margin: '16px 0' }} />
        <Typography variant="h6" gutterBottom>Hızlı Filtreler</Typography>
        <Chip variant="outlined" size="small" label="Express teslimat" />
        <Chip variant="outlined" size="small" label="Süper Restoran" />
        <Chip variant="outlined" size="small" label="Promosyonlu" />

        <Divider sx={{ margin: '16px 0' }} />
        <FormGroup>
          <label>Mutfak</label>
          {/* Özelleştirilmiş Arama Çubuğu */}
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '20px',
              marginBottom: '16px',
              boxShadow: 'none',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
            }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Mutfak arayın"
              inputProps={{ 'aria-label': 'search cuisines' }}
            />
          </Paper>

          <FormControlLabel control={<Checkbox />} label="Balık ve Deniz Ürünleri" />
          <FormControlLabel control={<Checkbox />} label="Burger" />
          <FormControlLabel control={<Checkbox />} label="Çiğköfte" />
          <FormControlLabel control={<Checkbox />} label="Dondurma" />
          <FormControlLabel control={<Checkbox />} label="Döner" />
          <FormControlLabel control={<Checkbox />} label="Dünya Mutfağı" />
          <FormControlLabel control={<Checkbox />} label="Ev Yemekleri" />
          <FormControlLabel control={<Checkbox />} label="Kahvaltı & Börek" />
          <FormControlLabel control={<Checkbox />} label="Kahve" />
        </FormGroup>

        <Divider sx={{ margin: '16px 0' }} />
        <Typography variant="h6" gutterBottom>ÖDEME SEÇENEKLERİ</Typography>
        <RadioGroup
          aria-labelledby="filter-radio-buttons-group-label"
          defaultValue="ödeme"
          name="filter-radio-buttons-group"
        >
          <FormControlLabel value="Tümü" control={<Radio />} label="Tümü" />
          <FormControlLabel value="Cüzdan" control={<Radio />} label="Cüzdan" />
          <FormControlLabel value="Nakit" control={<Radio />} label="Nakit" />
          <FormControlLabel value="CIO Card" control={<Radio />} label="CIO Card" />
          <FormControlLabel value="Ticket Restaurant Online" control={<Radio />} label="Ticket Restaurant Online" />
          <FormControlLabel value="iyzico ile öde" control={<Radio />} label="iyzico ile öde" />
        </RadioGroup>
        
        {/* Minimum Sepet Tutarı Slider */}
        <Divider sx={{ margin: '16px 0' }} />
        <Typography variant="h6" gutterBottom>Minimum Sepet Tutarı</Typography>
        <Slider
          value={sepetTutari}
          onChange={handleSepetTutariChange}
          aria-labelledby="minimum-sepet-tutari-slider"
          valueLabelDisplay="on"
          step={50}
          min={0}
          max={1000}
          marks={marks}
          sx={{
            '& .MuiSlider-thumb': {
              color: 'black',
            },
            '& .MuiSlider-track': {
              color: '#424242',
            },
            '& .MuiSlider-rail': {
              color: '#bdbdbd',
            },
            '& .MuiSlider-valueLabel': {
              backgroundColor: '#424242',
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
