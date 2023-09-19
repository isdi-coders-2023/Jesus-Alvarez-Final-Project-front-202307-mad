import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourtsThunk } from '../redux/courts-thunk';
import { ApiCourtRepository } from '../services/court-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useCourts() {
  const repo = useMemo(
    () => new ApiCourtRepository('http://localhost:4300/courts'),
    []
  );

  const courtsState = useSelector((state: RootState) => state.tennisZoneCourts);
  const courtsDispatch = useDispatch<TennisZoneDispatch>();

  const getCourts = async () => {
    courtsDispatch(getCourtsThunk(repo));
  };

  return {
    getCourts,
    courtsState,
  };
}
