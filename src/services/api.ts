import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurante from '../models/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurantById: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api

export default api
