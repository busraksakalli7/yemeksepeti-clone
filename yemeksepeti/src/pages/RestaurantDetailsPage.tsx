import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const GET_ITEMS_BY_RESTAURANT = gql`
  query allMenuItems($id: Int!) {
    allMenuItems(restaurantId: $id) {
      id
      name
      description
      price
    }
  }
`;

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  
  const { loading, error, data } = useQuery(GET_ITEMS_BY_RESTAURANT, {
    variables: { id: Number(id) },
  });

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  const allMenuItems = data?.allMenuItems;

  return (
    <Box my={2}>
      <Typography variant="h4">Menü</Typography>
      <Card sx={{ borderRadius: 2, boxShadow: 3, p: 2, mt: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Menü</Typography>
          <Grid container spacing={2}>
            {allMenuItems?.map((menuItem: any) => (
              <Grid item xs={12} sm={6} key={menuItem.id}>
                <Box sx={{ borderBottom: '1px solid #ddd', pb: 1, mb: 1 }}>
                  <Typography variant="subtitle1">{menuItem.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {menuItem.description}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Fiyat: ₺{menuItem.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RestaurantDetail;
