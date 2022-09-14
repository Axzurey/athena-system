import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Tabs from './components/nav/Tabs';
import NueDashboard from './interface/NueDashboard';
import NueConnect from './interface/NueConnect';
import NueSettings from './interface/NueSettings';

import { BsGearFill } from "react-icons/bs";
import { FaChalkboard, FaDatabase } from 'react-icons/fa';

const tabIds = [
    {
        name: 'Dashboard',
        map: (<NueDashboard></NueDashboard>),
		icon: FaChalkboard
    },
    {
        name: 'Nue Connect',
        map: (<NueConnect></NueConnect>),
		icon: FaDatabase
    },
    {
        name: 'Settings',
        map: (<NueSettings></NueSettings>),
		icon: BsGearFill
    },
]

function App() {

	return (
        <>
            <ChakraProvider theme={theme}>
                <Tabs tabs={tabIds}>

                </Tabs>
            </ChakraProvider>
        </>
	);
}

export default App;