import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourtsThunk } from '../redux/courts-thunks';
import { ApiCourtRepository } from '../services/court-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useCourts() {
  const repo = useMemo(
    () => new ApiCourtRepository('http://localhost:4300/courts'),
    []
  );

  const { courtsStatus, courts } = useSelector(
    (state: RootState) => state.tennisZoneCourts
  );
  const courtsDispatch = useDispatch<TennisZoneDispatch>();

  const getCourts = useCallback(async () => {
    courtsDispatch(getCourtsThunk(repo));
  }, [repo, courtsDispatch]);

  return {
    getCourts,
    courtsStatus,
    courts,
  };
}
