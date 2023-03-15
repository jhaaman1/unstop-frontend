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
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../Components/Password/PasswordInput";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
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
  
  // isAuth ? (<Navigate to='/user'/>) :

  //  const handleSignup = () => {
  //   const payload = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     username: username,
  //     gender: gender,
  //     email: email,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //     phone: phone,
  //     organisation: organisation
      
  //   };
  //   axios
  //     .post(`http://localhost:8080/register/add-user`, payload)
  //     .then((r) => {
  //       console.log(r.data);
  //       navigate("/login");
  //     })
  //     .catch(
  //       (e) => setError(true)
  //       // console.log(e)
  //     );
  //  };
 
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    const payload = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      gender: gender,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      phone_number: phone,
      organisation: organisation
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8080/register/add-user",
        payload
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  
  return (
    <Box display={"flex"} gap="10%" width={["100%","100%","100%","90%"]} m={['none','none','none','auto']} h={"100vh"} >
      <Hide breakpoint="(max-width: 997px)" alignItems='center'>
        <Box width={['100%',"60%","100%","45%"]} border='3px solid red'></Box>
      </Hide>
      <Box width={["100%", "80%","70%","45%"]} m={['auto','auto','auto','auto']}>
        <Box color="blue" textAlign={"center"}>
          <Heading size={"1rem"} className="heading-signup">
            Welcome!
          </Heading>
        </Box>

        <Box mt={[2,2,4,4]}>
          <form>
            <Box display={["block", "block", "flex", "flex"]} justifyContent={['none',"none","space-between","space-between"]}  >

              <Box  w={['100%','100%','45%','45%']}>
                <FormLabel className="firstname-label">First Name</FormLabel>
                <Input
                  type="text"
                  placeholder="FirstName"
                  required
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>

              <Box  w={['100%','100%','45%','45%']} >
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

            <Box display={["block", "block", "flex", "flex"]} justifyContent={['none',"none","space-between","space-between"]} alignItems="center" mt={[2,2,4,4]}>
              <Box  w={['100%','100%','45%','45%']}>
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
              <Box w={['100%','100%','45%','45%']} >
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
            <Box mt={4} display={["block", "block", "flex", "flex"]} justifyContent={['none',"none","space-between","space-between"]}>
              <Box w={['100%','100%','45%','45%']} >
                <FormLabel className="firstname-label">Email</FormLabel>
                <Input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box className="phone-numbr" w={['100%','100%','45%','45%']}>
                <FormLabel className="firstname-label">Phone</FormLabel>
                <Box w={['100%','100%','100%',"100%"]}>
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

            <Box m="auto" mt={4}>
              <FormLabel
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


            <Box display={["block", "block", "flex", "flex"]} justifyContent={['none',"none","space-between","space-between"]} mt={4} >
              <Box w={['100%','100%','45%','45%']}>
                <FormLabel className="firstname-label">Password</FormLabel>
                <PasswordInput
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box w={['100%','100%','45%','45%']}>
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
                pl={['1','1',"1","1"]}
                className="signup-checkbox"
                required
              >
                All your information is collected, stored and processed as per
                our data processing guidelines. By signing up on Unstop, you
                agree to our <a href="">Privacy Policy</a> and{" "}
                <a href="">Terms of Use</a>.
              </Checkbox>
            </Box>
            <Box>
              <Button
                variant={"outline"}
                color="white"
                bg="#1c4980"
                width={['100%','100%',"100%","100%"]}
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

        
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
