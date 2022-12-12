import { Text } from "@chakra-ui/react";

interface MenuItemProps {
    title: string;
}

export function MenuItem({title}:MenuItemProps) {
    return(
        <Text color='#DDE2FF' padding='15px' paddingLeft='40px'>{title}</Text>
    )
}