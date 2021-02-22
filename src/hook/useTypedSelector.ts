import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../modules/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
