exports.db_connect_error = () => ({ message: 'No database connection' });
exports.required_fields = (...args) => ({ message: `Field(s) ${args} values can't be empty` });
exports.default_produt_list = () => [
	{ origin: 11, destiny: 16, price: 1.9 },
	{ origin: 16, destiny: 11, price: 2.9 },
	{ origin: 11, destiny: 17, price: 1.7 },
	{ origin: 17, destiny: 11, price: 2.7 },
	{ origin: 11, destiny: 18, price: 0.9 },
	{ origin: 18, destiny: 11, price: 1.9 }
];
exports.default_product_list = () => [
	{ title: 'FaleMais 30', timer: 30 },
	{ title: 'FaleMais 60', timer: 60 },
	{ title: 'FaleMais 120', timer: 120 }
];

exports.default_briefing = () => [
	{
		ref_id: 'speakmore',
		title: 'Calcule seu plano',
		description:
			'Com o novo produto <b>FaleMais</b> da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo <i>(em minutos)</i> e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de <b>10%</b> sobre a tarifa normal do minuto. Os planos são <b>FaleMais 30 <i>(30 minutos)</i></b>, <b>FaleMais 60 <i>(60 minutos)</i></b> e <b>FaleMais 120 <i>(120 minutos)</i></b>.'
	}
];
