import tw from "twin.macro";

export const PasswordCardEmpty = () => {
  return (
    <div tw="px-3 flex items-center justify-center flex-col mt-10">
      <p tw="text-3xl font-bold mb-2">Empty Passwords</p>

      <p tw="text-xl text-gray-400">Create a first password to start</p>
    </div>
  );
};
