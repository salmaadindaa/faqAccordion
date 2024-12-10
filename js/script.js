const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const para = document.querySelectorAll(".para");
const question = document.querySelectorAll(".question");

// for (let i = 0; i < plus.length; i++) {
//   plus[i].addEventListener("click", function (e) {
//     if (question.contains(e.target) && plus.contains(e.target))
//       plus[i].classList.toggle("hidden");
//     minus[i].classList.toggle("hidden");
//     para[i].classList.toggle("hidden");
//   });
// }

for (let i = 0; i < minus.length; i++) {
  question[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
  });
}
