import { createAsyncThunk } from '@reduxjs/toolkit'

const test =
  'https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&page=1&per_page=9&q='

const MAIN_URL =
  'https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&q='

const getAllCards = createAsyncThunk(
  'cards/getAllCards',
  async (category, { rejectWithValue }) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&q=${category}&page=1`
    )

    const data = await response.json()

    if (
      response.success === false ||
      response.status < 200 ||
      response.status >= 300
    ) {
      return rejectWithValue({ errorMessage: data.result })
    }

    return data.hits
  }
)

const paginationPage = createAsyncThunk(
  'cards/paginationPage',
  async ({ category, page }, { rejectWithValue }) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&q=${category}&page=${page}`
    )

    const data = await response.json()

    if (
      response.success === false ||
      response.status < 200 ||
      response.status >= 300
    ) {
      return rejectWithValue({ errorMessage: data.result })
    }

    return data.hits
  }
)

export const CardsThunks = { getAllCards, paginationPage }
