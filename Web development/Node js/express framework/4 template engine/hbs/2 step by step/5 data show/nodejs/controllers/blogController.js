
// model should be included here

const blog_index = (req, res)=> {
	res.send("from router page")
}

const block_detail = (req, res)=> {
	res.send("blog detail")
}






module.exports = {
	blog_index, 
	block_detail
}