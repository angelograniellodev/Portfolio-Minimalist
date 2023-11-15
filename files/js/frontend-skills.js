var htmlHover = document.getElementById("htmlLogo");
var cssHover = document.getElementById("cssLogo");
var jsHover = document.getElementById("jsLogo");
var luaHover = document.getElementById("luaLogo");
var nodejsHover = document.getElementById("nodejsHover");
var databaseHover = document.getElementById("databaseHover");
var linuxHover = document.getElementById("linuxHover");
var psHover = document.getElementById("psHover");

var skillsProgress = document.getElementById("skills-progress");
var skillList = document.getElementById("skills-list");
var skillsInfoBtn = document.getElementById("skills-page-more-info-btn");
var skillsExperiencieValue = document.getElementById("skillsExperiencieValue");
var skillsResolvingProblemValue = document.getElementById("skillsResolvingProblemValue");
var skillsH2Text = document.getElementById("skills-progress-h2");
var skillsImg = document.getElementById("skills-progress-img");
var returnImage = document.getElementById("skills-progress-img");
var popupSound = document.getElementById('popupSound');
popupSound.volume = 0.4;
let popupNotify = false;



htmlHover.addEventListener("click", function() {
    skillList.style.display = "none";
    skillsInfoBtn.style.display = "none"
    skillsProgress.style.display = "block";
    skillsExperiencieValue.style.background = "green";
    skillsResolvingProblemValue.style.background = "green";

    skillsExperiencieValue.dataset.value = "100";
    skillsExperiencieValue.dataset.text = "100";

    skillsResolvingProblemValue.dataset.value = "100";
    skillsResolvingProblemValue.dataset.text = "100";

    skillsH2Text.textContent = "HTML 5";

    skillsImg.src = "/files/assets/html-logo-transparent.png";

    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });

      if (popupNotify !== true) {
        popupSound.play();
        swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
            button: "Ok",
          });
          popupNotify = true;
      }
});

cssHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "yellow";
  skillsResolvingProblemValue.style.background = "yellow";

  skillsExperiencieValue.dataset.value = "70";
  skillsExperiencieValue.dataset.text = "70";

  skillsResolvingProblemValue.dataset.value = "80";
  skillsResolvingProblemValue.dataset.text = "80";

  skillsH2Text.textContent = "CSS 3";

  skillsImg.src = "/files/assets/css-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

jsHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "green";
  skillsResolvingProblemValue.style.background = "green";

  skillsExperiencieValue.dataset.value = "85";
  skillsExperiencieValue.dataset.text = "85";

  skillsResolvingProblemValue.dataset.value = "90";
  skillsResolvingProblemValue.dataset.text = "90";

  skillsH2Text.textContent = "JSSS";

  skillsImg.src = "/files/assets/js-logo-2.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

luaHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "green";
  skillsResolvingProblemValue.style.background = "green";

  skillsExperiencieValue.dataset.value = "100";
  skillsExperiencieValue.dataset.text = "100";

  skillsResolvingProblemValue.dataset.value = "100";
  skillsResolvingProblemValue.dataset.text = "100";

  skillsH2Text.textContent = "LUA 5.4";

  skillsImg.src = "/files/assets/lua-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

nodejsHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "red";
  skillsResolvingProblemValue.style.background = "yellow";

  skillsExperiencieValue.dataset.value = "55";
  skillsExperiencieValue.dataset.text = "55";

  skillsResolvingProblemValue.dataset.value = "62";
  skillsResolvingProblemValue.dataset.text = "62";

  skillsH2Text.textContent = "NODE JS";

  skillsImg.src = "/files/assets/nodejs-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

databaseHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "red";
  skillsResolvingProblemValue.style.background = "yellow";

  skillsExperiencieValue.dataset.value = "45";
  skillsExperiencieValue.dataset.text = "45";

  skillsResolvingProblemValue.dataset.value = "57";
  skillsResolvingProblemValue.dataset.text = "57";

  skillsH2Text.textContent = "DATA BASE";

  skillsImg.src = "/files/assets/db-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

linuxHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "yellow";
  skillsResolvingProblemValue.style.background = "green";

  skillsExperiencieValue.dataset.value = "65";
  skillsExperiencieValue.dataset.text = "65";

  skillsResolvingProblemValue.dataset.value = "80";
  skillsResolvingProblemValue.dataset.text = "80";

  skillsH2Text.textContent = "LINUX";

  skillsImg.src = "/files/assets/linux-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

psHover.addEventListener("click", function() {
  skillList.style.display = "none";
  skillsInfoBtn.style.display = "none"
  skillsProgress.style.display = "block";
  skillsExperiencieValue.style.background = "red";
  skillsResolvingProblemValue.style.background = "yellow";

  skillsExperiencieValue.dataset.value = "43";
  skillsExperiencieValue.dataset.text = "43";

  skillsResolvingProblemValue.dataset.value = "55";
  skillsResolvingProblemValue.dataset.text = "55";

  skillsH2Text.textContent = "PS 16";

  skillsImg.src = "/files/assets/ps-logo-transparent.png";

  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });

    if (popupNotify !== true) {
      popupSound.play();
      swal("ATENTION!", "To return to the previous skills menu, click on the HTML 5 logo or the image on the right side of the box.", "info", {
          button: "Ok",
        });
        popupNotify = true;
    }
});

returnImage.addEventListener("click", function() {
    skillList.style.display = "block";
    skillsInfoBtn.style.display = "block"
    skillsProgress.style.display = "none";
});

skillsInfoBtn.addEventListener("click", function() {
  popupSound.play();
  swal("ATENTION!", "I can create anything with the technologies shown above, I also know how to handle many frameworks and add-ons to the ones mentioned above. If you have a project in mind that requires these technologies do not hesitate to contact me.", "info", {
      button: "Ok",
    });
    popupNotify = true;
});