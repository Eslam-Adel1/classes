let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let ele = document.querySelector(`[title="Current"]`);
let div = document.querySelector(".classes-list div");

add.addEventListener("blur", function () {
  let value = add.value.toLocaleLowerCase().split(" ");

  for (let i = 0; i < value.length; i++) {
    if (add.value == "") {
      continue;
    }
    ele.classList.add(value[i]);
  }

  add.value = "";

  show();
});

remove.addEventListener("blur", function () {
  let value = remove.value.toLocaleLowerCase().split(" ");

  for (let i = 0; i < value.length; i++) {
    if (remove.value == "") {
      continue;
    }
    ele.classList.remove(value[i]);
  }

  remove.value = "";

  show();
});

function show() {
  let arr = [];

  for (let i = 0; i < ele.classList.length; i++) {
    arr.push(ele.classList[i]);
  }

  arr.sort();

  div.textContent = "";

  for (let i = 0; i < arr.length; i++) {
    let span = document.createElement("span");
    span.textContent = arr[i];
    div.append(span);
  }

  if (ele.classList.length === 0) {
    div.textContent = "No Classes To Show";
  }
}

show();
