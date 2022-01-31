import * as React from 'react';
import { Tag } from '../../../core/types/reducers';
import { iconsList } from '../../../core/types/commons';
import { IconGenerator } from '../../IconGenerator';
import useTagCreationModal from '../../../hooks/useTagCreationModal';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Box,
} from '@chakra-ui/react';

type Props = {
  tagEditSelected: Tag | null;
  setShowModal: (state: boolean) => void;
};

export const SidebarTagsCreationModal = ({ tagEditSelected, setShowModal }: Props) => {
  const { setTagIcon, setTagName, tagIcon, tagName, handleCreate, handleEdit } =
    useTagCreationModal(setShowModal);

  const onClose = () => setShowModal(false);

  React.useEffect(() => {
    setTagName(tagEditSelected?.name || '');
    setTagIcon(tagEditSelected?.icon || '');
  }, [tagEditSelected]);

  const handleSubmit = () => {
    if (tagEditSelected) return handleEdit(tagEditSelected?.id);
    handleCreate(Math.random().toString(36).substr(2, 5));
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{tagEditSelected ? 'タグの編集' : 'タグの新規作成'}</ModalHeader>
        <ModalCloseButton color='purple.600' />

        <ModalBody>
          <FormControl mb='5' id='name'>
            <FormLabel fontWeight='bold' color='gray.500'>
              タグ名
            </FormLabel>

            <Input
              focusBorderColor='purple.600'
              placeholder='Social, Job, etc...'
              type='text'
              onChange={(e) => setTagName(e.target.value)}
              value={tagName}
            />
          </FormControl>

          <FormLabel fontWeight='bold' color='gray.500'>
            Tag icon
          </FormLabel>
          <Grid my={3} templateColumns='repeat(4, 1fr)' gap={6}>
            {iconsList.map((icon) => (
              <Box
                onClick={() => setTagIcon(icon)}
                cursor='pointer'
                border='2px'
                borderRadius='md'
                borderColor='purple.100'
                style={{ borderColor: icon === tagIcon ? '#285E61' : '' }}
                _hover={{ borderColor: 'purple.200' }}
                mx='auto'
                p={3}
                key={icon}
              >
                <IconGenerator type={icon} />
              </Box>
            ))}
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' color='purple.600' mr={3} onClick={onClose} fontWeight={'medium'}>
            閉じる
          </Button>

          <Button
            isDisabled={tagName !== '' && tagIcon !== '' ? false : true}
            onClick={handleSubmit}
            variant='solid'
            bgColor='purple.600'
            color='white'
            _hover={{ color: 'purple.600', bgColor: 'gray.100' }}
            fontWeight='medium'
          >
            保存
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
