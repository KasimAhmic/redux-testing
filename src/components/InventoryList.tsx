import { FC } from 'react';
import { InventoryItem } from './InventoryItem';
import { makeStyles } from 'tss-react/mui';
import { useAppSelector } from '../hooks';
import { selectInventoryIds } from '../slices';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingRight: theme.spacing(0),
    backgroundColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius * 4,
    boxShadow: theme.shadows[5],
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    maxHeight: 800,
    overflowY: 'auto',
  },
}));

export const InventoryList: FC = () => {
  const { classes } = useStyles();

  const itemIds = useAppSelector(selectInventoryIds);

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        {itemIds.map((id) => (
          <InventoryItem id={id.toString()} key={id} />
        ))}
      </div>
    </div>
  );
};
