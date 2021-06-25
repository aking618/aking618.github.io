const greetings =
  'Welcome to Ayren King\'s Interactive Portfolio! \
\nTo get started, type in "cat gettingstarted.txt" \
\n(without the quotes 😁).';

$("#term").terminal(
  {
    cat: function (file) {
      switch (file) {
        case "gettingstarted.txt":
          fetch("assets/gettingstarted.txt")
            .then((response) => response.text())
            .then((data) => {
              this.echo(data);
            });
          break;
        case "mystory.txt":
          fetch("assets/mystory.txt")
            .then((response) => response.text())
            .then((data) => {
              this.echo(data);
            });
          break;
        case "experience.txt":
          fetch("assets/experience.txt")
            .then((response) => response.text())
            .then((data) => {
              data = data.replaceAll("u2022", "\u2022");
              this.echo(data);
            });
          break;
        case "skills.txt":
          fetch("assets/skills.txt")
            .then((response) => response.text())
            .then((data) => {
              data = data.replaceAll("u2022", "\u2022");
              this.echo(data);
            });
          break;
        case "contact.txt":
          fetch("assets/contact.txt")
            .then((response) => response.text())
            .then((data) => {
              data = data.replaceAll("u2022", "\u2022");
              this.echo(data);
            });
          break;
        case "projects.txt":
          fetch("assets/projects.txt")
            .then((response) => response.text())
            .then((data) => {
              data = data.replaceAll("u2022", "\u2022");
              this.echo(data);
            });
          break;
        case "HelloWorld.java":
          fetch("assets/HelloWorld.java")
            .then((response) => response.text())
            .then((data) => {
              this.echo(data);
            });
          break;
        default:
          this.echo(
            "[[bu;;black]" +
              file +
              "][[u;red;black] doesn't exist!]\n\nTry any of the following:\n" +
              "gettingstarted.txt\nmystory.txt \
                  \nexperience.txt \
                  \nskills.txt \
                  \ncontact.txt \
                  \nprojects.txt \
                  \nHelloWorld.java \
                  \n"
          );
      }
    },
    ls: function () {
      this.echo(
        "gettingstarted.txt \
                  \nexperience.txt \
                \nskills.txt \
                \ncontact.txt \
                \nprojects.txt \
                \nHelloWorld.java \
                \n"
      );
    },
    java: function (file) {
      switch (file) {
        case "HelloWorld":
          this.echo("Hello World");
          break;
        default:
          this.echo(
            "[[b;red;black]Error: Could not find or load main class '" +
              file +
              "']"
          );
          break;
      }
    },
    help: function () {
      this.echo(
        "\nList of Commands\n===============\n \
        \ncat <file.txt> [prints out file.txt] \
        \nhelp [lists out all commands] \
        \njava <file> [run java file] \
        \nls [prints out all files in directory] \
        \n\n===============\n"
      );
    },
  },
  {
    greetings: "[[b;;black]" + greetings + "]",
    prompt: "[[b;lightblue;blackk]UserXXXX] $",
    height: 500,
  }
);

// const term = $("body").terminal();

// term.echo(function () {
//   if (this.cols() > 100) {
//     return bigText();
//   } else {
//     return smallerText();
//   }
// });
