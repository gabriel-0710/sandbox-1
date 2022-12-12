import { Flex, Input, Text } from "@chakra-ui/react";

    interface CardStatusProps{
        titulo: string;
        numero: string;
    }

export function CardStatus({titulo, numero}:CardStatusProps) {
    return(
        <Flex flexDirection='column' border='1px' borderRadius={'10px'} padding='24px 32px 24px 32px' textAlign={'center'} borderColor='#E6E6E6' backgroundColor={'white'}>
            <Text fontSize='1.1875rem' color={'#9FA2B4'}>{titulo}</Text>
            <Text fontSize='2.5rem'>{numero}</Text>            
        </Flex>
    )
}