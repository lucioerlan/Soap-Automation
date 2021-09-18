exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('andress')
        .del()
        .then(() => {
            // Inserts seed entries
            return knex('andress').insert([
                {
                    cep: '56507115'
                },
                {
                    cep: '57072044'
                },
                {
                    cep: '78158568'
                },
                {
                    cep: '49043766'
                },
                {
                    cep: '76913701'
                },
                {
                    cep: '78048210'
                },
                {
                    cep: '28015352'
                },
                {
                    cep: '68906852'
                },
                {
                    cep: '79600060'
                }
            ]);
        });
}; 
