import FindPharmacyCard from "@/components/Find-Pharmacy/FindPharmacyCard/FindPharmacyCard";
import FindPharmacyMap from "@/components/Find-Pharmacy/FindPharmacyMap/FindPharmacyMap";
import SearchBar from "@/components/Find-Pharmacy/SearchBar/SearchBar";

const FindPharmacy = () => {
    return (
        <div style={{ padding: "0 4%", marginBottom: "8%" }}>
            
            {/* Title Section */}
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "24px 0" }}>
                Find Your Nearest Pharmacy
            </h1>

            {/* Search Section */}
            <div style={{ marginBottom: "24px" }}>
                <SearchBar />
            </div>

            {/* Main Content Split Section */}
            <div style={{ 
                display: "flex", 
                gap: "32px", 
                alignItems: "flex-start" 
            }}>
                
                {/* Map Section (Left side - expands to fill space) */}
                <div style={{ flex: 1, minHeight: "500px" }}>
                    <FindPharmacyMap />
                </div>

                {/* Sidebar Section (Right side - fixed width matching design) */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    width: "410px", // Fixed width to prevent card elements from breaking
                    flexShrink: 0
                }}>
                    <FindPharmacyCard />
                    <FindPharmacyCard />
                    <FindPharmacyCard />
                </div>

            </div>
        </div>
    );
};

export default FindPharmacy;
