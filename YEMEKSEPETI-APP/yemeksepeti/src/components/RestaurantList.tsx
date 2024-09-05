import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import mcdonaldsImage from '../assets/images/mcdonalds.jpg';
import burgerkingImage from '../assets/images/burgerking.png';
import durumle from '../assets/images/durumle.jpg';
import pizza from '../assets/images/pizza.jpg';
import Starbucks from '../assets/images/Starbucks.png';
import sushi from '../assets/images/sushi.jpg';

const restaurants = [
  {
    name: "McDonald's",
    image: mcdonaldsImage,
    description: 'Burger, Fast Food - 3.5 (115000+)',
  },
  {
    name: 'Burger King',
    image: burgerkingImage,
    description: 'Burger, Fast Food - 4.0 (200000+)',
  },
  {
    name: 'Dürümle',
    image: durumle,
    description: 'Kebap & Türk Mutfağı - 3,7 (2000+)',
  },
  {
    name: 'Pizza Hut',
    image: pizza,
    description: 'Pizza - 4.5 (5000+)',
  },
  {
    name: 'Starbucks',
    image: Starbucks,
    description: 'Kahve, Tatlı - 4.3 (80000+)',
  },
  {
    name: 'Sushi Place',
    image: sushi,
    description: 'Sushi, Japon Mutfağı - 4.7 (3000+)',
  },
];

const RestaurantList = () => {
  return (
    <Box my={2}>
      <Typography variant="h6" sx={{ mb: 2 }}>Restoranlar</Typography>
      <Grid container spacing={2}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image}
                alt={restaurant.name}
              />
              <CardContent>
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
