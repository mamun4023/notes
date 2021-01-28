// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res)=> {
    res.send("from controller page")
}



const blog_detail = (req, res)=> {
	res.send("from datails page")
}


module.exports = {
	blog_index,
	blog_detail
}