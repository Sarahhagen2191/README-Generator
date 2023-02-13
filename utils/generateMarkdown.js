// function to generate markdown for README
function generateMarkdown(data) {
  const backticks = "```";

  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## License
  ${data.license}
  ## Installation
  To install dependancies please run the following command: 
  ${backticks}
  ${data.installation}
  ${backticks}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests please run the following command:
  ${backticks}
  ${data.tests}
  ${backticks}
  ## Questions
  If you have any questions about the repo, open an issue or contact me
  directly at ${data.email}. You can find more of my work at ${data.github}.
`;
}

module.exports = generateMarkdown;