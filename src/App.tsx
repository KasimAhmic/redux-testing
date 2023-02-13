import { Controls, InventoryList } from './components';
import { makeStyles } from 'tss-react/mui';
import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector, useInterval } from './hooks';
import { faker } from '@faker-js/faker';
import { selectInventoryIds, upsertInventoryItems } from './slices';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Controls />
      <InventoryList />
    </div>
  );
}

export default App;
