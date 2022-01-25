import { CardWrapper, CardItemWrapper, MenuButton } from "./Password.elements";
import {
  ItemProps,
  RenderTableItemsProps,
  IpasswordToDelete,
  IviewModalItem,
} from "./types";
import tw from "twin.macro";

export const PasswordCard = () => {
  return (
    <div>
      <CardItem
        password={{ name: "password パスワード", email: "google@gmail.com" }}
      />
    </div>
  );
};

function CardItem({
  password,
  handleEdit,
  handleDelete,
  setShowViewModal,
  setViewModalItem,
}: RenderTableItemsProps) {
  // const openShowModal = () => {
  //   setShowViewModal(true);
  //   setViewModalItem(password);
  // };

  return (
    <CardWrapper>
      <CardItemWrapper>
        {/* <img
          src={`http://www.google.com/s2/favicons?domain=${
            password.url || "http://github.com/"
          }`}
          alt={password.name}
        /> */}
        <span tw="font-bold text-gray-900 text-xl">{password.name}</span>
        <div tw="m-2 text-gray-500 flex rounded-md">
          <p tw="inline-block font-bold">
            {password.email
              ? password.email
              : password.username || "No information available "}
          </p>
        </div>
      </CardItemWrapper>
      <div>
        <MenuButton>
          <div tw="rounded-2xl p-1 bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="app-nav-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </MenuButton>

        {/* menulist */}
        <div tw="border">
          <button tw="font-bold">編集</button>
          <button tw="font-bold text-red-500">削除</button>
        </div>
      </div>
    </CardWrapper>
  );
}
