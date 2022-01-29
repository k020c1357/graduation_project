import * as React from 'react';
import { SidebarTagsGroupComponent } from './SidebarTagsGroup';
import { Box, Button, Text } from '@chakra-ui/react';
import { SidebarButton } from './SidebarButton';
import { SidebarTagsCreationModalComponent } from './SidebarTagsCreationModal';
import { SettingsModalComponent } from '../SettingsModal/SettingsModal';
import { appVersion } from '../../core/types/commons';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../core/store/actions/sidebar';

type Props = {
  className: string;
};

export const Sidebar = ({ className }: Props) => {
  const dispatch = useDispatch();

  const [showConfigModal, setShowConfigModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [tagEditSelected, setTagEditSelected] = React.useState(null);

  const handleTagEditSelected = (tag: any) => setTagEditSelected(tag);
  const handleSetModal = () => setShowModal(true);

  const handleSetConfigModal = (value: React.SetStateAction<boolean> = false) =>
    setShowConfigModal(value);

  React.useEffect(() => {
    if (tagEditSelected) setShowModal(true);
  }, [tagEditSelected]);

  React.useEffect(() => {
    if (!showModal) setTagEditSelected(null);
  }, [showModal]);

  return (
    <Box className={className} bgColor='purple.700'>
      <Box width='100%' minWidth='100%' pr={3} pt={3}>
        <Button
          className='responsive-sidebar-close-button'
          variant='outline'
          colorScheme='whiteAlpha'
          size='sm'
          ml='auto'
          onClick={() => dispatch(toggleSidebar())}
        >
          <Text fontWeight='medium' color='white'>
            閉じる
          </Text>
        </Button>
      </Box>

      <Box px={8} pt={6} className='head-text' textAlign='center'>
        <Text color='white' fontSize='3xl' fontWeight='medium'>
          パスワード保管庫
        </Text>
      </Box>

      <hr className='app-divider' />

      <Box display='flex' justifyContent='space-between' flexDirection='column' minHeight='80vh'>
        <Box>
          <SidebarTagsGroupComponent handleTagEditSelected={handleTagEditSelected} />
        </Box>
        <Box>
          <SidebarButton handleClick={handleSetModal} title='新しいタグを作成する' />
          <SidebarButton handleClick={handleSetConfigModal} title='設定' />
          {showModal && (
            <SidebarTagsCreationModalComponent
              setShowModal={setShowModal}
              tagEditSelected={tagEditSelected}
            />
          )}
          {showConfigModal && (
            <SettingsModalComponent handleSetConfigModal={handleSetConfigModal} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
