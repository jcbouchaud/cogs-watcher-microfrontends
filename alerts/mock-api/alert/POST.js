module.exports = (req, res) => {
    const alertId = req.body.id;
    const recordId = req.body.recordId

    if (!alertId || !recordId) {
        return res.sendStatus(400);
    }

    if (alertId === 1) {
        return res.sendStatus(409);
    }
    
    return res.status(201).send({
        "id": alertId,
        "recordId": recordId,
    });
}