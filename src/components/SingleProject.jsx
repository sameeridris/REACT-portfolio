function SingleProject(props) {
    return <section>
        <h3>{props.name}</h3>
        <img src = {props.imgUrl}></img>
        <a href= {props.githubUrl}>Click Here for Github</a>
    </section>
};

export default SingleProject;