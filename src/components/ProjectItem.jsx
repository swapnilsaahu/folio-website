const ProjectItem = (props) => {
    return (
        <div className="flex justify-between">
            <div>
                <p className="text-2xl">{props.title}</p>
                <p>{props.desc}</p>
            </div>
            <div className="flex">
                <a href={props.github} target="_blank" rel="noopener" />
                <a href={props.live} target="_blank" rel="noopener" />
            </div>
        </div>
    )
}
export default ProjectItem;
