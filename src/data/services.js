const perks = {
    "providers": [{
        "num" : 1,
        "name" : "VeteriAna",
        "address" : "Av Rafael Sanzio 400, La Estancia, 45030, Zapopan",
        "phone" : "(33) 3110 6256",
        "hours" : "L - S (10:00 AM - 20:00 PM)",
        "rating" : "94%",
        "rates" : 41,
        "privacy" : "Friends",
        "perks" : [
            "Veterianaria",
            "Fisioterapia",
            "Traumatología & Ortopedia",
            "Pago con tarjeta",
            "Pensión",
            "Cirugía",
            "Estética",
            "Profilaxis dental",
            "Farmacia",
            "Venta de alimento"
        ]
    }, {
        "num" : 2,
        "name" : "Hospital Veterinario de Occidente",
        "address" : "Av Clouthier 2246, Colli Urbano, 45070, Zapopan",
        "phone" : "(33) 3125 5543",
        "hours" : "L - S (09:00 AM - 8:00 PM) D (11:00 AM - 06:00 PM)",
        "rating" : "93%",
        "rates" : 36,
        "privacy" : "Public",
        "perks" : [
            "Veterinaria",
            "Endoscopía",
            "Pago con tarjeta",
            "Cirugía",
            "Pensión",
            "Farmacia",
            "Venta de alimento"
        ]
    }, {
        "num": 3,
        "name" : "Centro Veterinario Terranova",
        "address" : "Av Guadalupe 5233, Jardines de Guadalupe, 45030, Zapopan",
        "phone" : "(33) 1204 0772",
        "hours" : "24 HRS",
        "rating" : "90%",
        "rates" : 21,
        "privacy" : "Friends",
        "perks" : [
            "Veterinaria",
            "Rayos X",
            "Ultrasonido",
            "Ortopedia",
            "Profilaxis dental",
            "Fisioterapia",
            "Inseminación artificial",
            "Laboratorio",
            "Pensión",
            "Estética",
            "Farmacia",
            "Venta de alimento",
            "Transporte"
        ]
    }, {
        "num" : 4,
        "name" : "Dogtown Hotel & Spa",
        "address" : "Calle Puerto Yavaros 40, Col Miramar, 45060, Zapopan",
        "phone" : "(044)(33) 2795 1952",
        "hours" : "L - S (8:00 AM - 8:00 PM) D (8:00 AM - 7:00 PM)",
        "rating" : "96%",
        "rates" : 118,
        "privacy" : "Public",
        "perks" : [
            "Pensión",
            "Guardería",
            "Estética",
            "Transporte",
            "Venta de alimento"
        ]
    }, {
        "num" : 5,
        "name" : "Pet Camp",
        "address" : "Calz José Guadalupe Gallo 1818, Agua Blanca Habitacional, 45235, Zapopan",
        "phone" : "(33) 1279 3779",
        "hours" : "L - D (8:00 AM - 7:00 PM)",
        "rating" : "79%",
        "rates" : 32,
        "privacy" : "Public",
        "perks" : [
            "Pensión",
            "Guardería",
            "Entrenamiento",
            "Entrenamiento Positivo",
            "Estética",
            "Deportes Caninos",
            "Transporte"
        ]
    }, {
        "num" : 6,
        "name" : "Coffee & Pets Deli",
        "address" : "Independencia 5785, Arcos de Guadalupe, 45037, Zapopan",
        "phone" : "(33) 1186 7656",
        "hours" : "M - V (3:00 PM - 10:00 PM) S (11:00 AM - 10:00 PM) D (10:00 AM - 7:00 PM)",
        "rating" : "88%",
        "rates" : 57,
        "privacy" : "Friends",
        "perks" : [
            "Pet friendly",
            "Café"
        ]
    }, {
        "num" : 7,
        "name" : "Poi Poi Kings Burgers",
        "address" : "Ingenieros Sur 1099, Chapalita Las Fuentes, 45030, Zapopan",
        "phone" : "(33) 2304 8075",
        "hours" : "L - D (1:00 PM - 11:00 PM)",
        "rating" : "90%",
        "rates" : 253,
        "parivacy" : "Public",
        "perks" : [
            "Pet friendly",
            "Burgers"
        ]
    }, { 
        "num" : 8,
        "name" : "Petco Cordilleras",
        "address" : "Av Patria 888, Jardines de Guadalupe, 45030, Zapopan",
        "phone" : "(33) 1652 3075",
        "hours" : "L - D (9:00 AM - 9:00 PM)",
        "rating" : "79%",
        "rates" : 17,
        "privacy" : "Public",
        "perks" : [
            "Internacional",
            "Estética",
            "Venta de alimento",
            "Entrenamiento",
            "Entrenamiento Positivo",
            "Adopción de mascotas"
        ]
    }, {
        "num" : 9,
        "name" : "Mascottchen",
        "address" : "Av Manuel J. Clouthier 888, Mirador del Sol, 45054, Zapopan",
        "phone" : "(33) 3563 8175",
        "hours" : "L - S (8:30 AM - 8:30 PM) D (10:30 AM - 8:30 PM)",
        "rating" : "87%",
        "rates" : 151,
        "privacy" : "Friends",
        "perks" : [
            "Veterinaria",
            "Cirugía",
            "Estética",
            "Venta de alimento"
        ]
    }, {
        "num" : 10,
        "name" : "Club de Agility Delta",
        "address" : "Av Volcán del Colli 1195, Colli Urbano, 45070, Zapopan",
        "phone" : "(33) 3587 2964",
        "hours" : "L - S (09:00 AM - 6:00 PM) D (09:00 AM - 02:00 PM)",
        "rating" : "63%",
        "rates" : 6,
        "privacy" : "Public",
        "perks" : [
            "Entrenamiento",
            "Agility",
            "Pensión",
            "Criadero"
        ]
    }, {
        "num" : 11,
        "name" : "Clicker Pets México",
        "address" : "Privada Juan Partí 377, El Triángulo, 45138, Zapopan",
        "phone" : "(33) 1543 9383",
        "hours" : "L - S (8:00 AM - 7:00 PM) D (8:00 AM - 5:00 PM)",
        "rating" : "85%",
        "rates" : 68,
        "privacy" : "Public",
        "perks" : [
            "Entrenamiento",
            "Entrenamiento Positivo",
            "Pet Sitter",
            "Pensión",
            "Guardería",
            "Deportes Caninos",
            "Agility"
        ]
    }
    ]
}
