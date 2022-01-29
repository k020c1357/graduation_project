import * as React from 'react';
import { useUserAccess } from '../../hooks/useAccess';
import { PrompModalComponent } from '../PromptModal';
import { AccessDeniedComponent } from './AccessDenied';

export const Auth = () => {
  const [showPasswordCreationModal, setShowPasswordCreationModal] = React.useState(false);
  const [showCheckAccessModal, setShowCheckAccessModal] = React.useState(false);
  const [accessDenied, setAccessDenied] = React.useState(false);
  const [inputPassword, setInputPassword] = React.useState('');

  const {
    passwordWrong,
    setPasswordWrong,
    userPassword,
    userHasAccess,
    handleAccess,
    generatePassword,
  } = useUserAccess();

  const checkUserAccess = () => {
    if (!userHasAccess) return handleAccess(inputPassword);
  };

  React.useEffect(() => setPasswordWrong(false), [inputPassword]);

  React.useEffect(() => {
    if (userPassword) setShowCheckAccessModal(true);
    else setShowPasswordCreationModal(true);
  }, []);

  return (
    <>
      {showPasswordCreationModal && (
        <PrompModalComponent
          isClosable={false}
          title='Creating an access code'
          description='Welcome, to start you must create an access code'
          onAccept={generatePassword}
          onCloseModal={() => false}
          value={inputPassword}
          inputType='text'
          setValue={setInputPassword}
        />
      )}

      {showCheckAccessModal && (
        <PrompModalComponent
          title='Login'
          description='Enter your access code to continue 🔒'
          onAccept={checkUserAccess}
          onCloseModal={() => (setShowCheckAccessModal(false), setAccessDenied(true))}
          value={inputPassword}
          inputWrong={passwordWrong}
          inputWrongText='Your access code is wrong. Try again.'
          setValue={setInputPassword}
        />
      )}

      {accessDenied && <AccessDeniedComponent />}
    </>
  );
};
