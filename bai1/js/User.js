export default class User {
	id;
	name;
	gender;
	country;
	phoneNumber;
	favourites;
	avatar;
	constructor(id, name, gender, country, phoneNumber, favourites, avatar) {
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.country = country;
		this.phoneNumber = phoneNumber;
		this.favourites = favourites;
		this.avatar = avatar;
	}

	findUserByName(name) {
		// console.log(`${this.name} giới tính ${this.gender} quốc tịch ${this.country} số điện thoại ${this.phoneNumber} sở thích ${this.favourites}`);
		console.log(this.name);
	}
}
