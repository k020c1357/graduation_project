import * as React from 'react';
import type { Password } from '../../core/types/reducers';
import { Text, Menu, MenuButton, Box, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react';
import useClipboard from '../../hooks/useClipboard';
import { useDispatch, useSelector } from 'react-redux';
import { deletePassword } from '../../core/store/actions/passwords';
import { createNotification } from '../../core/store/actions/notifications';
import { ConfirmActionModalComponent } from '../ConfirmActionModal';
import PasswordTableModal from './PasswordTableModal';
import type {
  Props,
  RenderTableItemsProps,
  IviewModalItem,
  IpasswordToDelete,
} from './definitions';

const TableItems = ({
  password,
  handleEdit,
  handleDelete,
  setShowViewModal,
  setViewModalItem,
}: RenderTableItemsProps) => {
  const openShowModal = () => (setShowViewModal(true), setViewModalItem(password));

  return (
    <Box
      p={6}
      my={2}
      display='flex'
      justifyContent='space-between'
      boxShadow='xl'
      border='2px'
      borderColor='gray.300'
      width='100%'
      rounded='2xl'
      bgColor='gray.100'
    >
      <Box
        display='flex'
        flexDirection='column'
        cursor='pointer'
        width='100%'
        onClick={openShowModal}
      >
        <img
          loading='lazy'
          src={`http://www.google.com/s2/favicons?domain=${password.url || 'http://github.com/'}`}
          alt={password.name}
          width='20px'
        />

        <Box fontWeight='bold' color='gray.900' fontSize='xl'>
          {password.name}
        </Box>

        <Box marginRight={2} color='gray.500' display='flex' rounded='md'>
          <Text display='inline-block' fontWeight='medium' marginTop={2}>
            {password.email.length ? password.email : password.username || '情報なし'}
          </Text>
        </Box>
      </Box>

      <Menu>
        <MenuButton>
          <Box rounded='3xl' p={1} className='app-right-item' background='gray.100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='app-search-icon'
              // fill='none'
              enableBackground='new 0 0 330 330'
              version='1.1'
              viewBox='0 0 330 330'
              xmlSpace='preserve'
            >
              <g>
                <path d='M75 180v60c0 8.284 6.716 15 15 15h60a15 15 0 0010.606-4.394l164.999-165c5.858-5.858 5.858-15.355 0-21.213l-60-60a14.997 14.997 0 00-21.211.001l-165 165A14.994 14.994 0 0075 180zm30 6.213l150-150L293.787 75l-150 150H105v-38.787z'></path>
                <path d='M315 150.001c-8.284 0-15 6.716-15 15V300H30V30h135c8.284 0 15-6.716 15-15s-6.716-15-15-15H15C6.716 0 0 6.716 0 15v300c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V165.001c0-8.285-6.716-15-15-15z'></path>
              </g>
            </svg>
          </Box>
        </MenuButton>

        <MenuList color='black'>
          <MenuItem
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='app-search-icon'
                enableBackground='new 0 0 494.936 494.936'
                version='1.1'
                viewBox='0 0 494.936 494.936'
                xmlSpace='preserve'
              >
                <path d='M389.844 182.85c-6.743 0-12.21 5.467-12.21 12.21v222.968c0 23.562-19.174 42.735-42.736 42.735H67.157c-23.562 0-42.736-19.174-42.736-42.735V150.285c0-23.562 19.174-42.735 42.736-42.735h267.741c6.743 0 12.21-5.467 12.21-12.21s-5.467-12.21-12.21-12.21H67.157C30.126 83.13 0 113.255 0 150.285v267.743c0 37.029 30.126 67.155 67.157 67.155h267.741c37.03 0 67.156-30.126 67.156-67.155V195.061c0-6.743-5.467-12.211-12.21-12.211z'></path>
                <path d='M483.876 20.791c-14.72-14.72-38.669-14.714-53.377 0L221.352 229.944c-.28.28-3.434 3.559-4.251 5.396l-28.963 65.069a12.203 12.203 0 002.521 13.6 12.214 12.214 0 008.639 3.576c1.675 0 3.362-.346 4.96-1.057l65.07-28.963c1.83-.815 5.114-3.97 5.396-4.25L483.876 74.169c7.131-7.131 11.06-16.61 11.06-26.692 0-10.081-3.929-19.562-11.06-26.686zM466.61 56.897L257.457 266.05c-.035.036-.055.078-.089.107l-33.989 15.131L238.51 247.3c.03-.036.071-.055.107-.09L447.765 38.058c5.038-5.039 13.819-5.033 18.846.005a13.205 13.205 0 013.905 9.414c0 3.559-1.389 6.903-3.906 9.42z'></path>
              </svg>
            }
            fontWeight='medium'
            onClick={() => handleEdit(password)}
          >
            編集
          </MenuItem>
          <MenuItem
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='app-search-icon'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='#130F26'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M19.325 9.468s-.543 6.735-.858 9.572c-.15 1.355-.987 2.15-2.358 2.174-2.609.047-5.221.05-7.829-.005-1.319-.027-2.142-.83-2.289-2.162-.317-2.862-.857-9.579-.857-9.579'
                  opacity='0.4'
                ></path>
                <path
                  stroke='#130F26'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M20.708 6.24H3.75M17.44 6.24a1.648 1.648 0 01-1.614-1.324L15.583 3.7a1.28 1.28 0 00-1.237-.95h-4.233a1.28 1.28 0 00-1.237.95l-.243 1.216A1.648 1.648 0 017.018 6.24'
                ></path>
              </svg>
            }
            fontWeight='medium'
            color='red.500'
            onClick={() => handleDelete(password)}
          >
            削除
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export function PasswordTableComponent({
  TAG_STATE,
  PASSWORD_STATE,
  setSelectedPassword,
  setShowModal,
}: Props) {
  const dispatch = useDispatch();
  const { handleClipboard } = useClipboard();

  const [passwordToDelete, setPasswordToDelete]: IpasswordToDelete = React.useState(null);
  const [showActionModal, setActionModal] = React.useState(false);
  const [showViewModal, setShowViewModal] = React.useState(false);
  const [viewModalItem, setViewModalItem]: IviewModalItem = React.useState(null);
  const search = useSelector((state: any) => state.search.search);

  const onDelete = () => {
    dispatch(deletePassword(passwordToDelete));
    dispatch(createNotification({ message: `削除しました`, type: 'success' }));
    setActionModal(false);
  };

  const handleEdit = (password: Password) => (setSelectedPassword(password), setShowModal(true));
  const handleDelete = (password: Password) => (
    setPasswordToDelete(password), setActionModal(true)
  );
  const handleCancelDelete = () => (setPasswordToDelete(null), setActionModal(false));
  const closeShowModal = () => (setShowViewModal(false), setViewModalItem(null));

  const [isLarger] = useMediaQuery('(min-width: 800px)');

  return (
    <>
      <Box
        display='grid'
        gridTemplateColumns={isLarger ? 'repeat(2, 1fr)' : '1fr'}
        gap={4}
        className='md-column'
        p={1}
      >
        {TAG_STATE.selectedTag.id !== 0
          ? PASSWORD_STATE.passwords.map((password) => {
              if (
                password.tagId === TAG_STATE.selectedTag.id &&
                (password.name.toLowerCase().includes(search.toLowerCase()) ||
                  password.email.toLowerCase().includes(search.toLowerCase()) ||
                  password.username?.toLowerCase().includes(search.toLowerCase()))
              ) {
                return (
                  <TableItems
                    key={password.token}
                    password={password}
                    setViewModalItem={setViewModalItem}
                    setShowViewModal={setShowViewModal}
                    handleClipboard={handleClipboard}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              }
            })
          : PASSWORD_STATE.passwords.map((password) => {
              if (
                password.name.toLowerCase().includes(search.toLowerCase()) ||
                password.email.toLowerCase().includes(search.toLowerCase()) ||
                password.username?.toLowerCase().includes(search.toLowerCase())
              ) {
                return (
                  <TableItems
                    key={password.token}
                    password={password}
                    setViewModalItem={setViewModalItem}
                    setShowViewModal={setShowViewModal}
                    handleClipboard={handleClipboard}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              }
            })}
      </Box>

      {showActionModal && (
        <ConfirmActionModalComponent
          handleCancel={handleCancelDelete}
          handleOK={onDelete}
          title='パスワードの削除'
          description='このパスワードを削除したいのですか？'
        />
      )}

      {showViewModal && (
        <PasswordTableModal password={viewModalItem} handleClose={closeShowModal} />
      )}
    </>
  );
}
