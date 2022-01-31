import { Dispatch, SetStateAction } from 'react';
import type { TagState, PasswordState, Password } from '../../core/types/reducers';

export type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: Password) => void;
  setShowModal: (state: boolean) => void;
};

export type RenderTableItemsProps = {
  password: Password;
  handleClipboard: (val: string | undefined) => void;
  handleEdit: (password: Password) => void;
  handleDelete: (password: Password) => void;
  setShowViewModal: Function;
  setViewModalItem: Function;
};

export type IpasswordToDelete = [
  passwordToDelete: any,
  setPasswordToDelete: Dispatch<SetStateAction<Password | any>>
];

export type IviewModalItem = [
  viewModalItem: any,
  setViewModalItem: Dispatch<SetStateAction<Password | any>>
];
