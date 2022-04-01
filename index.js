const searchVal = document.querySelector(".searchBar");
const userCard = document.querySelector(".userCard");
const mode = document.querySelector("#mode");
const searchBox = document.querySelector(".searchBox");
const check = document.body;
const modeName = document.querySelector(".modeName");
const modeImage = document.querySelector("#modeIcon");
let det = document.querySelector('.details');

const getUserData = async (userName) =>
  await (await fetch(`https://api.github.com/users/${userName}`)).json();

const templateCreator = (user) => {
  getUserData(user).then((userInfo) => {
    cardTemplate = ``;
    cardTemplate += `<div id="contentContainer">
    <img id="avatar" src="${userInfo.avatar_url}">
    <div class="content">
    <div class="nameHolder">
    <p id="Name">${userInfo.name}</p>
    <p id="joinDate">Joined ${new Date(userInfo.created_at).toDateString()}</p>
    </div>
    <a id="userProfile" href="${userInfo.html_url}">@${userInfo.login}</a>
    <p id="bio">${
      userInfo.bio == null || userInfo.bio == ""
        ? "This profile has no bio"
        : userInfo.bio
    }</p>
    <div class="details">
      <div id="repos">
      <p class="countName">Repos</p>
      <p class="count">${userInfo.public_repos}</p>
      </div>
      <div class="vals">
      <p class="countName" >Followers</p>
      <p class="count">${userInfo.followers}</p>
      </div>
      <div class="vals">
      <p class="countName">Following</p>
      <p class="count">${userInfo.following}</p>
      </div>
    </div>
    <div id="detail">
    <div>
      <img src="./assets/icon-location.svg"> <span>${userInfo.location}</span>
    </div>
    <div>  
      <img src="./assets/icon-twitter.svg">
      <a href=https://twitter.com/${userInfo.twitter_username}>${
      userInfo.twitter_username == null
        ? "Not Available"
        : userInfo.twitter_username
    }</a>
      </div>
      <div>
      <img src="./assets/icon-website.svg">
      <a href="${userInfo.blog}">${userInfo.blog}</a>
      </div>
      <div>
      <img src="./assets/icon-company.svg">
      <span>${userInfo.company}</span>
      </div>
     </div> 
    </div>
    </div>
    </div>
    `;
    userCard.innerHTML = cardTemplate;
    det = document.querySelector('.details');
  });
};
templateCreator("octocat");

const submit = () => {
  templateCreator(searchVal.value);
};
let click = 1;
const modeChanger = () => {
  if(click==1){
    modeName.innerHTML = "Light";
    modeImage.src = "./assets/icon-sun.svg";
    click=0;
    searchBox.classList.add("darkModeContrast");
    userCard.classList.add("darkModeContrast");
    searchVal.classList.add("darkModeContrast");
    mode.classList.add("darkMode");
    check.classList.add("darkMode");
    det.classList.add("darkMode");
  }else{
    modeName.innerHTML = "Dark";
    modeImage.src = "./assets/icon-moon.svg";
    searchBox.classList.remove("darkModeContrast");
    userCard.classList.remove("darkModeContrast");
    searchVal.classList.remove("darkModeContrast");
    mode.classList.remove("darkMode");
    check.classList.remove("darkMode");
    det.classList.remove("darkMode");
    click++
  }
};
