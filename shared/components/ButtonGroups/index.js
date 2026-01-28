export default function Button({type}){

    let color = "rgba(54, 75, 167, 1)";
    if(type === "Blue"){
        color = "rgba(54, 75, 167, 1)";
    }

    if(type === "Purple"){
        color = "rgba(90, 41, 120, 1)"
    }

    if(type === "Orange"){
        color = "rgba(229, 132, 27, 1)";
    }

    return (
        <button style={{
            backgroundColor:color,
            width: "fit-content",
            padding: "15px 32px",
            display: "inline-block",
            margin: "10px",
        }}>
        <div style={{

        }}>Button</div>
        </button>
    )
}