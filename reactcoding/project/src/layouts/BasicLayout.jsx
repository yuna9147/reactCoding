import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) => {
  return ( 
  <>
    <BasicMenu />

    <div className="bg-white w-full flex flex-col space-y-4 md:flex-row md:space-y-0">
      <main className="bg-sky-200 md:w-4/5 lg:w-3/4 px-5 py-5 "> {/* 상단 여백 py-40 변경 */}
          {children}
      </main>
      
      <aside className="bg-red-300 md:w-1/5 lg:w-1/4 px-5 py-5"> {/* 상단 여백 py-40 변경 */}
          <h1 className="text-2xl md:text-4xl">Sidebar</h1>
      </aside>
    </div>
  </>
  );
}
 
export default BasicLayout;