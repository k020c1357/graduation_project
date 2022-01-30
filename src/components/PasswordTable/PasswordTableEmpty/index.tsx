import { Box, Text } from '@chakra-ui/react';

export const PasswordTableEmptyComponent = () => {
  return (
    <Box
      px={3}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      mt={12}
    >
      <Text fontSize='3xl' fontWeight='bold' mb={2}>
        パスワードはまだありません
      </Text>
    </Box>
  );
};
