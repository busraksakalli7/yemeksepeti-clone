import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useQuery, gql } from '@apollo/client';

// GraphQL sorgusu
const GET_RESTAURANTS = gql`
  query {
    allRestaurants {
      id
      name
    }
  }
`;

const RestaurantList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading restaurants: {error.message}</Typography>;

  return (
    <Box my={2}>
      <Typography variant="h6" sx={{ mb: 2 }}>Restoranlar</Typography>
      <Grid container spacing={2}>
        {data.allRestaurants.map((restaurant: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{restaurant.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
