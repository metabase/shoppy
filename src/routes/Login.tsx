import { Redirect } from "wouter"
import { useForm, Form } from "@mantine/form"
import { useMutation } from "@tanstack/react-query"
import { TextInput, Button, Group, Box, Flex, Text } from "@mantine/core"

import { LoginValues, login } from "../utils/login"
import { queryClient } from "../utils/query-client"

export const DEFAULT_ADMIN_ROUTE = "/admin/products"

const inputClasses =
  "bg-background rounded-none text-white mt-1 border-light-grey"

export function Login() {
  const form = useForm<LoginValues>({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) =>
        value.endsWith("@example.com")
          ? null
          : "invalid email. use rene@example.com, cecilia@example.com or emily@example.com",
    },
  })

  const loginMutation = useMutation({
    async mutationFn(values: LoginValues) {
      await login(values)
      await queryClient.refetchQueries({ queryKey: ["auth"] })
      await queryClient.refetchQueries({ queryKey: ["products"] })
    },
  })

  if (loginMutation.isSuccess) {
    return <Redirect to={DEFAULT_ADMIN_ROUTE} />
  }

  return (
    <Box className="text-white font-sans" bg="background">
      <Flex
        maw={340}
        mx="auto"
        justify="center"
        align="center"
        mih="100vh"
        direction="column"
        className="space-y-4"
      >
        {loginMutation.isError && (
          <Box className="border border-red-500 p-3 w-full">
            <Text size="xs" c="red">
              {loginMutation.error?.message}
            </Text>
          </Box>
        )}

        <Box className="border border-dark-grey p-3 w-full">
          <Form
            form={form}
            onSubmit={loginMutation.mutate}
            className="space-y-4 w-full"
          >
            <TextInput
              withAsterisk
              label="Email"
              placeholder="rene@example.com"
              classNames={{ input: inputClasses }}
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Password"
              placeholder="password"
              type="password"
              classNames={{ input: inputClasses }}
              {...form.getInputProps("password")}
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                color="primary"
                variant="outline"
                loading={loginMutation.isPending}
                className="rounded-none"
                fw={200}
              >
                Login
              </Button>
            </Group>
          </Form>
        </Box>

        <Box>
          <Text size="xs">
            use "rene@example.com", "cecilia@example.com" or "emily@example.com"
            as the email, and "password" as the password.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
