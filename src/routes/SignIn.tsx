import { TextInput, Button, Group, Box, Flex } from "@mantine/core"

import { useForm, Form } from "@mantine/form"
import { AUTH_API_HOST } from "../constants/env"

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
    const response = await fetch(`${AUTH_API_HOST}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })

    const data = await response.json()

    console.log(data)
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
