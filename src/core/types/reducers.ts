export type PasswordType = {
  name: string;
  token?: string | number;
  email?: string;
  password?: string;
  tagId?: number | string;
  description?: string;
  username?: string;
  url?: string;
};

export type PasswordState = {
  passwords: PasswordType[];
};

/**============ */

export type Tag = {
  id: number | string;
  name: string;
  icon: string;
};

export type TagState = {
  selectedTag: Tag;
  tags: Tag[];
};

/**=========== */
export type Notification = {
  type: "error" | "success" | "warning";
  message: string;
  descripton?: string;
  duration?: number;
  isClosable?: boolean;
};

export type NotificationState = {
  notifications: Notification[];
};

/**=========== */
export type SearchState = {
  search: string;
};

export type SidebarState = {
  showSidebar: Boolean;
};

export type UserState = {
  hasAccess: Boolean;
};

export type UserPasswordState = {
  password: String | null;
};
