import { Box, Grid, Paper, Typography } from '@mui/material';
import kampanya from '../assets/images/kampanya2.jpg';
import kampanya2 from '../assets/images/kampanya3.jpeg';
import kampanya3 from '../assets/images/kampanya4.jpeg';
import kampanya4 from '../assets/images/kampanya5.jpeg';

const campaigns = [
  { id: 1, image: kampanya },
  { id: 2, image: kampanya2 },
  { id: 3, image: kampanya3 },
  { id: 4, image: kampanya4 },
];

const Campaigns = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" gutterBottom>
        Kampanyalar
      </Typography>
      <Grid container spacing={2}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={campaign.id}>
            <Paper
              elevation={3}
              sx={{
                padding: '8px',
                maxWidth: { xs: '100%', sm: '400px' }, // Responsive maxWidth
                margin: 'auto',
              }}
            >
              <img src={campaign.image} alt="Campaign" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Campaigns;
