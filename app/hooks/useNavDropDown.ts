import { create } from "zustand";

interface NavDropDownState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavDropDown = create<NavDropDownState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavDropDown;
