export function Loader({ message }) {
  return (
    <div
      className={
        "fixed w-full h-full  flex flex-col gap-10 justify-center items-center"
      }
    >
      <span className="loader"></span>
      <p className={"text-3xl text-blue-500 font-bold"}>{message}</p>
    </div>
  );
}
