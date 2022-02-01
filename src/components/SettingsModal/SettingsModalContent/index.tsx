import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { SettingsModalBackupComponent } from '../SettingsModalBackup';
import { SettingsModalContentOptionComponent } from '../SettingsModalContentOption';
import { SettingsModalSystemComponent } from '../SettingsModalSystem';
import { SettingsModalUserComponent } from '../SettingsModalUser';

export function SettingsModalContentComponent() {
  const [selectedTab, setSelectedTab] = React.useState('backup');

  return (
    <Box className='left-modal' display='flex' flexDirection='column' height='100%' minHeight={400}>
      <Box className='tabs' width='100%' p={3} display='flex'>
        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName='バックアップ'
          optionValue='backup'
        />

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName='ユーザー'
          optionValue='user'
        />

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName='システム設定'
          optionValue='system'
        />
      </Box>

      <Box flex={1} p={3}>
        {selectedTab === 'backup' && <SettingsModalBackupComponent />}
        {selectedTab === 'user' && <SettingsModalUserComponent />}
        {selectedTab === 'system' && <SettingsModalSystemComponent />}
      </Box>
    </Box>
  );
}
