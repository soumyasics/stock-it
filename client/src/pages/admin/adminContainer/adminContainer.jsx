import AdminNavbar from "../../../components/common/adminNavbar"
import AdminSidebar from "../../../components/common/adminSidebar"
import { Footer2 } from "../../../components/common/footer2/footer2"

export const AdminContainer = () => {
    return (
        <div>
            <AdminNavbar />
            <div style={{minHeight: "600px"}}>
                <AdminSidebar />
            </div>
            
            <Footer2 />
        </div>
    )
}