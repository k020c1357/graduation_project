import * as React from 'react';
import { Password, TagState } from '../../core/types/reducers';
import usePasswordCreationModal from '../../hooks/usePasswordCreationModal';
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
  Textarea,
  InputGroup,
  InputRightElement,
  Select,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createNotification } from '../../core/store/actions/notifications';

type Props = {
  showModal: boolean;
  passwordSelected: Password | null | undefined;
  setSelectedPassword: (state: any) => void;
  setShowModal: (state: boolean) => void;
  tagState: TagState;
};

export function PasswordCreationModalComponent({
  showModal,
  passwordSelected,
  setShowModal,
  setSelectedPassword,
  tagState,
}: Props) {
  const {
    name,
    setName,
    description,
    setDescription,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    url,
    setUrl,
    tagId,
    setTagId,
    handleCreate,
    handleEdit,
  } = usePasswordCreationModal(setShowModal);

  const onClose = () => {
    setShowModal(false);
    if (passwordSelected) setSelectedPassword(null);
  };

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    setName(passwordSelected?.name || '');
    setDescription(passwordSelected?.description || '');
    setUsername(passwordSelected?.username || '');
    setEmail(passwordSelected?.email || '');
    setPassword(passwordSelected?.password || '');
    setUrl(passwordSelected?.url || '');
    setTagId(passwordSelected?.tagId || 0);
  }, [passwordSelected]);

  const handleSubmit = (): void => {
    if (passwordSelected) handleEdit(passwordSelected?.token);
    else handleCreate(Math.random().toString(36).substr(2, 5));

    dispatch(
      createNotification({
        type: 'success',
        message: passwordSelected ? '編集成功' : '作成されました',
      })
    );

    setSelectedPassword(null);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && name !== '' && password !== '') return handleSubmit();
  };

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={800} w='100%'>
        <ModalHeader fontWeight='medium'>{passwordSelected ? '編集' : '新規作成'}</ModalHeader>
        <ModalCloseButton color='purple.600' />

        <ModalBody onKeyDown={(e) => handleEnter(e)}>
          <Box display='flex' flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>
            <FormControl mb='5' id='name' mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight='medium' color='gray.600'>
                項目名
              </FormLabel>

              <Input
                focusBorderColor='purple.600'
                placeholder='Twitter password'
                type='text'
                id='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>

            <FormControl mb='5' id='name'>
              <FormLabel fontWeight='medium' color='gray.600'>
                ユーザ名
              </FormLabel>

              <Input
                focusBorderColor='purple.600'
                placeholder='Username'
                type='text'
                id='username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </FormControl>
          </Box>

          <Box display='flex' flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>
            <FormControl mb='5' id='name' mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight='medium' color='gray.600'>
                メール
              </FormLabel>

              <Input
                focusBorderColor='purple.600'
                placeholder='email@domain.com'
                type='text'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>

            <FormControl mb='5' id='name'>
              <FormLabel fontWeight='medium' color='gray.600'>
                パスワード
              </FormLabel>

              <InputGroup size='md'>
                <Input
                  focusBorderColor='purple.600'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={password}
                  id='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    _focus={{ borderColor: 'purple.600' }}
                    h='1.75rem'
                    size='sm'
                    onClick={() => setShowPassword((password: boolean) => !password)}
                  >
                    {showPassword ? 'Hide' : 'Show '}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>

          <Box display='flex' flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>
            <FormControl mb='5' id='name' mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight='medium' color='gray.600'>
                タグ
              </FormLabel>

              <Select
                id='tagId'
                value={tagId}
                onChange={(e) => setTagId(e.target.value)}
                placeholder='Select tag'
              >
                {tagState.tags &&
                  tagState.tags.map((tag) => (
                    <option key={tag.name} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <FormControl mb='5' id='name'>
              <FormLabel fontWeight='medium' color='gray.600'>
                URL
              </FormLabel>

              <Input
                focusBorderColor='purple.600'
                placeholder='https://twitter.com/'
                type='text'
                id='url'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </FormControl>
          </Box>

          <FormControl mb='5' id='name'>
            <FormLabel fontWeight='medium' color='gray.600'>
              説明・備考
            </FormLabel>

            <Textarea
              focusBorderColor='purple.600'
              placeholder='Entry description'
              id='description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' color='purple.600' mr={3} onClick={onClose} fontWeight='medium'>
            閉じる
          </Button>

          <Button
            isDisabled={name !== '' && password !== '' ? false : true}
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
}
