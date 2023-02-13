import { Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../hooks';
import { selectInventoryItem } from '../slices';
import { formatCurrency } from '../utils';

interface ItemPriceProps {
  id: string;
}

export const ItemPrice: FC<ItemPriceProps> = ({ id }) => {
  const price = useAppSelector((state) => selectInventoryItem(state, id)!.price);

  return (
    <Typography>
      <b>Current Bid:</b> {formatCurrency(price)}
    </Typography>
  );
};
