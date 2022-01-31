import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
} from '@chakra-ui/react';
import type { Password } from '../../../core/types/reducers';
import PasswordTableModalItem from '../PasswordTableModalItem';
import useClipboard from '../../../hooks/useClipboard';

type Props = {
  handleClose: () => void;
  password: Password;
};

export default function PasswordTableModal({ handleClose, password }: Props) {
  const { handleClipboard } = useClipboard();

  return (
    <Modal isOpen={true} onClose={handleClose} size={'3xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display='flex'>
          <Box my='auto' mr={3}>
            <img
              loading='lazy'
              src={`http://www.google.com/s2/favicons?domain=${
                password.url || 'http://github.com/'
              }`}
              alt={password.name}
              width='20px'
            />
          </Box>
          <Text my='auto' textTransform='capitalize'>
            {password.name}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={3}>
            <Text color='gray.500'>
              {password.description ? password.description : 'ここに記載はありません'}
            </Text>
          </Box>

          <PasswordTableModalItem
            fieldType='メール'
            handleClipboard={handleClipboard}
            fieldValue={password.email}
          />

          <PasswordTableModalItem
            fieldType='ユーザ名'
            handleClipboard={handleClipboard}
            fieldValue={password.username}
          />

          <PasswordTableModalItem
            fieldType='パスワード'
            handleClipboard={handleClipboard}
            fieldValue={password.password}
          />

          <PasswordTableModalItem
            fieldType='URL'
            handleClipboard={handleClipboard}
            fieldValue={password.url}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
