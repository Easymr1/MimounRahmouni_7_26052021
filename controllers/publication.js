exports.publication = (req, res, next) => {
    const publication = [{
        titre: 'first publication',
        contenue: 'Le contenue de ma permière publication',
        _id: 1,
        date: Date()
    }, {
        titre: 'second publication',
        contenue: 'Le contenue de ma Deuxième  publication',
        _id: 2,
        employesId: 'qsomihvqios',
        date: Date()
    }];
    res.status(200).json(publication);
}