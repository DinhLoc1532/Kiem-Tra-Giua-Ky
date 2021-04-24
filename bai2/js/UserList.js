import UserContainer from "./UserContainer.js";
const $template = document.createElement("template");
$template.innerHTML = `<div class="user-list"></div>`;

export default class UserList extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));
		this.$list = this.querySelector(".user-list");
	}

	static get observedAttributes() {
		return ["users"];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		if (attrName == "users") {
			let data = JSON.parse(newValue);
			for (let userData of data) {
				let $filmContainer = new FilmContainer();
				$userContainer.setAttribute("id", userData.id);
				$userContainer.setAttribute("name", userData.name);
				$userContainer.setAttribute("image", userData.image);
				$userContainer.setAttribute("gender", userData.gender);
				$userContainer.setAttribute("country", userData.country);

				this.$list.appendChild($userContainer);
			}
		}
	}
}
window.customElements.define("user-list", UserList);
