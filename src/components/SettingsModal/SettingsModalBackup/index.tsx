import * as React from 'react';
import { Box, Text, Button, Input } from '@chakra-ui/react';
import { Password, PasswordState, Tag, TagState } from '../../../core/types/reducers';
import { connect, useDispatch } from 'react-redux';
import { exportAsJSONFile } from '../../../core/utilities/export-as-file';
import { importAsJSONFile } from '../../../core/utilities/import-from-file';
import { createNotification } from '../../../core/store/actions/notifications';
import { createTag } from '../../../core/store/actions/tags';
import { createPassword } from '../../../core/store/actions/passwords';

const stateMapToProps = (state: { tags: TagState; passwords: PasswordState }) => {
  return {
    TAGS: state.tags,
    PASSWORDS: state.passwords,
  };
};

type Props = {
  TAGS: TagState;
  PASSWORDS: PasswordState;
};

export function SettingsModalBackupModal({ TAGS, PASSWORDS }: Props) {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState(null);
  const [uploadError, setUploadError] = React.useState(false);

  const importTags = (tags: Tag[]) => {
    tags.forEach((tag) => dispatch(createTag(tag)));
  };

  const importPasswords = (passwords: Password[]) => {
    passwords.forEach((pass) => dispatch(createPassword(pass)));
  };

  const handleImportFile = () => {
    setUploadError(false);

    importAsJSONFile(file, (result: { tags: Tag[]; passwords: Password[] } | null) => {
      if (!result) {
        setUploadError(true);
        return dispatch(
          createNotification({
            type: 'error',
            message: 'バックアップファイルのインポートでエラーが発生する',
          })
        );
      }

      importTags(result?.tags);
      importPasswords(result?.passwords);
      dispatch(
        createNotification({ type: 'success', message: 'バックアップのアップロードに成功' })
      );
    });
  };

  return (
    <Box>
      <Box background='gray.100' borderRadius='lg' p={4}>
        <Text fontWeight='medium' fontSize='xl'>
          バックアップを生成する
        </Text>

        <Text mb={4} textColor='gray.500'>
          パスワードのバックアップをダウンロードする
        </Text>

        <Button background='gray.300' onClick={() => exportAsJSONFile(TAGS, PASSWORDS)}>
          ダウンロード
        </Button>
      </Box>

      <Box background='gray.100' borderRadius='lg' p={4} mt={2}>
        <Text fontWeight='medium' fontSize='xl'>
          インポートバックアップ
        </Text>
        <Text textColor='gray.500'>パスワードのバックアップをインポートする</Text>

        {uploadError && (
          <Text color='red.700' fontWeight='medium' fontSize='xs'>
            ファイルをアップロードしようとしたときにエラーが発生しました。もう一度やり直してください
          </Text>
        )}

        <Box display='flex' alignItems='center' mt={4}>
          <Input mr={3} type='file' onChange={(e: any) => setFile(e.target.files[0])} />

          <Button
            background='gray.300'
            maxWidth='200px'
            width='100%'
            disabled={file ? false : true}
            onClick={handleImportFile}
          >
            インポートバックアップ
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export const SettingsModalBackupComponent = connect(stateMapToProps)(SettingsModalBackupModal);
