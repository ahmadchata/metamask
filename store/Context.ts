import { createContext, useContext } from "react";

export enum Popup {
  Open = "open",
  Close = "close",
}

export type PopupContextType = {
  popup: Popup;
  setPopup: (Popup: Popup) => void;
};

export const PopupContext = createContext<PopupContextType>({
  popup: Popup.Open,
  setPopup: (popup) => console.warn("no popup provider"),
});
export const usePopup = () => useContext(PopupContext);
