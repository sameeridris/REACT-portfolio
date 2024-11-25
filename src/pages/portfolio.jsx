import SingleProject from "../components/SingleProject";

// change imgUrl to save img of all projects
const projects = [{name: "Employee-Tracker", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/sameeridris/Employee-Tracker"}, {name: "README-generator", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/sameeridris/README-generator"}, {name: "Weather-Dashboard", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/sameeridris/Weather-Dashboard"}, {name: "Vehicle-Builder", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/sameeridris/Vehicle-Builder"},
{name: "Vehicle-Builder", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/sameeridris/Vehicle-Builder"}, {name: "Money-Buddy", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s", githubUrl: "https://github.com/limboden/bootcamp-project-01/blob/main/index.html"},];

function Portfolio() {
    return <section>
        {projects.map(p => <SingleProject name = {p.name} imgUrl = {p.imgUrl} githubUrl= {p.githubUrl}></SingleProject>)}
    </section>
};

export default Portfolio;