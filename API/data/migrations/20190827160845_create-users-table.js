
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
                .unique();
            tbl.string('firstName', 128)
                .notNullable();
            tbl.string('lastName', 128)
                .notNullable();
            tbl.string('username')
                .unique()
                .notNullable();
            tbl.string('password')
                .notNullable();
            tbl.string('email')
                .unique()
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
