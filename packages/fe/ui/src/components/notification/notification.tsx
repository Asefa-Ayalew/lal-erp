import { notifications } from '@mantine/notifications';

export const notify = (msg: string, type: string) => {
  notifications.show({
    title: type === "success" ? "Success" : "Error",
    message: msg,
    color: type === "success" ? "green" : "red",
  });
};
