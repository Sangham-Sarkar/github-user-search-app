const searchVal = document.querySelector("#searchBar");
const userCard = document.querySelector("#userCard");
const getUserData = async (userName) => await (await fetch(`https://api.github.com/users/${userName}`)).json();

const templateCreator = (user) =>{
  getUserData(user).then(userInfo =>{
    console.log(userInfo);
    cardTemplate = ``;
    cardTemplate += `<img id="avatar" src="${userInfo.avatar_url}">
    <span>${userInfo.name}</span>
    <span>Joined ${new Date(userInfo.created_at).toDateString()}</span>
    <p>${(userInfo.bio == null || userInfo.bio == '' ? 'This profile has no bio' : userInfo.bio)}</p>
    <a href="${userInfo.html_url}">@${userInfo.login}</a>
    <div id="details">
      <p>Repos<span>${userInfo.public_repos}</span></p>
      <p>Followers<span>${userInfo.followers}</span></p>
      <p>Following<span>${userInfo.following}</span></p>
    </div>
    <div>
      <img src="./assets/icon-location.svg"> <span>${userInfo.location}</span>
      <img src="./assets/icon-twitter.svg">
      <span>${userInfo.twitter_username == null ? 'Not Available' : userInfo.twitter_username}</span>
      <img src="./assets/icon-website.svg">
      <a href="${userInfo.blog}">${userInfo.blog}</a>
      <img src="./assets/icon-company.svg">
      <span>${userInfo.company}</span>
    </div>
    `
    userCard.innerHTML = cardTemplate;
  })
}

const submit = () => {
  templateCreator(searchVal.value);
}