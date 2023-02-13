const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {


	index: (req, res) => {
		const productInSale = products.filter(product => product.category ==="in-sale")
		const productVisited = products.filter(product => product.category ==="visited")
	  res.render("index" , {
		productInSale,
		productVisited,
		toThousand
	  })
	},
	search: (req, res) => {
		const {keywords} = req.querry
		const results = products.filter(product.name.tolowerCase() == keywords.tolowerCase())
		res.render("results",{
		 keywords,
		 results,
		 toThousand,	
		})
	},
};

module.exports = controller;
