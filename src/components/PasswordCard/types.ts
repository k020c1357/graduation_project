import { Dispatch, SetStateAction } from "react";
import {
  TagState,
  PasswordState,
  PasswordType,
} from "../../core/types/reducers";

export type ItemProps = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: PasswordType) => void;
  setShowModal: (state: boolean) => void;
};

export type RenderTableItemsProps = {
  password: PasswordType;
  handleClipboard?: (val: string | undefined) => void;
  handleEdit?: (password: PasswordType) => void;
  handleDelete?: (password: PasswordType) => void;
  setShowViewModal?: Function;
  setViewModalItem?: Function;
};

export type IpasswordToDelete = [
  passwordToDelete: any,
  setPasswordToDelete: Dispatch<SetStateAction<PasswordType | any>>
];

export type IviewModalItem = [
  viewModalItem: any,
  setViewModalItem: Dispatch<SetStateAction<PasswordType | any>>
];
