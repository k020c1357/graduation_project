/**
 * @description Password types
 */
export type Password = {
  token: string | number;
  name: string;
  description?: string;
  username?: string;
  email: string;
  password: string;
  url?: string;
  tagId: number | string;
};

export type PasswordState = {
  passwords: Password[];
};

/**
 * @description Tags types
 */
export type Tag = {
  id: number | string;
  name: string;
  icon: string;
};

export type TagState = {
  selectedTag: Tag;
  tags: Tag[];
};

/**
 * @description Notification types
 */
export type Notification = {
  type: 'error' | 'success' | 'warning';
  message: string;
  descripton?: string;
  duration?: number;
  isClosable?: boolean;
};

export type NotificationState = {
  notifications: Notification[];
};

/**
 * @description Search types
 */
export type SearchState = {
  search: string;
};

/**
 * @description Sidebar types
 */
export type SidebarState = {
  showSidebar: Boolean;
};

/**
 * @description User types
 */
export type UserState = {
  hasAccess: Boolean;
};

/**
 * @description User password types
 */
export type UserPasswordState = {
  password: String | null;
};
