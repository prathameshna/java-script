let id1 = document.getElementById("id1")
console.log(id1);

// MATCHES is keyword use to check if element matches the given CSS selector.
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

// CLOSEST to look for the nearest ancestors that matches the given CSS-selector the element itself is also checked.
console.log(sp1.closest("#sp1"));

// CONTAINS return true if elemB is inside elemA when elemA == elemB.
console.log(id1.contains(sp1));




