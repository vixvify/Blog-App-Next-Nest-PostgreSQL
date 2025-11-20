export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="font-bold text-5xl">Post Blog</h1>
      <form className="mt-10 flex flex-col gap-5">
        <p className="text-xl">Title</p>
        <input
          type="text"
          className="border border-white w-100 h-10 p-3"
        ></input>
        <p className="text-xl">Content</p>
        <textarea className="border border-white w-100 h-25 p-3"></textarea>
        <p className="text-xl">Author</p>
        <input
          type="text"
          className="border border-white w-100 h-10 p-3"
        ></input>
        <button className="text-2xl bg-white p-3 rounded-md text-black">
          Post
        </button>
      </form>
    </div>
  );
}
