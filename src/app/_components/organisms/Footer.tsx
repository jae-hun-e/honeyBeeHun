import Auth from "@organisms/Auth";

interface IUserData {
  userData: any;
}
const Footer = async () => {
  return (
    <div className="flex justify-center items-center h-10 bg-black text-white fixed bottom-0 w-full">
      <p className="text-sm">© 2023 HBH. All rights reserved.</p>

      <Auth />
    </div>
  );
};

export default Footer;
