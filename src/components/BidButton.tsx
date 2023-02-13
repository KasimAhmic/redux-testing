import { Button } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { placeBid, selectInventoryItem } from '../slices';
import { formatCurrency } from '../utils';

interface BidButtonProps {
  id: string;
}

export const BidButton: FC<BidButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => selectInventoryItem(state, id)!.price);

  const handleBid = () => dispatch(placeBid({ id, bid: price + 5 }));

  return (
    <Button variant='contained' onClick={handleBid}>
      Bid: {formatCurrency(price + 5)}
    </Button>
  );
};
