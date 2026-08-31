import FindPharmacyCard from "@/components/Find-Pharmacy/FindPharmacyCard/FindPharmacyCard";
import FindPharmacyMap from "@/components/Find-Pharmacy/FindPharmacyMap/FindPharmacyMap";
import SearchBar from "@/components/Find-Pharmacy/SearchBar/SearchBar";


const FindPharmacy = () =>{
    return(
         <div>
            <h1 style={{padding:'0% 3% '}}>Find Your Nearest Pharmacy</h1>
            {/* search Section  */}
            <div>
               <SearchBar/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between",
                margin:"0% 4%",
                marginBottom:"8%"
            }}>
                {/* map section  */}
                <div>
                    <FindPharmacyMap/>
                </div>
                {/* specialist section  */}
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"24px"
                }}>
                        <FindPharmacyCard/>
                        <FindPharmacyCard/>
                        <FindPharmacyCard/>
                </div>
            </div>
            {/* bottom section  */}
        </div>
    )
}
export default FindPharmacy;    