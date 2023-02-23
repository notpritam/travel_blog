import "./Trip.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover uinique destinations.</p>
      <div className="tripcard">
        <TripData
          image="https://images.pexels.com/photos/15185143/pexels-photo-15185143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Indonesia"
          text="Morbi eget augue porttitor neque imperdiet tempor. Nam ac malesuada diam. Duis efficitur arcu id consectetur volutpat. Ut consequat odio et lacus venenatis, in euismod magna porta. Nullam laoreet in purus quis ullamcorper. Aenean vulputate vitae ipsum vel elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        />
        <TripData
          image="https://images.pexels.com/photos/9324460/pexels-photo-9324460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Indonesia"
          text="Morbi eget augue porttitor neque imperdiet tempor. Nam ac malesuada diam. Duis efficitur arcu id consectetur volutpat. Ut consequat odio et lacus venenatis, in euismod magna porta. Nullam laoreet in purus quis ullamcorper. Aenean vulputate vitae ipsum vel elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        />
        <TripData
          image="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Indonesia"
          text="Morbi eget augue porttitor neque imperdiet tempor. Nam ac malesuada diam. Duis efficitur arcu id consectetur volutpat. Ut consequat odio et lacus venenatis, in euismod magna porta. Nullam laoreet in purus quis ullamcorper. Aenean vulputate vitae ipsum vel elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        />
      </div>
    </div>
  );
}

export default Trip;
