import { Court } from '../../model/court';

type Props = {
  court: Court;
};

export function Court({ court }: Props) {
  return (
    <li>
      <img src={court.pictures.url} alt="A court picture." />
      <div>
        <p>{court.name}</p>
      </div>
    </li>
  );
}
