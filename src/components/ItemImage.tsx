import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useAppSelector } from '../hooks';
import { selectInventoryItem } from '../slices';

interface StyleProps {
  sequence?: number;
}

const useStyles = makeStyles<StyleProps>()((theme, { sequence }) => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: 'fit-content',
    padding: theme.spacing(0.5),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[500],
    borderRadius: theme.shape.borderRadius * 1.5,
    '& > img': {
      width: 120,
      height: 80,
      borderRadius: theme.shape.borderRadius,
    },
    '&:before': {
      content: `"${sequence}"`,
      position: 'absolute',
      top: theme.shape.borderRadius,
      left: theme.shape.borderRadius,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      background: 'rgba(0, 0, 0, 0.50)',
      borderBottomRightRadius: theme.shape.borderRadius,
      borderTopLeftRadius: theme.shape.borderRadius * 1.5,
      textAlign: 'center',
      color: theme.palette.common.white,
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold,
      textShadow: '0 1px 0 rgba(0, 0, 0, 1)',
    },
  },
}));

interface ItemImageProps {
  id: string;
}

export const ItemImage: FC<ItemImageProps> = ({ id }) => {
  const image = useAppSelector((state) => selectInventoryItem(state, id)?.image);
  const sequence = useAppSelector((state) => selectInventoryItem(state, id)?.sequence);

  const { classes } = useStyles({ sequence });

  return (
    <div className={classes.root}>
      <img src={image} alt='item' />
    </div>
  );
};
