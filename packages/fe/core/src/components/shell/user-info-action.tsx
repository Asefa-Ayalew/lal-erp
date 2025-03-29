import { Avatar, Paper, Text } from '@mantine/core';

export function UserInfoAction() {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        WLDU LAL-ERP Systems
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        Community Service
      </Text>
    </Paper>
  );
}