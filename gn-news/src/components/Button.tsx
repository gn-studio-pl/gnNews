export function Button(props: {onClick: () => void, label: string}) {
    return (
        <button className="button-primary" onClick={props.onClick}>{props.label}</button>
    );
};