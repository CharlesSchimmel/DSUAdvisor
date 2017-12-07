/*
 * GET schedule page
 */
import express = require('express');
const router = express.Router();

console.log("HII");
router.get('/schedule', (req: express.Request, res: express.Response) => {
    res.render('schedule');
});

export default router;
