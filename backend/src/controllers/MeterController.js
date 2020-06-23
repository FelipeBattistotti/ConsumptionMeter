const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { cpf, megabyte, hour } = request.body;

        const [id] = await connection('meter').insert({
            cpf,
            megabyte,
            hour,
            date,
        });

        return response.json({ id });
    }
}
