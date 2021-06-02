exports.publication = (req, res, next) => {
    const publication = [{
        titre: 'first publication',
        contenue: 'Le contenue de ma permière publication',
        _id: 1
    }, {
        titre: 'second publication',
        contenue: 'Le contenue de ma Deuxième  publication',
        _id: 2,
        employesId: 'qsomihvqios',
    }];
    let onepublication = publication.find(one => one.publication._id == req.body.id);
    console.log(publication.map(one => one._id))
    res.status(200).json(onepublication);
}