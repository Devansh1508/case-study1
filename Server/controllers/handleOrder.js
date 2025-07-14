const db = require('../config/db');

export const handleOrder = async (req, res) => {
    try {
        const { orderTime, travelTime } = req.body;
        const customer = `C${customerId++}`;
        const [drivers] = await db.query(
            'SELECT * FROM drivers WHERE free_at <= ? ORDER BY free_at ASC, id ASC LIMIT 1',
            [orderTime]
        );

        if (drivers.length === 0) {
            return res.status(404).send(`${customer} - No Food :-(`);
        }

        const newFreeTime = orderTime + travelTime;

        await db.query(
            'UPDATE drivers SET free_at = ? WHERE id = ?',
            [newFreeTime, driver.id]
        );

        await db.query(
            'INSERT INTO orders (order_time, travel_time, assigned_driver_id, status) VALUES (?, ?, ?, ?)',
            [orderTime, travelTime, driver.id, 'Assigned']
        );

        return res.send(`${customer} - D${driver.id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

