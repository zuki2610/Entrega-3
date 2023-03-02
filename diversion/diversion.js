const borde = () => {
    const foto = document.querySelector("#borde");
    console.log(foto.style.border);
    if (foto.style.border == "0px" || foto.style.border == "") {
      foto.style.border = "1px outset #c8c8c8";
      foto.style.borderRadius = "8%";
      foto.style.boxShadow = "0vh 0vh 45vh 4vh #77ccff";
    } else if (foto.style.border == "1px outset rgb(200, 200, 200)") {
      foto.style.border = "0px";
      foto.style.boxShadow = "0vh 0vh 0vh 0vh #c8c8c8";
      
    }
  };
  const img1 = document.querySelector("#borde");
  const img2 = document.querySelector("#opacity");
  
  let opacity = 1;
  const decrementOpacity = () => {
    opacity -= 0.1;
    img2.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(intervalId);
      opacity = 1;
      img2.style.opacity = opacity;
    }
  };

  let intervalId;
  img1.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(decrementOpacity, 50);
  });
  