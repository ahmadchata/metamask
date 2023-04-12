import { CONNECT_POP_UP_STATE } from "./action-types/action-names";

export const connectPopupState = (): { type: string } => {
  return {
    type: CONNECT_POP_UP_STATE,
  };
};
