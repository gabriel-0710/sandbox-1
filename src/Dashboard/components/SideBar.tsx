import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export function SideBar() {
    return(
        
        <Flex minWidth='255px' backgroundColor='#363740' flexDirection='column'>
            <HStack padding='15px' paddingLeft='40px'>
                <Image src='./images/logo.svg' width='32px' height='32px'/>
                <Text color='#DDE2FF'>DashBoard Kit</Text>
            </HStack>

            <MenuItem title="Overview"/>
            <MenuItem title="Tickets"/>
            <MenuItem title="Ideas"/>
            <MenuItem title="Contacts"/>
            <MenuItem title="Agents"/>
            <MenuItem title="Articles"/>
        </Flex>
    )
}