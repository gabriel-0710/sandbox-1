import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CardStatus } from "./components/CardStatus";
import { SideBar } from "./components/SideBar";
import { Overview } from "./views/Overview";

export function Dashboard() {
    return(
        <Flex  width='full' height='full' minHeight='100vh' backgroundColor='#F7F8FC'>
            <Flex>
                <SideBar/>
                <Overview/>
            </Flex>
        {/* <Flex>

            <Flex padding={'30px'}>
                    <VStack border={'1px'}>
                    <CardStatus titulo='Unresolved' numero={"60"}/>
                    </VStack>
                    <VStack border={'1px'}>
                    <CardStatus titulo='Unresolved' numero={"60"}/>
                    </VStack>
            </Flex>
        </Flex> */}
        </Flex>
        
    )
}