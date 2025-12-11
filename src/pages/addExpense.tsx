import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/groups-overview/Buttons";

export const AddExpense = () => {
    return (
        <div className= "flex flex-col gap-2">
            <div className="relative w-full text-xl ">
                <Link to="/" className="absolute left px-4 py-2 pt-4 ">
                <ChevronLeft />
                </Link>
                <h1 className="text-center font-medium pt-4">Add Expense</h1>
            </div>
            <div className="pl-4 pr-4 pt-5">
                <label className="font-bold">Amount</label> 
                <br></br>
                <input type="text" placeholder="$0.00" className="border border-grey-300 py-1 px-2 leading-relaxed rounded-sm w-full border"/>
            </div>
            <div className="pl-4 pr-4 pt-5 ">
                <label className="font-bold">Description</label> 
                <br></br>
                <input type="text" placeholder="Dinner with Friends" 
                className="border border-grey-300 py-1 px-2 leading-relaxed rounded-sm w-full border"/>
            </div>
            <div className="pl-4 pr-4 pt-5">
                <label className="font-bold">Paid by</label> 
                <br></br>
                <input type="text" placeholder="Friend's names" className="border border-grey-300 py-1 px-2 leading-relaxed rounded-sm w-full border"/>
            </div>
            <div className="fixed inset-x-0 bottom-5 w-full pl-4 pr-4 ">
                <Button 
                    className="items-center bg-[#3A7FE5] text-white rounded font-bold w-full "
                    name="Add Expense"
                    variant="ho"
                    isActive={true}
                    onClick={() => console.log("Button Click Success!")} route={""}                />
            </div>
        </div>
        
    )
}