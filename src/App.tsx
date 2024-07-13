import { Button } from "./component/Button"
import { NavBar } from "./component/NavBar"

function App() {

  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center h-full ">
    <div className="bg-[#D9D9D91A] p-10 justify-evenly flex items-center m-10
      rounded-[62px] border border-[#908D8D]">
      <div>
        <div className=" space-y-5">
          <h1 className="text-6xl font-extrabold font-lalezar">Shop Our Stunning</h1>
          <h1 className="text-6xl font-extrabold font-lalezar">Shoe Collection</h1>
        </div>
        <p className="my-9">We believe that every step you take should
          be a statement of confidence and individuality. 
          Our meticulously crafted footwear blends timeless elegance with modern innovation.</p>
          <div className="flex gap-4">
          <Button bgColor="bg-white" title="Buy now" textColor="text-black" />
          <Button title="Explore" textColor="text-white" border="border border-[#908D8D]" />
          </div>
      </div>
      <div className="flex flex-col items-center -space-y-7">
        <img src="image.png" className="max-w-[685px] w-auto" alt="" />
        <p className="bg-white rounded-full w-[350px] h-[16px] blur-xl "></p>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
