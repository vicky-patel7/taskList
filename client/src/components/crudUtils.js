const crudDetails = {
    create: {
        id : 1,
        title: 'CREATE',
        desc : 'The CREATE operation adds a new record to a database. The CREATE operation adds one or more new records with distinct field values in a table.'
    },
    read : {
        id : 2,
        title : 'READ',
        desc : 'READ returns records (or documents or items) from a database table (or collection or bucket) based on some search criteria. The READ operation can return all records and some or all fields.'
    },
    update : {
        id : 3,
        title : 'UPDATE',
        desc : 'UPDATE is used to modify existing records in the database. For example, this can be the change of address in a customer database or price change in a product database. Similar to READ, UPDATEs can be applied across all records or only a few, based on criteria.'
    },
    delete : {
        id : 4,
        title : 'DELETE',
        desc : 'DELETE operations allow the user to remove records from the database. A hard delete removes the record altogether, while a soft delete flags the record but leaves it in place.'
    }
}


export default crudDetails;