import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";
  
  export function Login() {
    const navigate = useNavigate();
    const { setAuthenticated } = useContext(AuthContext);

    const handleOnClick = () => {
        setAuthenticated(true);
        navigate("/");
    }

    return (
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl" onClick={handleOnClick}>
            Sign in
          </Button>
        </Paper>
      </Container>
    );
  }