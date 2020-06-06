export function createLinks(links = []) {
  return links.reduce((html, link, idx) => {
    return html += `
      <li>
        <a href="#${link}" data-page="${link}">${link}</a>
      </li>
    `
  }, '')
}