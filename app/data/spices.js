const spices = [
	{
		"id": 1,
		"title":"Coriander Seeds",
		"image":"coriander-seeds.jpg",
		"description":"Seeds are typically toasted before being ground and added to meat rubs, curries, breads.",
		"flavors":["lemony","sweet"],
		"uses":["meat rub","curry","bread"],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 2,
		"title":"Sweet Paprika",
		"image":"sweet-paprika.jpg",
		"description":`Considered the national spice of Hungary, this sweet paprika is ubiquitous in Hungarian cuisine- from paprikash to cabbage rolls.`,
		"flavors":[],
		"uses":["paprikash","cabbage rolls"],
		"meat":["chicken","beef","fish"],
		"pungency":1,
	},
	{
		"id": 3,
		"title":"Smoked Paprika",
		"image":"smoked-paprika.jpg",
		"description":`The best way to get maximum flavor from these smoked paprika peppers is to heat in oil before using. We love this in deviled eggs, potato salad, roasted potatoes and meat braises.`,
		"flavors":[],
		"uses":["deviled eggs","potato salad","roasted potatoes","meat braises"],
		"meat":["chicken","beef","fish"],
		"pungency":1,
	},
	{
		"id": 4,
		"title":"Turmeric Powder",
		"image":"turmeric-powder.jpg",
		"description":`Adds a rich, woody flavor to Indian curries, lentil stews, rice and vegetables like onions and tomatoes. We love adding turmeric powder to smoothies, sauces and baked goods as well.`,
		"flavors":["rich","woody"],
		"uses":["curry","lentil stews","rice","onions","tomatoes","smoothies","sauces","baked goods"],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 5,
		"title":"Allspice Berries",
		"image":"whole-allspice-berries.jpg",
		"description":`These organic allspice berries reflect their name, with flavors of cinnamon, cloves, nutmeg and black peppercorns. Its complex sweetness makes allspice berries versatile in both sweet and savory dishes- from Jamaican jerk rubs and stews, to spice cakes, cookies and grilled fruits.`,
		"flavors":["cinnamon","cloves","nutmeg","black peppercorns","sweet","savory"],
		"uses":["Jamaican jerk rubs","stews","spice cakes","cookies","grilled fruit"],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 6,
		"title":"Nutmeg",
		"image":"nutmeg.jpg",
		"description":`Nutmeg in the US is a classic baking spice but can be freshly grated into cream sauces, custard, eggnogs, whipped cream, roasted vegetable dishes, stewed greens or infused into tea or coffee.`,
		"flavors":[],
		"uses":["baking","cream sauces","custard","eggnog","whipped cream","roasted vegetable dishes","stewed greens","tea","coffee"],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 7,
		"title":"Ginger",
		"image":"ginger_powder.jpg",
		"description":`Ginger root has a sharply sweet, warm flavor that’s called for in both sweet and savory recipes around the world. We grind our ginger root weekly in small batches, for the ultimate fresh flavor and sweet, lemony aroma.`,
		"flavors":["sharp","sweet","warm","lemony","savory"],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 8,
		"title":"Ground Cumin",
		"image":"ground-cumin.jpg",
		"description":`We think cumin seeds are terribly underrated in the US. Cumin seeds are an essential ingredient to Indian cooking, often toasted whole in oil before grinding, for a nutty toasted flavor, and added to blends like garam masala and tandoori masala or added whole to black bean or carrot soups.`,
		"flavors":["nutty"],
		"uses":["black bean soup","carrot soup","garam masala","tandoori masala"],
		"meat":["chicken","beef","fish"],
		"pungency":1,
	},
	{
		"id": 9,
		"title":"Ground Cardamom",
		"image":"ground-cardamom.jpg",
		"description":`We love green cardamom's delicate, ginger like, sweet flavor in sweets and coffees and source these organic green ground cardamom seeds from a Guatemalan cooperative.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 10,
		"title":"Granulated Garlic",
		"image":"garlic_powder.jpg",
		"description":`This granulated garlic is more biting & stronger than its fresh counterpart (1/4 tsp. = 1 clove fresh garlic) and is perfect for slow cooked dishes like stews, curries, blackened dishes and rubs.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 11,
		"title":"Cinnamon",
		"image":"cinnamon.jpg",
		"description":`Vietnamese cinnamon is globally renowned for its high oil content and strong, spicy flavor. Most known in the US as a perfect complement to baked goods like apple pie, cakes, muffins and cinnamon rolls, we also love this cinnamon paired with chiles, infused in our morning coffee or added to roasted pumpkin and squash soup.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 12,
		"title":"Cloves",
		"image":"cloves.jpg",
		"description":`High quality cloves have high concentrations of oil. Typically used in baking spices in the US, cloves are popular in North Africa in rice and meat dishes and pair well in bbq sauces and roasted vegetables too.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 13,
		"title":"Nigella Seeds",
		"image":"nigella-seeds.jpg",
		"description":`Nigella seeds, also known as onion seeds, charnushka and black cumin, has a nutty, slightly sweet profile with pepper, thyme, onion and licorice flavors.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	},
	{
		"id": 14,
		"title":"Fennel Seeds",
		"image":"fennel-seeds.jpg",
		"description":`These whole organic fennel seeds have an anise, licorice and grassy flavor with spicy sweet notes and come from India. Fennel is considered good for digestion and fennel tea is popular across the world.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":1,
	},
	{
		"id": 15,
		"title":"Brown Mustard Seeds",
		"image":"brown-mustard-seeds.jpg",
		"description":`The character of mustard seeds totally changes with heat exposure, becoming more deeply complex and pungent. We love adding these to curries, roasted meat and vegetables and stir fries.`,
		"flavors":[],
		"uses":[],
		"meat":["chicken","beef","fish"],
		"pungency":0,
	}
];

module.exports = spices;