﻿/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('profile', {
        tile: "Accout Information",
        user: "NAME"
    });
});

export default router;