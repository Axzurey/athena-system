import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import NueConnect from "./NueConnect";
import NueDashboard from "./NueDashboard";
import NueSettings from "./NueSettings";
import { NueTube } from "./NueTube";

const tabIds = [
    {
        name: 'Dashboard',
        map: (<NueDashboard></NueDashboard>)
    },
    {
        name: 'Connect',
        map: (<NueConnect></NueConnect>)
    },
    {
        name: 'Settings',
        map: (<NueSettings></NueSettings>)
    },
    {
        name: 'NueTube',
        map: (<NueTube></NueTube>)
    }
]

export default class AXTabs extends React.Component {
    render() {
        return (
            <Tabs size='md' variant='enclosed' >
                <TabList>
                    {tabIds.map((v) => {
                        return (
                            <Tab>
                                {v.name}
                            </Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    {tabIds.map((v) => {
                        return (
                            <TabPanel>
                                {v.map}
                            </TabPanel>
                        )
                    })}
                </TabPanels>
            </Tabs>
        )
    }
}