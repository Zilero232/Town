import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slices/modalSlice";

export const useModal = () => {
  const modalName = useSelector((state) => state.modal.mode);
  const dispatch = useDispatch();

  const toggleModal = useCallback(
    (name) => {
      dispatch(toggle(name));
    },
    [dispatch]
  );

  return [modalName, toggleModal, modalName !== "none"];
};
