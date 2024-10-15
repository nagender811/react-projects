import MenuList from "./MenuList";



export default function TreeView({ menus = [] }) {
    return (
       <div className="w-screen h-screen bg-gray-400">
         <div className="min-h-screen w-[350px] bg-blue-500">
            <MenuList list = {menus} />
        </div>
       </div>
    )
}