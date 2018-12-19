function runSafe(cb) {
  try {
    return cb();
  }
  catch (e) {
    // console.error(e);
  }
}

export function saveCart(cart = []) {
  runSafe(() => localStorage["cart"] = JSON.stringify(cart));
}

export function getCart() {
  let cart = runSafe(() => JSON.parse(localStorage["cart"]));

  return cart || [];
}
