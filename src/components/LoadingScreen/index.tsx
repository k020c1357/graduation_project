import tw from "twin.macro";

export const LoadingScreen = () => {
  return (
    <div tw="h-full min-h-full w-full min-w-full flex justify-center items-center">
      <p tw="text-lg text-gray-300 text-center font-bold">
        Loading your data...
      </p>
    </div>
  );
};
