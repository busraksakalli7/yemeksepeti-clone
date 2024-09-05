import Navbar from '../components/Navbar';
import Campaigns from '../components/Campaigns';
import CategoryList from '../components/CategoryList';
import RestaurantList from '../components/RestaurantList';
import { Container, Grid } from '@mui/material';
import FilterSidebar from '../components/FilterSideBar';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FilterSidebar/>
          </Grid>
          <Grid item xs={10}>
            <SearchBar/>
            <Campaigns />
            <CategoryList />
            <RestaurantList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
