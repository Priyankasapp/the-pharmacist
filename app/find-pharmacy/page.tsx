import SearchBar from "@/components/Find-Pharmacy/SearchBar/SearchBar";
import { SearchIcon } from "lucide-react";

const FindPharmacy = () =>{
    return(
         <div>
            <h1 style={{padding:'0% 3% '}}>Find Your Nearest Pharmacy</h1>
            {/* search Section  */}
            <div>
               <SearchBar/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between",
                margin:"0% 4%"
            }}>
                {/* map section  */}
                <div>Map Section</div>
                {/* specialist section  */}
                <div>
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                </div>
            </div>
            {/* bottom section  */}
        </div>
    )
}
export default FindPharmacy;    