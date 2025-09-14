import { Stack, Text } from '@tamagui/core';

export default function BoxesScreen() {
  return (
    <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="600">
        Boxes Screen
      </Text>
      <Text fontSize="$4" color="$color" marginTop="$2">
        Your content boxes will appear here
      </Text>
    </Stack>
  );
}