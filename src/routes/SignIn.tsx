import { TextInput, Button, Group, Box, Flex } from "@mantine/core"
import { useForm, Form } from "@mantine/form"

import { login } from "../utils/login"

interface FormValues {
  email: string
  password: string
}

export function SignIn() {
  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "invalid email"),
    },
  })

  async function handleSubmit({ email, password }: FormValues) {
    await login(email, password)
  }

  return (
    <Box bg="#4C5773" className="text-white">
      <Flex maw={340} mx="auto" justify="center" align="center" mih="100vh">
        <Form form={form} onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            withAsterisk
            label="Email"
            placeholder="rene@example.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            label="Password"
            placeholder="password"
            type="password"
            {...form.getInputProps("password")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Login</Button>
          </Group>
        </Form>
      </Flex>
    </Box>
  )
}
