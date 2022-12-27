import { useNavigate } from "react-router";
import "../../styles/NotAuthorized.css"

const NotAuthorized = () => {
    const navigate = useNavigate();
    const backToLoginPage = () => {
        localStorage.clear("jwt");
        navigate("/")
      }
    return (
        <>
            <div class="card mx-auto">
                <div class="card-body">
                    <h1 class="card-title text-light text-center">Unauthorized Access !!!</h1>
                    <div style={{ width: "100%", height: 0, paddingBottom: "56%", position: "relative" }}><iframe src="https://giphy.com/embed/L7zmmuaEo50MCt1Y7o" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                </div>
                <button className="btn btn-primary w-50 mx-auto mb-4" onClick={backToLoginPage}>Login Again</button>
            </div>
        </>
    )
}

export default NotAuthorized