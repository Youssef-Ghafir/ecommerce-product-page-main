let box_imgs = document.querySelectorAll(".box_imgs > img"),
	index_images = 0,
	images = document.querySelectorAll(".images > img");

function RemoveClassActive(a, b) {
	a.forEach(a => a.classList.remove("active")), b.classList.add("active")
}

function RemoveStyle(a, b) {
	a.forEach(a => a.style.display = "none"), b.style.display = "block"
}

function ChangeByAttr(a, b, c) {
	let d = "";
	RemoveClassActive(c, a), b.forEach(b => {
		b.getAttribute("data-img") == a.getAttribute("data-img") && (d = b)
	}), RemoveStyle(b, d), setTimeout(() => {
		RemoveClassActive(b, d)
	}, 200)
}
box_imgs.forEach((a, b) => {
	a.addEventListener("click", () => {
		ChangeByAttr(a, images, box_imgs), index_images = b
	})
});

function getImagesAppend(a, b) {
	a.forEach(a => b.appendChild(a.cloneNode()))
}
let preview_image = document.querySelector(".preview_image");
getImagesAppend(images, preview_image.children[0]), getImagesAppend(box_imgs, preview_image.children[1]);
let images_2 = document.querySelectorAll(".images_2 > img"),
	box_imgs_2 = document.querySelectorAll(".box_imgs_2 img");
box_imgs_2.forEach(a => {
	a.addEventListener("click", () => {
		ChangeByAttr(a, images_2, box_imgs_2)
	})
}), images.forEach(a => {
	a.addEventListener("click", () => {
		ChangeByAttr(a, images_2, box_imgs_2), preview_image.style.display = "flex", box_imgs_2.forEach(b => {
			a.getAttribute("data-img") == b.getAttribute("data-img") && b.classList.add("active")
		})
	})
});
let btn_imgaes = document.querySelectorAll(".images > button"),
	btn_imgaes_2 = document.querySelectorAll(".images_2 > button"),
	btn_previous = btn_imgaes[1],
	btn_next = btn_imgaes[0];

function NextSilde(a, b) {
	index_images++, index_images < a.length ? (RemoveStyle(a, a[index_images]), setTimeout(() => RemoveClassActive(a, a[index_images]), 100), b.forEach(c => {
		c.getAttribute("data-img") == a[index_images].getAttribute("data-img") && RemoveClassActive(b, c)
	})) : index_images = images.length - 1
}

function PreviouSlide(a, b) {
	index_images--, 0 <= index_images ? (RemoveStyle(a, a[index_images]), setTimeout(() => RemoveClassActive(a, a[index_images]), 100), b.forEach(c => {
		c.getAttribute("data-img") == a[index_images].getAttribute("data-img") && RemoveClassActive(b, c)
	})) : index_images = 0
}
document.querySelector(".close").addEventListener("click", () => preview_image.style.display = "none"), btn_next.addEventListener("click", () => NextSilde(images, box_imgs)), btn_previous.addEventListener("click", () => PreviouSlide(images, box_imgs)), btn_imgaes_2[0].addEventListener("click", () => NextSilde(images_2, box_imgs_2)), btn_imgaes_2[1].addEventListener("click", () => PreviouSlide(images_2, box_imgs_2));
let bx_shop = document.querySelector(".bx-shop"),
	cart = document.querySelector(".cart");
bx_shop.addEventListener("click", () => {
	cart.classList.toggle("show")
}), CheckCart();

function CheckCart() {
	if (0 == cart.children[1].children.length) {
		let a = document.createElement("p");
		return a.textContent = "Your Cart is Empty", a.style.cssText = `
            padding: 4rem;
            text-align: center;
        `, a.classList.add("Empty"), cart.children[1].appendChild(a), !1
	}
	return cart.children[1].children[0].remove(), !0
}
let btn_1 = document.querySelector(".btn_1"),
	quntite = 0;
btn_1.children[0].addEventListener("click", () => {
	quntite--, 0 <= quntite ? btn_1.children[1].textContent = quntite : quntite = 0
}), btn_1.children[2].addEventListener("click", () => {
	quntite++, 5 >= quntite ? btn_1.children[1].textContent = quntite : quntite = 5
});
let addToCart = document.querySelector(".btn_2 > button"),
	alert_qun = document.querySelector(".bx-shop > span");
addToCart.addEventListener("click", () => {
	0 < btn_1.children[1].textContent && (CheckCart(), cart.children[1].innerHTML = `
        <div class="box">
        <img src="images/image-product-1-thumbnail.jpg" alt="" srcset="">
        <div class="inf-bx">
          <p>Fall Limited Edition Sneake $ 125.00 * ${btn_1.children[1].textContent} <b>${125*btn_1.children[1].textContent}$</b></p>
        </div>
        <span><img src="images/icon-delete.svg" alt="" srcset="" class="delete"></span>
      </div>
      <button>Check out</button>
      `, alert_qun.textContent = btn_1.children[1].textContent, alert_qun.style.display = "flex")
}), cart.addEventListener("click", a => {
	a.target.classList.contains("delete") && (a.target.parentElement.parentElement.parentElement.remove(), cart.innerHTML += "<div class=\"info\"></div>", alert_qun.style.display = "none", CheckCart())
}), document.querySelector(".menu").addEventListener("click", () => {
	document.querySelector(".list_item > ul").classList.add("show")
}), document.querySelector(".close_menu").addEventListener("click", () => {
	document.querySelector(".list_item > ul").classList.remove("show")
});