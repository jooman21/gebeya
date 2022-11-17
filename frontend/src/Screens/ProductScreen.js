import { useParams } from "react-router-dom"

function ProductScreen() {
    const Params = useParams();
    const {slug} = Params;
    return (
    <div>
        {slug}
    </div>
    )
}
export default ProductScreen