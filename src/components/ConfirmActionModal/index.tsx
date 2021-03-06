import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from '@chakra-ui/react';

type Props = {
  handleCancel: () => void;
  handleOK: () => void;
  title: String;
  description?: String;
  colorScheme?:
    | 'red'
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | undefined;
};

export function ConfirmActionModalComponent({
  handleCancel,
  handleOK,
  title,
  description,
  colorScheme = 'red',
}: Props) {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={undefined}
      onClose={handleCancel}
      isOpen={true}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader fontWeight='medium'>{title ? title : 'continue?'}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description ? description : ''}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={undefined} onClick={handleCancel}>
            キャンセル
          </Button>
          <Button onClick={handleOK} colorScheme={colorScheme} ml={3}>
            確認
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
