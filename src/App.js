import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      url: "/Assets/pinterest.JPG",
      title: "Favorites List",
      languages: "A list of my favorite things created with HTML 5",
      Project: (
        <a
          href="https://github.com/Catherine-Awuletey/My-Favorite-Things"
          target="_blank"
        >
          Project
        </a>
      ),
    },

    {
      url: "/Assets/boy.png",
      title: "Student-web",
      languages:
        "A student web from Figma Community designed with HTML 5, CSS 3",
      Project: (
        <a href="https://students-web.netlify.app/" target="_blank">
          Project
        </a>
      ),
    },

    {
      url: "/Assets/girl.png",
      title: "Student-web",
      languages: "A student web designed with ReactJs, Tailwind CSS",
      Project: (
        <a href="https://students-web.netlify.app/" target="_blank">
          Project
        </a>
      ),
    },

    {
      url: "/Assets/Dream-house.png",
      title: "Dream-House",
      languages:
        "A real-estate UI from Figma Community designed with ReactJs, Tailwind CSS",
      Project: (
        <a href="https://my-dream-house.netlify.app/" target="_blank">
          Project
        </a>
      ),
    },
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
      <Person person={people[3]} />
    </section>
  );
};
const Person = (props) => {
  const { url, title, languages, Project } = props.person;
  return (
    <div className="person">
      <img src={url} alt="User" width={100} height={100} />
      <div>
        <h3>{title}</h3>
        <h5>{languages}</h5>
        <button>{Project}</button>
      </div>
    </div>
  );
};

export default App;
