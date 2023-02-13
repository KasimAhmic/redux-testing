import { faker } from '@faker-js/faker';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  inventorySelectors,
  inventorySlicePath,
  inventorySliceReducer,
  upsertInventoryItems,
} from './slices';

export const store = configureStore({
  reducer: {
    [inventorySlicePath]: inventorySliceReducer,
  },
});

// Simulate a server that updates the inventory every 100ms
setInterval(() => {
  const inventoryItems = inventorySelectors.selectAll(store.getState().inventory);

  const itemsToUpdate = faker.helpers.arrayElements(inventoryItems, 10);

  store.dispatch(upsertInventoryItems(itemsToUpdate.map((item) => ({ ...item, price: item.price + 5 }))));
}, 100);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
