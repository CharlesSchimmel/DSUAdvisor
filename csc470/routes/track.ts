/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/track', (req: express.Request, res: express.Response) => {
    res.render('track');
});

export default router;