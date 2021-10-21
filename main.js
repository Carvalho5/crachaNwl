const LinksSocialMedia = {
  github: 'Lucas',
  youtube: 'Lucas',
  facebook: 'Lucas',
  instagram: 'Lucas',
  twitter: 'Lucas'
}

function changeSocialMediaLinks() {
  userName.textContent = 'Lucas'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
