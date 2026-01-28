export default function Button({type}){

    let color = "rgba(54, 75, 167, 1)";

    return (
        <div style={{
            display:"flex",
        }}>
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
        </div>
        
    )
}