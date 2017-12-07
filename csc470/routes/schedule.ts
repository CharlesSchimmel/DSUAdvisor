/*
 * GET schedule page
 */
import express = require('express');
const router = express.Router();

router.get('/schedule', (req: express.Request, res: express.Response) => {
    res.render('schedule');
});

export default router;
