import { VStack, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			validationSchema={Yup.object({
				username: Yup.string().required("Username required!")
					.min(6, "Username must be greater than 5 character.")
					.max(28, "Username can't be gretaer than 28 charaters."),
				password: Yup.string().required("Password required!")
					.min(6, "Password must be greater than 5 character.")
					.max(15, "Password can't be gretaer than 15 charaters.")
			})}
			onSubmit={(values, action) => {
				alert(JSON.stringify(values, null, 2));
				action.resetForm();
			}}
		>
			<VStack
				as={Form}
				w={{ base: "90%" }}
				m="auto"
				justify="center"
				h="100vh"
				spacing="1rem"
			>
				<Heading>Register Here</Heading>
				<TextField name="username" placeholder="Enter Username" autoComplete="off" label="Username" />
				<TextField name="password" placeholder="Enter Password" autoComplete="off" label="Password" />

				<ButtonGroup>
					<Button colorScheme="teal" type="submit">Register</Button>
					<Button onClick={ () => navigate("/")}>Go to Login page</Button>
				</ButtonGroup>
			</VStack>
		</Formik>
	);
};

export default Signup;