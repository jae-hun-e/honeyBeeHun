import LoginBtn from "@molecules/LoginBtn";
import LogoutBtn from "@molecules/LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";

interface IUserData {
  userData: any;
}
const Footer = async () => {
  const userData = await getServerSession(authOptions);
  return (
    <div className="flex justify-center items-center h-10 bg-black text-white fixed bottom-0 w-full">
      <p className="text-sm">© 2023 HBH. All rights reserved.</p>
      {!userData ? (
        <LoginBtn />
      ) : (
        <span>
          <span>{userData?.user?.email}</span>
          <LogoutBtn />
        </span>
      )}
    </div>
  );
};

export default Footer;
