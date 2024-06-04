import { TextInput, Button, Group, Box, Flex, Text } from "@mantine/core"
import { useForm, Form } from "@mantine/form"
import { Redirect, useLocation } from "wouter"

import { login } from "../utils/login"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../utils/query-user"

interface FormValues {
  email: string
  password: string
}

const DEFAULT_ADMIN_ROUTE = "/admin/products"

export function SignIn() {
  const [, navigate] = useLocation()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const query = useQuery({ queryKey: ["auth"], queryFn: getUser })

  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) =>
        value.endsWith("@example.com")
          ? null
          : "invalid email. use rene@example.com or cecilia@example.com",
    },
  })

  async function handleSubmit({ email, password }: FormValues) {
    const status = await login(email, password)
    await query.refetch()

    setErrorMessage(status.error ?? null)

    if (status.ok) {
      navigate(DEFAULT_ADMIN_ROUTE)
      return
    }
  }

  if (query?.data?.email) {
    return <Redirect to={DEFAULT_ADMIN_ROUTE} />
  }

  return (
    <Box className="text-white font-sans" bg="#4c5773">
      <Flex
        maw={340}
        mx="auto"
        justify="center"
        align="center"
        mih="100vh"
        direction="column"
        className="space-y-4"
      >
        {errorMessage && (
          <Box className="border border-red-500 p-3 rounded-lg w-full">
            <Text size="xs" c="red">
              {errorMessage}
            </Text>
          </Box>
        )}

        <Box className="border border-gray-500 p-3 rounded-lg w-full">
          <Form
            form={form}
            onSubmit={handleSubmit}
            className="space-y-4 w-full"
          >
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
              <Button type="submit" color="#98D9D9" variant="outline">
                Login
              </Button>
            </Group>
          </Form>
        </Box>

        <Box>
          <Text size="xs">
            use "rene@example.com" or "cecilia@example.com" as the email, and
            "password" as the password.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
