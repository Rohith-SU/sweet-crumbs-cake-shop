function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let cakeType = document.getElementById("cakeType").value;
  let flavor = document.getElementById("flavor").value;
  let weight = document.getElementById("weight").value;
  let message = document.getElementById("message").value;

  let text =
    `Hello Sweet Crumbs Cake Studio 👋%0A%0A` +
    `Name: ${name}%0A` +
    `Mobile: ${phone}%0A` +
    `Cake Type: ${cakeType}%0A` +
    `Flavor: ${flavor}%0A` +
    `Weight: ${weight} kg%0A` +
    `Message on Cake: ${message}%0A%0A` +
    `I will attach a sample cake image for reference.`;

  let whatsappNumber = "91XXXXXXXXXX"; // replace with real number
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}


function orderProduct(productName, price) {
  const text =
    `Hello Sweet Crumbs Cake Studio 👋%0A%0A` +
    `I would like to order:%0A` +
    `Product: ${productName}%0A` +
    `Price: ${price}%0A%0A` +
    `Please confirm availability.`;

  window.open(
    `https://wa.me/919080574774?text=${text}`,
    "_blank"
  );
}
