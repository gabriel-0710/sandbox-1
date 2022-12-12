import { Box, Flex, FormControl, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { CardGraphic } from "../components/CardGraphic";
import { CardStatus } from "../components/CardStatus";


export function Overview() {
    return(
        
        <Flex flexDirection={'column'}>

            {/* Header */}
            <Flex>
                <HStack padding='15px' gap={'750px'}>
                    <Text fontSize='1.5rem' fontWeight='700'>Overview</Text>
                        <HStack>
                            <Image src='./images/search.svg' width='16px' height='16px'/>
                            <Image src='./images/new.svg' width='16px' height='16px'/>            
                            <Text fontSize='0.875rem' fontWeight='600'>Gabriel Andrade</Text>
                            <Image src='./images/avatar3.svg' width='44px' height='44px'/>            
                        </HStack>                     
                </HStack>
            </Flex>

            {/* Cards */}
            <Flex alignItems='center' padding='20px' flexDirection={'row'} justifyContent='center'>
                <HStack>
                    <CardStatus titulo='Unresolved' numero='60'/>
                    <CardStatus titulo='Overdue' numero='16'/>
                    <CardStatus titulo='Open' numero='43'/>
                    <CardStatus titulo='On hold' numero='64'/>
                </HStack>
            </Flex>

            {/* Graphic Box */}
            <Flex flexDirection={'row'} border='1px' borderRadius={'10px'} margin='20px' backgroundColor={'white'} padding='32px' borderColor={'#E6E6E6'} maxWidth={'1152px'} maxHeight={'546px'}>
                {/* Graphic */}
                <Flex flexDirection={'column'}>
                    <Text fontSize={'1.185rem'} fontWeight='700'>Today's Trends</Text>
                    <Text fontSize={'0.75rem'} fontWeight='400' color={'#9FA2B4'} marginBottom='3.25rem'>as of 12 December 2022, 01:25 am</Text>
                    <Image src='./images/graph.svg'></Image>
                </Flex>

                {/* Information */}

                <Flex flexDirection={'column'} width='100vh' maxWidth={'352px'} maxHeight={'546px'} marginLeft='1rem'>
                    <CardGraphic titulo='Resolved' numero='449'/>
                    <CardGraphic titulo='Received' numero='426'/>
                    <CardGraphic titulo='Average first response time' numero='33m'/>
                    <CardGraphic titulo='Average response time' numero='3h 8m'/>
                    <CardGraphic titulo='Resolution within SLA' numero='94%'/>

                </Flex>

            </Flex>

        </Flex>
        
    )
}