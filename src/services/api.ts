import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurante from '../models/Restaurant'

type Product = {
  id: number
  price: number
}

type CheckoutPayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: { month: number; year: number }
    }
  }
}

type CheckoutResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurantById: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useCheckoutMutation,
} = api

export default api
