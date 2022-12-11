import { FormLabel, Input, Stack } from "@chakra-ui/react";

interface FormInputProps {
    label: string;
    placeholder?: string;
    type: 'email' | 'password';
}

export function FormInput({label, placeholder, type}:FormInputProps) {
    return (
        <Stack>
            <FormLabel color='#A4A6B3' fontWeight='700' fontSize='0.75rem' textTransform='uppercase'>{label}</FormLabel>
            <Input type={type} placeholder={placeholder} border='1px solid #F0F1F7' _placeholder={{color: '#4B506D', opacity:'0.4'}}/>
        </Stack>
    )
}