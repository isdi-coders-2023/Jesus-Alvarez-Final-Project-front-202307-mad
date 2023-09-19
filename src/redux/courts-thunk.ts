import { createAsyncThunk } from '@reduxjs/toolkit';
import { Court } from '../model/court';
import { ApiCourtRepository } from '../services/court-repository';

export const getCourtsThunk = createAsyncThunk<Court[], ApiCourtRepository>(
  'courts/load',
  async (repo) => {
    const courts = await repo.getAll();
    return courts;
  }
);
