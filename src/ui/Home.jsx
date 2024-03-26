import Button from "./Button";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="flex flex-col items-center relative">
        <p className="absolute text-lynch-100 top-1/2 -translate-y-1/2 -z-10 text-[452px] font-bold text-center text-nowrap">
          Todo List Lite
        </p>
        <h1 className="text-5xl sm:text-[80px] font-bold text-lynch-800">
          Todo List Lite
        </h1>
        <Button to="/groups" bigSize type="primary">
          Enter
        </Button>
      </div>
    </div>
  );
}
export default Home;
