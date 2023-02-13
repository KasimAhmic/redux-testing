import { Paper } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { BidButton } from './BidButton';
import { ItemImage } from './ItemImage';
import { ItemName } from './ItemName';
import { ItemPrice } from './ItemPrice';
import { ItemQuantity } from './ItemQuantity';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    width: 600,
    padding: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius * 2,
  },
  info: {
    flexGrow: 1,
  },
}));

interface InventoryItemProps {
  id: string;
}

export const InventoryItem: FC<InventoryItemProps> = ({ id }) => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.root}>
      <ItemImage id={id} />

      <div className={classes.info}>
        <ItemName id={id} />

        <ItemPrice id={id} />

        <ItemQuantity id={id} />
      </div>

      <BidButton id={id} />
    </Paper>
  );
};
