import { Button } from "@/components/Button/Button";

const page = () => {
  return (
    <div>
      <button >
        
          <span>Silver Lane</span>
        
        </button>
      <Button variant="primary" showArrow>
        Book Appointment Now
      </Button>
     
     <Button variant="primary" size="sm">Order Prescriptions</Button>
     <Button variant="outline" size="sm">

  Silver Lane
 
</Button>
    </div>
  );
};

export default page;