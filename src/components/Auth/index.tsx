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
          title='アクセスコードの作成'
          description='ようこそ、まずはアクセスコードの作成が必要です'
          onAccept={generatePassword}
          onCloseModal={() => false}
          value={inputPassword}
          inputType='text'
          setValue={setInputPassword}
        />
      )}

      {showCheckAccessModal && (
        <PrompModalComponent
          title='ログイン'
          description='アクセスコードを入力し、次へ進む'
          onAccept={checkUserAccess}
          onCloseModal={() => (setShowCheckAccessModal(false), setAccessDenied(true))}
          value={inputPassword}
          inputWrong={passwordWrong}
          inputWrongText='アクセスコードが間違っています。もう一度試してください'
          setValue={setInputPassword}
        />
      )}

      {accessDenied && <AccessDeniedComponent />}
    </>
  );
};
