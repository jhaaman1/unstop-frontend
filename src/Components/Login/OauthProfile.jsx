import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  Radio,
  HStack,
  RadioGroup,
  FormLabel,
  InputLeftAddon,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import "./Oauth.css";
import { BsFillPersonFill } from "react-icons/bs";

const OauthProfile = () => {
  return (
    <Box w={["100%", "100%", "90%", "70%"]} m="auto">
      <Box w={["100%", "100%", "90%", "80%"]} m="auto" >
        <Flex justifyContent={"space-between"}>
          <Box className="editprofile">
            <Text font-weight="500">Edit Profile</Text>
          </Box>
          <span className="fields">
            Fields marked with <sup className="star">*</sup> are mandatory!
          </span>
        </Flex>
        {/* //icons and email id */}

        <Box
          display={["flex", "flex", "flex", "flex"]}
          gap={[2, 2, 2, 2]}
          alignItems="center"
        >
          <Icon as={BsFillPersonFill} w="30px" h="40px" color="#1c4980" />
          <Text fontWeight={500} fontSize={"13px"} color="#1c4980">
            a@gmail.com
          </Text>
        </Box>
        <form>
          <FormLabel as="legend" mt={[7,7,7,7]}>Pronouns</FormLabel>
          <RadioGroup defaultValue="Itachi" color="#1c4980">
            <HStack spacing="24px">
              <Radio value="He/His/Him">He/His/Him</Radio>
              <Radio value="She/Her">She/Her</Radio>
              <Radio value="Them/They">Them/They</Radio>
              <Radio value="Do not want to show">Do not want to show</Radio>
            </HStack>
          </RadioGroup>

          <Box
            display={["block", "block", "flex", "flex"]}
            justifyContent={["none", "none", "space-between", "space-between"]}
            mt={[5, 5, 5, 7]}
          >
            <Box w={["100%", "100%", "45%", "45%"]}>
              <FormLabel className="firstname-label">First Name</FormLabel>
              <Input
                type="text"
                placeholder="FirstName"
                required
                //   value={firstname}
                //   onChange={(e) => setFirstName(e.target.value)}
              />
            </Box>

            <Box w={["100%", "100%", "45%", "45%"]}>
              <FormLabel className="firstname-label">Last Name</FormLabel>
              <Input
                type="text"
                placeholder="LastName"
                required
                //   value={lastname}
                //   onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
          </Box>

          {/* phone number */}

          <Box
            className="phone-numbr"
            w={["100%", "100%", "45%", "45%"]}
            mt={[5, 5, 5, 7]}
          >
            <FormLabel className="firstname-label">Phone</FormLabel>
            <Box w={["100%", "100%", "100%", "100%"]}>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="phone number"
                  required
                  //   value={phone}
                  //   onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </Box>
          </Box>

          {/* organisation/college */}

          <Box m="auto" mt={[5, 5, 5, 7]}>
            <FormLabel className="firstname-label">Organisation</FormLabel>

            <Input
              type="text"
              placeholder="Organisation/Institute"
              width={"100%"}
              required
              //   value={organisation}
              //   onChange={(e) => setOrganisation(e.target.value)}
            />
          </Box>

          {/* country input */}

          <Box m="auto" mt={[5, 5, 5, 7]}>
            <FormLabel className="firstname-label">Country</FormLabel>

            <Input
              type="text"
              placeholder="Organisation/Institute"
              width={"100%"}
              required
              //   value={organisation}
              //   onChange={(e) => setOrganisation(e.target.value)}
            />
          </Box>

          {/* gender */}

          <FormLabel as="legend" mt={[3, 3, 3, 6]} color={'#1c4980 '}>
            Gender
          </FormLabel>
          <RadioGroup defaultValue="Do not want to show" color="#1c4980">
            <HStack spacing="24px">
              <Radio value="Female">Female</Radio>
              <Radio value="Male">Male</Radio>
              <Radio value="Transgender">Transgender</Radio>
              <Radio value="Intersex">Intersex</Radio>
              <Radio value="Non-binary">Non-binary</Radio>
              <Radio value="Do not want to show">Do not want to show</Radio>
              <Radio value="Let me Specify">Let me Specify</Radio>
            </HStack>
          </RadioGroup>

          {/* usertype */}

          <FormLabel as="legend" color={'#1c4980 '} mt={[3, 3, 3, 6]}>User Type</FormLabel>
          <RadioGroup defaultValue="other" color="#1c4980">
            <HStack spacing="24px">
              <Radio value="College Student">College Student</Radio>
              <Radio value="School Student">School Student</Radio>
              <Radio value="Professional">Professional</Radio>
              <Radio value="Fresher">Fresher</Radio>
              <Radio value="Recuriter">Recuriter</Radio>
              <Radio value="Other">Other</Radio>
            </HStack>
          </RadioGroup>

          {/* summary */}

          <Box m="auto" mt={[5, 5, 5, 7]}>
            <FormLabel className="firstname-label">Summary</FormLabel>

            <Input
              type="text"
              placeholder="Add Custom message"
              h={["20px", "30px", "50px", "100px"]}
              width={"100%"}
              required
              //   value={organisation}
              //   onChange={(e) => setOrganisation(e.target.value)}
            />
          </Box>

          <Box m="auto" mt={[5, 5, 5, 7]}>
            <FormLabel className="firstname-label">Skills</FormLabel>

            <Input
              type="text"
              placeholder="search skills"
              h={["20px", "30px", "30px", "50px"]}
              width={"100%"}
              required
              //   value={organisation}
              //   onChange={(e) => setOrganisation(e.target.value)}
            />
          </Box>

          <Button className="submitbtn" ml={['20%','20%','20%','50%']} variant="solid" mt={[4,4,4,6]}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default OauthProfile;
