import { configureStore } from "@reduxjs/toolkit";
import { accountService } from "./accounts.service";

export const store = configureStore({
  reducer: {
    [accountService.reducerPath]: accountService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
