"use strict";

//const findPlace = (data, getSearch) => {
//    return data.find(data => data.name.toLowerCase() == getSearch.toLowerCase());
//  };

window.poogle = {

	filterData: (data, category) => {

		let filteredVendors = [];

		data.filter((element) => {

			element["type"].forEach((subelement) => {

				if (subelement === category) {
					filteredVendors.push(element);
				}

			});

		});

		cardInfoLayout(filteredVendors);

	}
};
