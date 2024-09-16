import { Box, Paper, Typography } from '@mui/material';
import burger from '../assets/images/burger.jpg';
import pizza from '../assets/images/pizza.jpg';
import tatli from '../assets/images/tatlı.jpg';
import tavuk from '../assets/images/tavuk.jpg';
import kofte from '../assets/images/kofte.jpeg';
import kahve from '../assets/images/kahve.jpeg';
import kebap from '../assets/images/kebap.jpg';
import kahvalti from '../assets/images/kahvaltı.jpg';
import uzakdogu from '../assets/images/uzakdogu.jpg';
import doner from '../assets/images/döner.jpeg';

const categories = [
  { id: 1, name: 'Burger', image: burger },
  { id: 2, name: 'Pizza', image: pizza },
  { id: 3, name: 'Tatlı', image: tatli },
  { id: 4, name: 'Tavuk', image: tavuk }, 
  { id: 5, name: 'Köfte', image: kofte },
  { id: 6, name: 'Kahve', image: kahve },
  { id: 7, name: 'Kebap & Türk Mutfağı', image: kebap },
  { id: 8, name: 'Kahvaltı & Börek', image: kahvalti },
  { id: 9, name: 'Uzak Doğu', image: uzakdogu },
  { id: 10, name: 'Döner', image: doner },
];

const CategoryList = () => {
  return (
    <Box my={2}>
      <Typography variant="h6">Mutfaklar</Typography>
      <Box 
        display="flex" 
        flexWrap="nowrap" 
        overflow="auto" 
        gap={2} 
        p={1}
      >
        {categories.map(category => (
          <Paper 
            key={category.id} 
            elevation={3} 
            sx={{ 
              overflow: 'hidden', 
              width: { xs: 120, sm: 130, md: 150 }, 
              height: { xs: 160, sm: 180, md: 200 }, 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <img 
                src={category.image} 
                alt={category.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' // Resmi boyuta göre kırpar ve merkezler 
                }} 
              />
            </Box>
            <Typography variant="body2" align="center">{category.name}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryList;
