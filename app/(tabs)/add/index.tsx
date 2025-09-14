import { router } from 'expo-router';
import { Stack } from '@tamagui/core';
import { useEffect } from 'react';

export default function AddTab() {
  useEffect(() => {
    // Redirect to the modal when this tab is accessed
    router.push('/(modals)/add');
  }, []);

  // Return empty view as this redirects immediately
  return <Stack flex={1} backgroundColor="$background" />;
}