import tw from "twin.macro";
import { TagIcon } from "../TagIcon";

type Props = {
  fieldType?: String;
  fieldValue?: String;
  handleClipboard: Function;
  showClipboardButton?: Boolean;
};

export const PasswordCardModalItem = ({
  fieldType,
  fieldValue,
  handleClipboard,
  showClipboardButton = true,
}: Props) => {
  return (
    <div tw="flex justify-between p-2 mb-3 rounded-xl border-2 border-gray-300">
      <div tw="my-auto flex font-bold">
        <p tw="bg-gray-300 px-3 py-1 rounded-lg">
          {fieldType ? fieldType : "Lorem"}
        </p>

        {fieldType !== "Password" && (
          <p tw="ml-3 my-auto text-gray-600">
            {fieldValue && fieldValue.length ? fieldValue : "Empty"}
          </p>
        )}

        {fieldType === "Password" && (
          <p tw="ml-3 my-auto text-gray-600">*******</p>
        )}
      </div>

      {showClipboardButton && (
        <button
          disabled={!fieldValue?.length ? true : false}
          onClick={() => handleClipboard(fieldValue)}
          tw="my-auto"
        >
          <TagIcon type="clipboard" />
        </button>
      )}
    </div>
  );
};
