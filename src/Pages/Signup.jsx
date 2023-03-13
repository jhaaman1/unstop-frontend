import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../Components/Password/PasswordInput";
import "./Signup.css";

const Signup = () => {
  return (
    // <Box className="sign-container" border={'1px solid red'} w={['100%']} p={4}>
    //   <Heading fontSize={{ base: "2xl", md: "4xl" }} className="heading-signup">
    //     Welcome!
    //   </Heading>
    //   <Box className="signupformbox">
    //     <FormControl className="form-main" isRequired>
    //       <Flex
    //         flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    //       >
    //         <Box m="auto">
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             First Name
    //           </FormLabel>
    //           <Input
    //             type="text"
    //             fontSize={{ base: "md", md: "lg" }}
    //             placeholder="FirstName"
    //           />
    //         </Box>
    //         <Box>
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             Last Name
    //           </FormLabel>
    //           <Input
    //             type="text"
    //             fontSize={{ base: "md", md: "lg" }}
    //             placeholder="LastName"
    //           />
    //         </Box>
    //       </Flex>

    //       <Flex
    //         mt="4"
    //         flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    //       >
    //         <Box m="auto" ml={4}>
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             User Name
    //           </FormLabel>
    //           <Input
    //             type="text"
    //             fontSize={{ base: "md", md: "lg" }}
    //             placeholder="UserName"
    //           />
    //         </Box>
    //         <Box>
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             Gender
    //           </FormLabel>
    //           <Select placeholder="Gender" className="select-sign">
    //             <option value="male">Male</option>
    //             <option value="female">Female</option>
    //             <option value="transgender">Transgender</option>
    //             <option value="intersex">Intersex</option>
    //             <option value="nonbinary">Non Binary</option>
    //             <option value="prefer">Prefer not to say</option>
    //           </Select>
    //         </Box>
    //       </Flex>

    //       <Flex
    //         gap={4}
    //         mt="4"
    //         flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    //       >
    //         <Box m="auto" ml={4}>
    //           <FormLabel className="firstname-label">Email</FormLabel>
    //           <Input type="text" placeholder="Email" w={"280px"} />
    //         </Box>
    //         <Box className="phone-numbr">
    //           <FormLabel className="firstname-label">Phone</FormLabel>
    //           <Box>
    //             {/* <Flex flexWrap="wrap" flexDirection={["column-reverse", "column-reverse", "row", "row"]} alignItems="center">
    //               <Select
    //                 name="countryCode"
    //                 w={['23%', '23%']}
    //               >
    //                 <option value="+1">+1 (USA)</option>
    //                 <option value="+44">+44 (UK)</option>
    //                 <option value="+91">+91 (India)</option>
    //               </Select>
    //               <Input
    //                 type="tel"
    //                 name="phone"
    //                 flex="1"

    //               />
    //             </Flex> */}
    //             <InputGroup>
    //               <InputLeftAddon children="+91" h={'48px'} />
    //               <Input type="tel" placeholder="phone number" />
    //             </InputGroup>
    //           </Box>
    //         </Box>
    //       </Flex>

    //       <FormLabel
    //         fontSize={{ base: "md", md: "lg" }}
    //         mt="4"
    //         ml="3"
    //         className="firstname-label"
    //       >
    //         Organisation
    //       </FormLabel>

    //       <Input
    //         type="text"
    //         fontSize={{ base: "md", md: "lg" }}
    //         placeholder="Organisation/Institute"
    //         width={"98%"}
    //         ml="3"
    //       />

    //       <Flex
    //         gap={4}
    //         mt="4"
    //         flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    //       >
    //         <Box m="auto" ml={3}>
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             Password
    //           </FormLabel>
    //           <PasswordInput />
    //         </Box>
    //         <Box>
    //           <FormLabel
    //             fontSize={{ base: "md", md: "lg" }}
    //             className="firstname-label"
    //           >
    //             Confirm Password
    //           </FormLabel>
    //           <Input
    //             type="text"
    //             fontSize={{ base: "md", md: "lg" }}
    //             placeholder="Confirm Password"
    //           />
    //         </Box>
    //       </Flex>

    //       <Checkbox
    //         colorScheme="green"
    //         defaultChecked
    //         mt={4}
    //         ml="2"
    //         className="signup-checkbox"
    //       >
    //         All your information is collected, stored and processed as per our
    //         data processing guidelines. By signing up on Unstop, you agree to
    //         our <a href="">Privacy Policy</a> and <a href="">Terms of Use</a>.
    //       </Checkbox>

    //       <Button
    //         variant={"outline"}
    //         color="white"
    //         bg="#1c4980"
    //         width={"98%"}
    //         ml="2"
    //         mt="2"
    //       >
    //         Register
    //       </Button>

    //       <Box className="login-already">
    //         Already have an account?{" "}
    //         <span>
    //           <a href="login">Login</a>
    //         </span>
    //       </Box>
    //     </FormControl>
    //   </Box>
    // </Box>

    <Box display={"flex"} gap="10%" width="100%" h={"100vh"}>
      <Hide breakpoint="(max-width: 500px)">
        <Box width="45%" border={"2px solid red"}></Box>
      </Hide>
      <Box width={["100%", "45%"]} padding={"1rem"}>
        <Box color="blue" textAlign={"center"}>
          <Heading size={"1rem"} className="heading-signup">
            Welcome!
          </Heading>
        </Box>

        <Box>
          <form>
            <Box display={["block", "flex", "flex"]}>
              <Box m="auto">
                <FormLabel className="firstname-label">First Name</FormLabel>
                <Input type="text" placeholder="FirstName" />
              </Box>

              <Box>
                <FormLabel className="firstname-label">Last Name</FormLabel>
                <Input type="text" placeholder="LastName" />
              </Box>
            </Box>

            <Box display={["block", "flex", "flex"]} alignItems="center" mt={4}>
              <Box m={"auto"}>
                <FormLabel className="firstname-label">User Name</FormLabel>
                <Input
                  type="text"
                  placeholder="UserName"
                  className="username"
                />
              </Box>
              <Box>
                <FormLabel className="firstname-label">Gender</FormLabel>
                <Select placeholder="Gender" className="select-sign">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="intersex">Intersex</option>
                  <option value="nonbinary">Non Binary</option>
                  <option value="prefer">Prefer not to say</option>
                </Select>
              </Box>
            </Box>
            <Box mt={4} display={["block", "flex", "flex"]}>
              <Box m="auto">
                <FormLabel className="firstname-label">Email</FormLabel>
                <Input type="text" placeholder="Email" />
              </Box>
              <Box className="phone-numbr">
                <FormLabel className="firstname-label">Phone</FormLabel>
                <Box>
                  <InputGroup>
                    <InputLeftAddon children="+91" />
                    <Input type="tel" placeholder="phone number" />
                  </InputGroup>
                </Box>
              </Box>
            </Box>

            <Box m="auto" pl={"11%"} mt={4}>
              <FormLabel
                // mt="4"
                className="firstname-label"
              >
                Organisation
              </FormLabel>

              <Input
                type="text"
                placeholder="Organisation/Institute"
                width={"100%"}
              />
            </Box>
            <Box display={["block", "flex", "flex"]} mt={4}>
              <Box m="auto">
                <FormLabel className="firstname-label">Password</FormLabel>
                <PasswordInput />
              </Box>
              <Box >
                <FormLabel className="firstname-label">
                  Confirm Password
                </FormLabel>
                <Input type="text" placeholder="Confirm Password" />
              </Box>
            </Box>
            <Box mt={4} display="flex">
              <Checkbox
                colorScheme="green"
                defaultChecked
                mt={2}
                pl={"11%"}
                className="signup-checkbox"
              >
                All your information is collected, stored and processed as per
                our data processing guidelines. By signing up on Unstop, you
                agree to our <a href="">Privacy Policy</a> and{" "}
                <a href="">Terms of Use</a>.
              </Checkbox>
            </Box>
            <Box m="auto">
              <Button
                variant={"outline"}
                color="white"
                bg="#1c4980"
                width={"90%"}
                ml="11%"
                mt="2"
              >
                Register
              </Button>
            </Box>

            <Box className="login-already">
              Already have an account?{" "}
              <span>
                <Link to='/login'>Login</Link>
              </span>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
