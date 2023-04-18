
interface Iprops{
posts:[]
}
export default function Info({posts}:Iprops) {
  return (
    <section className="bg-white border-b py-8">
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Title
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      {posts.map((p:{title:string,description:string},index)=>(
 <div key={index} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
 <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
   <a
     href="#"
     className="flex flex-wrap no-underline hover:no-underline"
   >
     <p className="w-full text-gray-600 text-xs md:text-sm px-6">
       xGETTING STARTED
     </p>
     <div className="w-full font-bold text-xl text-gray-800 px-6">
       {p.title}
     </div>
     <p className="text-gray-800 text-base px-6 mb-5">
     {p.description}
     </p>
   </a>
 </div>

</div>
      ))}
     
      
    </div>
  </section>
  );
}
