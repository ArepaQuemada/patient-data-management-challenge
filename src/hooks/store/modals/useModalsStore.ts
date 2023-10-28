import { useAppDispatch, useAppSelector } from "../useStore";
import {
  setStateCreateModal as setStateCreateModalStore,
  setStateEditModal as setStateEditModalStore,
} from "@src/infra/store/modals/modalsSlice";
import { useCallback } from "react";

export const useModalsStore = () => {
  const modals = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  const setStateCreateModal = useCallback(
    (newModalState: boolean) => {
      dispatch(setStateCreateModalStore(newModalState));
    },
    [dispatch]
  );

  const setStateEditModal = useCallback(
    (newModalState: boolean) => {
      dispatch(setStateEditModalStore(newModalState));
    },
    [dispatch]
  );

  return {
    modals,
    setStateCreateModal,
    setStateEditModal,
  };
};
