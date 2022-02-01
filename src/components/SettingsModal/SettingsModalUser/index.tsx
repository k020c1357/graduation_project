import * as React from 'react';
import { Box, Text, Button, FormControl, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { UserPasswordState } from '../../../core/types/reducers';
import { createOrEditPassword } from '../../../core/store/actions/userPassword';
import { createNotification } from '../../../core/store/actions/notifications';

export function SettingsModalUserComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state: { userPassword: UserPasswordState }) => state);

  const [passwordMismatch, setPasswordMismatch] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const clearForm = () => {
    setPasswordMismatch(false);
    setPassword('');
    setNewPassword('');
  };

  const updatePassword = () => {
    if (password === state.userPassword.password) {
      dispatch(createOrEditPassword(newPassword));

      dispatch(
        createNotification({
          type: 'success',
          message: 'アクセスコードの更新に成功',
        })
      );

      return clearForm();
    }

    setPasswordMismatch(true);
    return dispatch(
      createNotification({
        type: 'error',
        message: '現在のアクセスコードが一致しない',
      })
    );
  };

  return (
    <Box>
      <Box background='gray.100' borderRadius='lg' p={4}>
        <Text fontWeight='medium' fontSize='xl' mb={3}>
          アクセスコードを更新する
        </Text>

        <Box>
          <FormControl>
            <Text>現在のアクセスコード</Text>
            <Input
              style={passwordMismatch ? { borderWidth: 2, borderColor: 'red' } : {}}
              focusBorderColor={passwordMismatch ? 'none' : 'purple.600'}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off'
              type='password'
              value={password}
              placeholder='Old'
              background='white'
            />
          </FormControl>

          <FormControl mt={3}>
            <Text>新しいアクセスコード</Text>
            <Input
              style={passwordMismatch ? { borderWidth: 2, borderColor: 'red' } : {}}
              focusBorderColor={passwordMismatch ? 'none' : 'purple.600'}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              autoComplete='off'
              type='password'
              placeholder='New'
              background='white'
            />
          </FormControl>

          <Button mt={5} onClick={updatePassword} background='gray.300'>
            アップデート
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
