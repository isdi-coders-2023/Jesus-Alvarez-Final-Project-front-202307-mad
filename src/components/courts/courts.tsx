import { useEffect } from 'react';
import { useCourts } from '../../hooks/use-courts';
import { Court as court } from '../../model/court';
import { Court } from '../court/court';

export function Courts() {
  const { getCourts, courtsState } = useCourts();

  useEffect(() => {
    getCourts();
  }, [getCourts]);

  return (
    <div>
      <ul>
        {courtsState.courts.map((item: court, index: number) => (
          <Court key={index} court={item}></Court>
        ))}
      </ul>
    </div>
  );
}
