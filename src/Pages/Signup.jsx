import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Hide,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PasswordInput from "../Components/Password/PasswordInput";
import { userSignup } from "../Redux/Auth/Action";
// import { userSignup } from "../";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  // const toast = useToast();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  // const handleSubmit = (e) => {

  //   e.preventDefault();
  //   if(firstname,lastname,username,gender,email,phone,organisation,password,confirmPassword){
  //     dispatch(
  //       userSignup({
  //         firstname: firstname,
  //         lastname: lastname,
  //         username: username,
  //         gender: gender,
  //         email: email,
  //         phone: phone,
  //         organisation: organisation,
  //         password: password,
  //         confirmPassword: confirmPassword
  //       })
  //     )
  //     .then(() => {
  //       toast({
  //         title: "Authentication successful!",
  //         status: "success",
  //         isClosable: true,
  //       });
  //     })
  //     .catch(() => {
  //       toast({
  //         title: "Something went wrong",
  //         status: "error",
  //         isClosable: true,
  //       });
  //     });
  //   }
  // }

  
  // isAuth ? (<Navigate to='/user'/>) :

  const handleSignup = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(`http://localhost:8080/user/signup`, payload)
      .then((r) => {
        console.log(r.data);
        navigate("/login");
      })
      .catch(
        (e) => setError(true)
        // console.log(e)
      );
  };
  // const handleGoogleLogin = async () => {
  //   await axios
  //     .get("http://localhost:8080/auth/google", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //         "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
  //       },
  //     })
  //     .then((r) => {
  //       console.log(r);
  //       if (r.data.token) {
  //         localStorage.setItem("login_token", r.data.token);
  //         localStorage.setItem("email", r.data.email);
  //         navigate("/clockify/");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
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
                <Input
                  type="text"
                  placeholder="FirstName"
                  required
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel className="firstname-label">Last Name</FormLabel>
                <Input
                  type="text"
                  placeholder="LastName"
                  required
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
            </Box>

            <Box display={["block", "flex", "flex"]} alignItems="center" mt={4}>
              <Box m={"auto"}>
                <FormLabel className="firstname-label">User Name</FormLabel>
                <Input
                  type="text"
                  placeholder="UserName"
                  className="username"
                  required
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel className="firstname-label">Gender</FormLabel>
                <Select
                  placeholder="Gender"
                  className="select-sign"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
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
                <Input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box className="phone-numbr">
                <FormLabel className="firstname-label">Phone</FormLabel>
                <Box>
                  <InputGroup>
                    <InputLeftAddon children="+91" />
                    <Input
                      type="tel"
                      placeholder="phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
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
                required
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
              />
            </Box>
            <Box display={["block", "flex", "flex"]} mt={4}>
              <Box m="auto">
                <FormLabel className="firstname-label">Password</FormLabel>
                <PasswordInput
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel className="firstname-label">
                  Confirm Password
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Box>
            </Box>
            <Box mt={4} display="flex">
              <Checkbox
                colorScheme="green"
                defaultChecked
                mt={2}
                pl={"11%"}
                className="signup-checkbox"
                required
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
                onClick={handleSignup}
              >
                Register
              </Button>
            </Box>

            

            <Box className="login-already">
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </Box>
          </form>

          {/* <Flex alignItems="center" gap="2" w={'50%'}  ml={'31%'} mt='1rem'>
                    <Divider orientation="horizontal" w={"48%"}></Divider>
                    <Box>
                      <Text fontSize={"20px"}>OR</Text>
                    </Box>
                    <Divider orientation="horizontal" w={"48%"}></Divider>
                  </Flex>
            <Box ml={'10%'}>
              
                  <Flex
                    justifyContent={"center"}
                    margin={"auto"}
                    border={"1px solid gray"}
                    h={"20%"}
                    mt='1rem'
                    w='50%'
                  >
                    <Box w={"80px"} h={"50px"}>
                      <Image
                        h={"28px"}
                        m="5px"
                        ml={"10px"}
                        mt={"8px"}
                        src={
                          "https://app.clockify.me/assets/ui-icons/icon-google.svg"
                        }
                      ></Image>
                    </Box>
                    <Spacer />
                    <Text
                      textAlign={"center"}
                      mt={"8px"}
                      w={"400px"}
                      fontSize={"19px"}
                      color={"#666"}
                      onClick={handleGoogleLogin}
                    >
                      Continue with google
                    </Text>
                  </Flex>
                  
            </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
