import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppurtunity</p>

      <DestinationData
        heading="Taal Volacano"
        cName="first-des"
        img1="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        img2="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="Mauris congue nisi vitae tempor eleifend. Aliquam in quam molestie nisl lacinia rutrum. Donec sed sapien at ipsum ullamcorper ultricies. Quisque ac tortor fermentum, tincidunt nunc tempus, suscipit nibh. Maecenas non ligula id nisi lobortis lacinia at nec nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum porttitor, neque quis laoreet mollis, tortor nisl condimentum massa, et maximus purus nulla ut quam. Integer sed dictum justo, eu maximus mi. Phasellus lacinia non tellus vel vehicula. Etiam tincidunt ornare viverra. Donec consectetur quam nunc, in convallis enim vulputate non. Donec iaculis semper risus. Praesent mi ligula, maximus eu magna sit amet, facilisis laoreet risus. Morbi diam neque, pharetra et urna sed, bibendum tempor sem. Fusce vulputate sodales ex et sollicitudin."
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Mt. Dagdul, Volcano"
        img1="https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        img2="https://images.pexels.com/photos/2387417/pexels-photo-2387417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="Aliquam erat volutpat. Sed vel magna eget felis dictum dictum scelerisque ac nisi. Sed luctus, diam ac dictum tincidunt, dui enim convallis orci, eget lobortis tellus mauris eget odio. Integer auctor lacus eu imperdiet consequat. Aliquam nisi metus, pharetra sit amet bibendum sit amet, rutrum commodo neque. Praesent eget justo vitae felis porttitor ullamcorper. Integer fringilla purus quis dapibus tempor. Sed auctor leo ex, eu elementum justo porttitor vel. Maecenas eget ultricies metus, ac pulvinar mi. Etiam a efficitur leo. Cras facilisis ut tortor vel pulvinar. Vivamus tristique nisi odio, id iaculis turpis vestibulum sit amet. Mauris placerat, arcu maximus convallis tincidunt, lectus velit finibus nisi, non venenatis neque nunc eu odio. Phasellus vitae diam vitae odio dapibus sagittis. Vivamus gravida eleifend sapien, at fermentum ex."
      />
    </div>
  );
};

export default Destination;
