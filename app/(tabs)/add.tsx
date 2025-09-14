import { Stack, Text } from '@tamagui/core';

export default function AddScreen() {
  return (
    <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="600">
        Add Screen
      </Text>
      <Text fontSize="$4" color="$color" marginTop="$2">
        This will trigger a bottom sheet modal
      </Text>
    </Stack>
  );
}