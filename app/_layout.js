import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="logout" />
      <Stack.Screen name="index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="BarcodeScanners" />
      <Stack.Screen name="ParkingDetails" />
    </Stack>
  );
};

export default RootLayout;
