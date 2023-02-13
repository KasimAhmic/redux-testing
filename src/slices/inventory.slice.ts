import { faker } from '@faker-js/faker';
import { createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const collator = new Intl.Collator('en-us', { numeric: true });

const alphaNumericCompare = (a: string, b: string) => collator.compare(a, b);

const inventoryAdapter = createEntityAdapter<InventoryItem>({
  selectId: (item) => item.id,
  sortComparer: (a, b) => {
    if (a.sequence === b.sequence) {
      return alphaNumericCompare(a.name, b.name);
    }

    return a.sequence - b.sequence;
  },
});

const initialState = inventoryAdapter.upsertMany(
  inventoryAdapter.getInitialState(),
  new Array(250).fill(0).map((_item, index) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: `https://picsum.photos/${faker.datatype.number({
      min: 110,
      max: 130,
    })}/${faker.datatype.number({ min: 70, max: 90 })}`,
    price: Math.ceil(faker.datatype.number({ min: 1, max: 1000, precision: 1 }) / 5) * 5,
    quantity: faker.datatype.number({ min: 1, max: 20 }),
    sequence: index + 1,
  })),
);

export const invcentorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    upsertInventoryItems: (state: InventoryState, action: PayloadAction<InventoryItem[]>) => {
      inventoryAdapter.upsertMany(state, action.payload);
    },
    placeBid: (state: InventoryState, action: PayloadAction<{ id: string; bid: number }>) => {
      inventoryAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          price: action.payload.bid,
        },
      });
    },
  },
});

export const { name: inventorySlicePath, reducer: inventorySliceReducer } = invcentorySlice;
export const { upsertInventoryItems, placeBid } = invcentorySlice.actions;
export const inventorySelectors = inventoryAdapter.getSelectors();

export const selectInventoryIds = (state: RootState) => inventorySelectors.selectIds(state.inventory);
export const selectInventoryItem = (state: RootState, id: string) =>
  inventorySelectors.selectById(state.inventory, id);

interface InventoryItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  sequence: number;
}

type InventoryState = EntityState<InventoryItem>;
