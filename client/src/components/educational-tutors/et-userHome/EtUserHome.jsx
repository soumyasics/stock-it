import { Footer2 } from "../../common/footer2/footer2";
import { UserNavbar } from "../../user/userNavbar/userNavbar";
import { UserHomeDescription } from "../userHome-/userHome-discription";
import { UserHomePart2 } from "../userHome-part2/userHomePart2";
import { UserHomeTable } from "../userHome-table/userHome-table";
import { UserHomeGif } from "../userHomegif/userHomegif";
import { UserWelcome } from "../userWelcome/userWelcome";

export const EtUserHomePage = () => {
  return (
    <div>
      <UserNavbar />
      <UserHomePart2 />
      <UserHomeTable />
      <UserWelcome />
      <UserHomeDescription />
      <UserHomeGif />
      <Footer2 />
    </div>
  );
};
