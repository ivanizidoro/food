/* eslint-disable react/react-in-jsx-scope */
import { ReactNode, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

export interface FoodProps {
  time: ReactNode;
  id: string;
  name: string;
  price: number;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch('http://192.168.1.250:3000/foods')
      const data = await response.json()
      setFoods(data);
    }
    getFoods()
  }, [])

  return (
    <FlatList 
    data={foods} 
    renderItem={({ item }) => <CardHorizontalFood food={item} />} 
    horizontal={true} 
    contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
    />
  );
}