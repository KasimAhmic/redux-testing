import { Typography } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useAppSelector } from '../hooks';
import { selectInventoryItem } from '../slices';

const useStyles = makeStyles()((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

interface ItemNameProps {
  id: string;
}

export const ItemName: FC<ItemNameProps> = ({ id }) => {
  const { classes } = useStyles();

  const name = useAppSelector((state) => selectInventoryItem(state, id)?.name);

  return (
    <Typography variant='h6'>
      <a href='#' className={classes.root}>
        {name}
      </a>
    </Typography>
  );
};
