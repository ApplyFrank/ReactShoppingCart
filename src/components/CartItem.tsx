import storeItems from "../data/items.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Stack, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"


type CartItemProps = {
    id: number 
    quantity: number
}

interface Identifiable {
    id: number
}

interface Quantifiable {
    quantity: number
}

type CartItemProps2 = Identifiable & Quantifiable & { 
    id: number
    quantity: number
}

type SpecialDate = string & { __brand: "specialDate" }

let specialDate = "10/01/23" 



function isSpecialDate(maybeDate: string): maybeDate is SpecialDate {
    return true
}

type A = string
let a: A 



function transFormDate(dateString: SpecialDate) {
    return dateString
}

const aDate = "yo man dood"
transFormDate(aDate)
if (isSpecialDate(aDate)) { transFormDate(aDate) }


export function CartItem({id, quantity}: CartItemProps2) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
            <img src={item.imgUrl} 
            style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: ".65rem"}}>
                        x{quantity}
                    </span>)}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)} </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}