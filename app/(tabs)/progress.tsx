import { Stack, Text } from '@tamagui/core';

export default function ProgressScreen() {
  return (
    <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="600">
        Progress Screen
      </Text>
      <Text fontSize="$4" color="$color" marginTop="$2">
        Track your content progress here
      </Text>
    </Stack>
  );
}