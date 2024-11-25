import express from 'express';

const router = express.Router();

/*
// Ruta para obtener el historial de mensajes
router.get('/history', async (req, res) => {
    try {
        // Encuentra todos los mensajes en la base de datos
        const messages = await Message.find({});
        res.json({ messages });
    } catch (error) {
        // Maneja cualquier error que ocurra
        res.status(500).json({ error: 'Error retrieving message history' });
    }
});

router.get('/chat', (req, res) => {
    res.render('chat');
});
*/

export default router;
