app.get('/image', (req, res)  => {
    imageModel.findOne({_id : "603b433d461d4c19f54f15f3"}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
        	var thumb = new Buffer(data.img.data).toString('base64');
            res.render('imagesPage', { title : "express", img : thumb });
        }
    });
});


