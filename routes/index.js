import { Router } from 'express'
import axios from 'axios';
import logger from '../logger/index.js';

const router = Router()

// Endpoint for Aircall Webhook
router.post('/aircall-webhook', async (req, res) => {
    try {
        console.log(req.body);
        const { event, data } = req.body;

        // Logging the incoming event
        logger.info(`Received an Aircall event: ${event}`);

        if (event === 'call.transferred') {

            logger.info('Processing a call.transferred event');

            const postObject = {
                title: "test",
                from: "07243453",
                to: data.CLID,
                protocolType: "WhatsApp",
                params: []
            };

            logger.debug(`Sending message with following details: ${JSON.stringify(postObject)}`);

            const glassixResponse = await axios.post('http://localhost:1192/api/message/non-ticket/124', postObject, {
                headers: {
                    'Authorization': `Bearer your_glassix_token_here`,
                    'Content-Type': 'application/json',
                },
            });

            if (glassixResponse.status === 200) {
                logger.info('Message sent successfully to Glassix');
            } else {
                logger.warn(`Received a non-200 response from Glassix: ${glassixResponse.status}`);
            }
        }

        res.status(200).send('Webhook received');
        logger.info('Responded with 200 OK');
    } catch (error) {
        logger.error(`Error encountered: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

export default router 
