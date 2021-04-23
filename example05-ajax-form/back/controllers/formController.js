

module.exports.search = (req, res)=>{
    const q = req.query.q;
    console.log("q = ", q);

    res.send(`Vous avez fait une recherche pour le terme <b>${q}</b>`);
};

module.exports.getUsers = (req, res)=>{
    res.send("les utilisateurs");
};