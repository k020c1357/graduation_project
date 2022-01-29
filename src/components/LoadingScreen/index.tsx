import { Box, Text } from '@chakra-ui/react';

export function LoadingScreen() {
  return (
    <Box
      height='100vh'
      minHeight='100vh'
      width='100vw'
      minWidth='100vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Text fontSize='10xl' color='gray.600' textAlign='center' fontWeight='bold' lineHeight={2}>
        データを読み込み中......
      </Text>
    </Box>
  );
}
