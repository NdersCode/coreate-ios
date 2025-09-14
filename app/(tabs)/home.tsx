import { Stack, Text } from '@tamagui/core';

export default function HomeScreen() {
  return (
    <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="600">
        Home Screen
      </Text>
      <Text fontSize="$4" color="$color" marginTop="$2">
        Welcome to Coreate
      </Text>
    </Stack>
  );
}