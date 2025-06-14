import { FaRegCopyright } from "react-icons/fa";
const FooterComponent = () => {
    return (
        <div className="flex justify-center h-[50vh] px-5 md:px-12 py-15">
            <div className="bg-gray-200 px-5 py-5 w-screen flex flex-col justify-end">
                <FaRegCopyright />
                <p className="font-['kadwa']">Developed By</p>
                <h2 className="font-['Just_Another_Hand'] text-xl">SWAPNIL SAHU</h2>
            </div>
        </div >
    )
}
export default FooterComponent;
