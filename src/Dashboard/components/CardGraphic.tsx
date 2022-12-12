import { Flex, Input, Text } from "@chakra-ui/react";

    interface CardGraphicProps{
        titulo: string;
        numero: string;
    }

export function CardGraphic({titulo, numero}:CardGraphicProps) {
    return(
        <Flex flexDirection='column' border='1px' borderRadius={'10px'} padding='16px 32px 16px 32px' textAlign={'center'} borderColor='#E6E6E6' backgroundColor={'white'}>
            <Text fontSize='1rem' color={'#9FA2B4'}>{titulo}</Text>
            <Text fontSize='1.5rem'>{numero}</Text>            
        </Flex>
    )
}