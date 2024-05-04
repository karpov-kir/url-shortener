import "@mantine/core/styles.css";

import { AppShell, Button, createTheme, Group, MantineProvider, Text, TextInput } from "@mantine/core";

import classNames from "./App.module.css";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        header={{
          height: 60,
        }}
        padding="md"
      >
        <AppShell.Header className={classNames.header}>
          <Text size="xl" fw="bold" pl="md">
            URL Shortener
          </Text>
        </AppShell.Header>

        <AppShell.Main className={classNames.main}>
          <TextInput
            label="Long URL"
            inputContainer={(children) => (
              <Group align="flex-start">
                {children}
                <Button>Shorten</Button>
              </Group>
            )}
          />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
