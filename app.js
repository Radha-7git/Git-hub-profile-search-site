const search = document.getElementById("search");
const username = document.getElementById("username");
const name = document.getElementById("name");
const joined = document.getElementById("joined");
const profileimg = document.getElementById("profile-img");
const following = document.getElementById("following");
const followers = document.getElementById("followers");
const locality = document.getElementById("location");
const repository = document.getElementById("repository");
const profileurl = document.getElementById("profileurl");
const getlink = document.getElementById("profile-git-link");
const mainbox = document.getElementById("main-box");
const searchbtn = document.getElementById("searchbtn");
const validity = document.getElementById("validity");

function gitProfileSearch(event) {
  event.preventDefault();
  if (search.value.trim() == "") {
    validity.innerText = `Enter a valid Input`;
    return;
  } else {
    validity.innerText = "";
    mainbox.classList.add("active");
    fetch(`https://api.github.com/users/${search.value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        username.innerText = data.login || "N/A";
        name.innerText = data.name || "N/A";
        profileimg.setAttribute(
          "src",
          data.avatar_url || "./image/default.avif"
        );
        following.innerText = data.following || 0;
        followers.innerText = data.followers || 0;
        locality.innerText = data.location || "Not specified";
        repository.innerText = data.public_repos || 0;
        profileurl.setAttribute("href", data.html_url || "#");
        getlink.innerText = data.html_url;
        mainbox.classList.add("active");
        joined.innerText = new Date(data.created_at).toDateString() || "N/A";
      })
      .catch((error) => {
        console.error("Error:", error);
        validity.innerText = `User not found. Please try again.`;
        mainbox.classList.remove("active");
      });
  }
}

searchbtn.addEventListener("click", gitProfileSearch);
