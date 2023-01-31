import { createClient } from 'contentful';

const useContentful = () => {

    console.log(process.env)

    const client = createClient({
        space: `${process.env.REACT_APP_SPACE_API_KEY}`,
        accessToken: `${process.env.REACT_APP_ACCESS_TOKEN_API_KEY}`,
        host: "preview.contentful.com",
    });

    const getValueProposition =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "valueProposition",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.valueProposition

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };

    const getEmergencyService =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "emergencyService",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.emergencyService

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };

    const getRenovationService =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "renovationService",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.renovationService

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };

    const getMaintenanceService =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "maintenanceService",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.maintenanceService

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };

    const getInstallationService =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "installationService",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.installationService

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };

    const getAbout =  async () => {
        try {
            const entries = await client.getEntries({
                content_type: "about",
                select: "fields",
            });

            const sanitizedEntries = entries.items[0].fields.about

            return sanitizedEntries;

        } catch (error) {
            console.log(`Error fetching authors: ${error}`);
        }
    };



    return { 
            getValueProposition,
            getEmergencyService,
            getRenovationService,
            getMaintenanceService,
            getInstallationService,
            getAbout
            };
};

export default useContentful;