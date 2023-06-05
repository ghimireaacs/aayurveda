import LoginForm from "../components/LoginForm";
import lampard from "../images.jpg";

const Loginpage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 border-red">
          <p>Hello</p>
        </div>
        <div className="col-span-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
