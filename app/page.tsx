/* eslint-disable react/jsx-key */
import Button from "@/components/Button/Button";
import ExportCard from "@/components/ExportCard/ExportCard";
import Hero from "@/components/Hero/Hero";
import { exportCardInfo } from "@/lib/data";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Exports detail section  */}
      <div
        style={{
          padding: " 0 4%",
        }}
      >
        <div
          style={{
            margin: "40px  0",
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              fontSize: "40px",
              color: "var(--section-title)",
            }}
          >
            Your Health Supported by Our{" "}
            <span style={{ color: "var(--tp-green)" }}>Export Pharmacy </span>
            Team
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "var(--gray)",
                fontWeight: "400",
                fontFamily: "var(--font-secondary)",
                fontSize: "20px",
              }}
            >
              Whether it&apos;s a repeat prescription or an online consultation,
              we have the right service for you.
            </p>
            <span>sdsd</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {exportCardInfo.map((info) => (
            <ExportCard
              img={info.img}
              id={info.id}
              title={info.title}
              desc={info.desc}
              isnhs={info.isnhs}
            />
          ))}
          <div>
            
          </div>
          
        </div>
        <div style={{padding:"20px",
          justifyContent:"center",
          alignItems:"center",
          display:"flex"
        }}>
          <Button showArrow>View All Services</Button>
        </div>
      </div>
     

      {/* Order Prescription section  */}
      <div>
        {/* left section  */}
        <div>
          <div>
            <h2>
              Order Your <span>Repeat Prescriptions </span> Online, Anytime
            </h2>
            <p>
              Managing your repeat medication has never been easier. Our secure
              online services lets you request, track and manage your
              prescriptions from any device, without the need to visit your GP
              or pharmacy.
            </p>
            <div>
              <div>
                <span></span>{" "}
                <p>
                  Get your repeat medication sorted online in just a few clicks
                </p>
              </div>

              <div>
                <span></span>{" "}
                <p>
                  Stay updated and track your prescription every step of the way
                </p>
              </div>

              <div>
                <span></span>{" "}
                <p>
                  Your personal health information is always safe and secure
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right section  */}
      </div>
    </div>
  );
};
export default Home;
