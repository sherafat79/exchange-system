

export default function Banner({title,subTitle}:{title:string,subTitle:string}) {
    return (
        <div
        className=" welcome-section relative h-80 overflow-hidden bg-cover bg-no-repeat"
        
      >
        <div
          className="absolute bg-black bg-opacity-70  bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">{title}</h1>
              <h3 className="mb-8 text-3xl font-bold">{subTitle}</h3>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  