import { fontLora } from "./Style"
import { userAtom } from "./store/atom/userAtom"
import { useRecoilValue } from "recoil";
export function Profile() {
    const user = useRecoilValue(userAtom);
    return <div>
        <h2 style={fontLora} className="text-4xl text-gray-800">My Profile</h2>
        <div>{user.firstName}</div>
    </div>
}