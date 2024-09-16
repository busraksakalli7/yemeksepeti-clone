import React, { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, Box, IconButton, Typography, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../assets/images/Yemeksepeti_page-0001.jpg';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    console.log(`Seçilen dil: ${language}`);
    handleLanguageClose();
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenEmailDialog = () => {
    setOpenEmailDialog(true);
  };

  const handleCloseEmailDialog = () => {
    setOpenEmailDialog(false);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', padding: '10px 20px', height: 'auto', marginBottom: '20px' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '0', width: '100%' }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%', 
            marginBottom: '10px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <img src={Logo} alt="Yemeksepeti Logo" style={{ height: '100px', marginLeft: '20px' }} />
          
          <TextField 
            variant="outlined" 
            placeholder="Adres Giriniz.." 
            size="small" 
            sx={{ 
              flex: 1,
              borderRadius: '10px',
              marginRight: '20px',
              marginLeft: { xs: '20px', sm: '50px', md: '100px', lg: '200px' },
              minWidth: { xs: '100%', sm: 'auto' },
              marginTop: { xs: '10px', sm: '0' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              }
            }} 
          />
          
          <Box 
            sx={{
              display: 'flex',
              gap: '10px',
              marginTop: { xs: '10px', sm: '0' }
            }}
          >
            <Button 
              color="inherit" 
              sx={{ textTransform: 'none', borderRadius:'13px' }}
              onClick={handleOpenDialog} // Dialog'u açacak
            >
              Giriş Yap
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#ea004b',
                borderRadius:'15px',
                '&:hover': {
                  backgroundColor: '#92002f',
                  transform: 'scale(1.05)',
                  borderRadius:'13px'
                },
                transition: 'transform 0.2s ease-in-out',
              }}
              onClick={handleOpenDialog} // Dialog'u açacak
            >
              Kayıt Ol
            </Button>

            <IconButton onClick={handleLanguageClick}>
              <LanguageRoundedIcon />
              <Typography variant="body2" sx={{ marginLeft: '4px' }}>TR</Typography>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={() => handleLanguageChange('tr')}>TR</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('en')}>ENG</MenuItem>
            </Menu>
            <IconButton>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'start', 
            gap: { xs: '10px', sm: '20px' }, 
            marginLeft: { xs: '10px', sm: '50px' },
            flexWrap: 'wrap',
            marginTop: { xs: '10px', sm: '0' }
          }}
        >
          <IconButton sx={{ flexDirection: 'column', color: 'black' }}>
            <MopedOutlinedIcon />
            <Typography variant="caption">Restoran</Typography>
          </IconButton>

          <IconButton sx={{ flexDirection: 'column', color: 'black' }}>
            <DirectionsRunIcon />
            <Typography variant="caption">Gel Al</Typography>
          </IconButton>

          <IconButton sx={{ flexDirection: 'column', color: 'black' }}>
            <ShoppingBagOutlinedIcon />
            <Typography variant="caption">Market</Typography>
          </IconButton>

          <IconButton sx={{ flexDirection: 'column', color: 'black' }}>
            <StorefrontOutlinedIcon />
            <Typography variant="caption">Mahalle</Typography>
          </IconButton>
        </Box>
      </Toolbar>

      {/* İlk Dialog Bileşeni */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="xs" 
        fullWidth 
        sx={{ 
          '& .MuiPaper-root': {
            borderRadius: '20px', // Kenarları daha oval yapmak için
          },
        }}
      >
        <DialogContent sx={{ padding: '24px', position: 'relative' }}>
          {/* Kapatma Butonu */}
          <IconButton 
            onClick={handleCloseDialog} 
            sx={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px' 
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Başlık */}
          <Typography variant="h5" gutterBottom>
            Hoş geldin!
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '24px' }}>
            Devam etmek için kayıt ol ya da giriş yap
          </Typography>

          {/* Facebook ile Devam Et */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<FacebookIcon />}
            sx={{ 
              backgroundColor: '#1877F2', 
              color: '#fff', 
              marginBottom: '16px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1557bf',
              }
            }}
          >
            Facebook ile Devam Et
          </Button>

          {/* Google ile Devam Et */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ 
              borderColor: '#dadce0', 
              color: '#3c4043', 
              marginBottom: '16px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f1f3f4',
              }
            }}
          >
            Google ile devam edin
          </Button>

          {/* Ya da */}
          <Typography variant="body2" align="center" sx={{ marginBottom: '16px' }}>
            ya da
          </Typography>

          {/* Giriş Yap */}
          <Button
            variant="contained"
            fullWidth
            sx={{ 
              backgroundColor: '#ea004b', 
              color: '#fff', 
              marginBottom: '16px',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#92002f',
              }
            }}
            onClick={handleOpenEmailDialog} // Email dialogunu açacak
          >
            Giriş Yap
          </Button>

          {/* Kayıt Ol */}
          <Button
            variant="outlined"
            fullWidth
            sx={{ 
              borderColor: '#dadce0', 
              color: '#3c4043',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#f1f3f4',
              }
            }}
            onClick={handleOpenEmailDialog} // Email dialogunu açacak
          >
            Kayıt Ol
          </Button>
        </DialogContent>
      </Dialog>

      {/* Email ile Giriş/Kayıt Dialog Bileşeni */}
      <Dialog 
        open={openEmailDialog} 
        onClose={handleCloseEmailDialog} 
        maxWidth="xs" 
        fullWidth 
        sx={{ 
          '& .MuiPaper-root': {
            borderRadius: '20px', 
          },
        }}
      >
        <DialogContent sx={{ padding: '24px', position: 'relative' }}>
          <IconButton 
            onClick={handleCloseEmailDialog} 
            sx={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px' 
            }}
          >
            <CloseIcon />
          </IconButton>
          <EmailIcon/>
          <Typography variant="h5" gutterBottom>
            Email ile Giriş Yap/Kayıt Ol
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ marginBottom: '16px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px', 
              }, 
            }}
          />
          <TextField
            fullWidth
            label="Şifre"
            type="password"
            variant="outlined"
            sx={{ 
              marginBottom: '24px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px', 
              },
            }}
/>

          <Button
            variant="contained"
            fullWidth
            sx={{ 
              backgroundColor: '#ea004b', 
              color: '#fff', 
              marginBottom: '16px',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#92002f',
              }
            }}
          >
            Giriş Yap
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ 
              borderColor: '#dadce0', 
              color: '#3c4043',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#f1f3f4',
              }
            }}
          >
            Kayıt Ol
          </Button>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
