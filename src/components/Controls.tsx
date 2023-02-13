import { Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../hooks';
import { selectInventoryIds } from '../slices';

export const Controls: FC = () => {
  const inventoryItems = useAppSelector(selectInventoryIds);

  return <Typography>Item Count: {inventoryItems.length}</Typography>;
};
