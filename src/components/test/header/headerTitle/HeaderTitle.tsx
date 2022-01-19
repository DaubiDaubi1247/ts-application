
interface HeaderTitleProps {
    title: string;
}
function HeaderTitle(props : HeaderTitleProps) {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
}

export default HeaderTitle;