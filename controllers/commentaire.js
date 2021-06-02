exports.commentaire = (req, res, next) => {
    const commentaire = [{
        contenue: 'Le contenue de mon permièrer commentaire',
        _id: 1,
        employesId: 'qsomihvqios',
    }, {
        contenue: 'Le contenue de mon Deuxième  commentaire',
        _id: 2,
        employesId: 'qsomihvqios',
    }];
    res.status(200).json(commentaire);
}