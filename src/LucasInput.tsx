import { Flex, Text, Input } from "@chakra-ui/react";

interface ContainerProps {
    title: string;
    value?: string;
    placeholder?: string;
}

export function LucasInput({title, value, placeholder} : ContainerProps) {
    return (
        // <div>
        //     <label style={{'textTransform': 'capitalize'}}>{title}</label>
        //     <input value={value} placeholder={placeholder}/>
        // </div>

        <Flex flexDirection="column" alignItems="flex-start">
            <Text color="red.100" fontWeight="bold" textTransform="capitalize">{title}</Text>
            <Input placeholder={placeholder} value={value}/>
        </Flex>
    )
}