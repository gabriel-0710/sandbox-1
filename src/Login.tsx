import { Button, Flex, FormControl, FormLabel, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FormInput } from "./FormInput";

export function Login() {
    return (
        <Flex backgroundColor='transparent' width='full' height='100vh' justifyContent='center' alignItems='center'>     

        <Flex backgroundColor='white' width='380px' borderRadius='8px' height='max-content' padding='40px 32px' alignItems='center' flexDirection='column'>

            <Image src="./images/logo.svg" width='48px' height='48px' marginBottom='12px'/>

            <Text color='#A4A6B3' fontWeight='700' fontSize='1.1875rem' textAlign='center' marginBottom='32px'>DashBoard Kit</Text>

            <Text fontWeight='700' fontSize='1.5rem' textAlign='center' marginBottom='12px'>Log In to Dashboard Kit</Text>

            <Text color='#A4A6B3' fontWeight='400' fontSize='0.875rem' textAlign='center' marginBottom='48px'>Enter your email and password below</Text>

            <FormControl as={Stack} gap='24px' marginBottom='32px'>
                <FormInput label='Email' type='email' placeholder="Email Address"/>

                <FormInput label='Password' type='password' placeholder="Password"/>    

                <Button backgroundColor='#3751FF' color='white' fontSize='0.875rem' fontWeight='600' padding='16px' minHeight='48px' maxHeight='48px'>Log In</Button>            
            </FormControl>

            <HStack>

                <Text color='#9FA2B4' fontWeight='400' fontSize='0.875rem'>Don't have an account?</Text>
                <Text color='#3751FF' fontWeight='600' fontSize='0.875rem'>Sign Up</Text>

            </HStack>
            
        </Flex>
            
            

        </Flex>
    )
}