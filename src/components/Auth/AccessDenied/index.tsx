import * as React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useResetSystem } from '../../../hooks/useResetSystem';
import { ActionModalComponent } from '../../ActionModal';

export function AccessDeniedComponent() {
  const { resetApp } = useResetSystem();
  const [showResetModal, setShowResetModal] = React.useState(false);

  return (
    <Box
      p={5}
      mx='auto'
      height='100vh'
      maxWidth='md'
      display='flex'
      justifyContent='center'
      flexDirection='column'
    >
      <Text fontWeight='bold' fontSize='xl'>
        アクセスすることはできません
      </Text>

      <Text textColor='gray.700' mb={5} fontSize='sm'>
        ページを再読み込みして再試行するか、アプリケーションを復元してください
      </Text>

      <Button colorScheme='red' onClick={() => setShowResetModal(true)}>
        復元
      </Button>

      {showResetModal && (
        <ActionModalComponent
          title='復元する'
          description='このデバイスから情報を削除しますか？この操作は取り消すことができません'
          onAccept={resetApp}
          onClose={() => setShowResetModal(false)}
        />
      )}
    </Box>
  );
}
