import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
/**
 * @description This is a custom hook that is used to dispatch actions from the store
 * @returns {AppDispatch} Returns the dispatch function
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/**
 * @description This is a custom hook that is used to select state from the store
 * @returns {TypedUseSelectorHook<RootState>} Returns the state from the store
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
