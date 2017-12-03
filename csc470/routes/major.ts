/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/major', (req: express.Request, res: express.Response) => {
    res.render('major');
});

export default router;