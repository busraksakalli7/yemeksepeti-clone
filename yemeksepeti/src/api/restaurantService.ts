// src/api/restaurantService.ts
import api from './axios';

export const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants');
    return response.data;
  } catch (error) {
    console.error('Restoranlar alınırken bir hata oluştu:', error);
    throw error;
  }
};
