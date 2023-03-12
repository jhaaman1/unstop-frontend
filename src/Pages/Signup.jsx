import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import PasswordInput from "../Components/Password/PasswordInput";
import "./Signup.css";

const Signup = () => {
  return (
    <Box className="sign-container" w="100vw" p={4}>
      <Heading fontSize={{ base: "2xl", md: "4xl" }} className="heading-signup">
        Welcome!
      </Heading>
      <Box className="signupformbox">
         <FormControl className="form-main" isRequired>
          <Flex flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
            <Box m="auto">
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                First Name
              </FormLabel>
              <Input
                type="text"
                fontSize={{ base: "md", md: "lg" }}
                placeholder="FirstName"
              />
            </Box>
            <Box>
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                Last Name
              </FormLabel>
              <Input
                type="text"
                fontSize={{ base: "md", md: "lg" }}
                placeholder="LastName"
              />
            </Box>
          </Flex>
         
          <Flex mt="4"  flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
            <Box m="auto" ml={4}>
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                User Name
              </FormLabel>
              <Input
                type="text"
                fontSize={{ base: "md", md: "lg" }}
                placeholder="UserName"
              />
            </Box>
            <Box >
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                Gender
              </FormLabel>
              <Select placeholder="Gender" className="select-sign">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="intersex">Intersex</option>
                <option value="nonbinary">Non Binary</option>
                <option value="prefer">Prefer not to say</option>
              </Select>
            </Box>
          </Flex>
 
          <Flex gap={4} mt="4" flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
            <Box m="auto" ml={4}>
              <FormLabel
                className="firstname-label"
              >
                Email
              </FormLabel>
              <Input
                type="text"
                placeholder="Email"
                w={'280px'}
              />
            </Box>
            <Box className="phone-numbr">
              <FormLabel
                className="firstname-label"
              >
                Phone
              </FormLabel>
              <Box >
                <Flex flexWrap="wrap" flexDirection={["column-reverse", "column-reverse", "row", "row"]} alignItems="center">
                  <Select
                    name="countryCode"
                    w={['23%', '23%']}
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                  </Select>
                  <Input
                    type="tel"
                    name="phone"
                    flex="1"
                    
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
         
          <FormLabel
            fontSize={{ base: "md", md: "lg" }}
            mt="4"
            ml="3"
            className="firstname-label"
          >
            Organisation
          </FormLabel>
          
          <Input
            type="text"
            fontSize={{ base: "md", md: "lg" }}
            placeholder="Organisation/Institute"
            width={"98%"}
            ml="3"
          />
 
          <Flex gap={4} mt="4" flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
            <Box m="auto" ml={3}>
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                Password
              </FormLabel>
              <PasswordInput />
            </Box>
            <Box>
              <FormLabel
                fontSize={{ base: "md", md: "lg" }}
                className="firstname-label"
              >
                Confirm Password
              </FormLabel>
              <Input
                type="text"
                fontSize={{ base: "md", md: "lg" }}
                placeholder="Confirm Password"
              />
            </Box>
          </Flex>

          <Checkbox
            colorScheme="green"
            defaultChecked
            mt={4}
            ml='2'
            className="signup-checkbox"
          >
            All your information is collected, stored and processed as per our
            data processing guidelines. By signing up on Unstop, you agree to
            our <a href="">Privacy Policy</a> and <a href="">Terms of Use</a>.
          </Checkbox>

          <Button
            variant={"outline"}
            color="white"
            bg="#1c4980"
            width={"98%"}
            ml="2"
            mt="2"
          >
            Register
          </Button>

          <Box className="login-already">
            Already have an account?{" "}
            <span>
              <a href="login">Login</a>
            </span>
          </Box>
        </FormControl> 
      </Box>
    </Box>
  );
};

export default Signup;
