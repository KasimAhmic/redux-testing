import { Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../hooks';
import { selectInventoryItem } from '../slices';

interface ItemQuantityProps {
  id: string;
}

export const ItemQuantity: FC<ItemQuantityProps> = ({ id }) => {
  const quantity = useAppSelector((state) => selectInventoryItem(state, id)?.quantity);

  return (
    <Typography>
      <b>Quanity:</b> {quantity}
    </Typography>
  );
};
