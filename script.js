const linkSocialMedia = {
    github: 'marynakao',
    instagram: 'marynakao_',
    linkedin: 'in/maryna-kao',
    twitter: "TwitterBrasil",
    youtube: 'youtube'
}

function changeSocialMediaLinks() {
    for( let li of socialLinks.children ) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://www.${social}.com/${linkSocialMedia[social]}/`;

    }
}

changeSocialMediaLinks()

function getGithubUserInfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`;

    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userLogin = data.login
    });
}

getGithubUserInfos()