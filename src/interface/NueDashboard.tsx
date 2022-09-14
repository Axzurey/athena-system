import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import NueSignup from '../components/auth/NueSignup';

export default function NueDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
    <Box>
    {
        isLoggedIn ? undefined : (<NueSignup></NueSignup>)
    }
    </Box>
    )
}