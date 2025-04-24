import Logo from "../../Images/Logo.png"

export const Header = () => {
  return (
    <div className="w-[100vw] h-30 bg-slate-900 text-white flex justify-center items-center">
        <div className="w-full h-30 ml-10 gap-5 bg-slate-900 text-white flex justify-start items-center">
            <img src={Logo} className="w-15" alt="" />
            <h1 className="text-2xl font-bold ">Fake Store</h1>
        </div>
        <input type="text" placeholder="Inserte El Nombre del producto a buscar 🔎" className="w-[40%] rounded-2xl border-2 border-white mr-20 p-2" />
    </div>
  )
}


