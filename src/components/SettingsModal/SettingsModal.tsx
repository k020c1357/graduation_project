import { Modal, ModalOverlay, ModalContent, ModalBody, Button, Box } from '@chakra-ui/react';
import { SettingsModalContentComponent } from './SettingsModalContent';

type Props = {
  handleSetConfigModal: Function;
};

export const SettingsModal = ({ handleSetConfigModal }: Props) => {
  const handleClose = () => {
    handleSetConfigModal(false);
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent p={0} style={{ maxWidth: 680 }}>
        <ModalBody p={0}>
          <SettingsModalContentComponent />

          <Box width='100%' minWidth='100%' textAlign='right' px={3} pb={3}>
            <Button
              display='inline-block'
              background='ghost'
              onClick={handleClose}
              fontWeight={'medium'}
            >
              閉じる
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
