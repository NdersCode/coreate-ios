import { Stack, Text } from '@tamagui/core';

export default function ProfileScreen() {
  return (
    <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="600">
        Profile Screen
      </Text>
      <Text fontSize="$4" color="$color" marginTop="$2">
        Manage your profile and settings
      </Text>
    </Stack>
  );
}