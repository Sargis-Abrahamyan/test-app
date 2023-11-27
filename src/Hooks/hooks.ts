import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDipatch, RootState } from '../Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDipatch>();
