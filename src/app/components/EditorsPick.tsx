import Image from 'next/image';

const EditorsPick = () => {
  return (
    <section className="container mx-auto py-10">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">EDITOR'S PICK</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center items-start gap-4">
        
        <div className="w-[510px] h-[500px]">
          <Image
            src="/col-md-6.png" 
            alt="Left Image"
            width={510}
            height={500}
            className="rounded-md"
          />
        </div>

        
        <div className="w-[240px] h-[500px]">
          <Image
            src="/card-item.png" 
            alt="Center Image"
            width={240}
            height={500}
            className="rounded-md"
          />
        </div>

        
        <div className="space-y-4">
         
          <div className="relative w-[239px] h-[242px]">
            <Image
              src="/filter.png" 
              alt="Top Right Image"
              width={239}
              height={242}
              className="rounded-md"
            />
            
            <div className="absolute bottom-4 w-170px h-48px ml-5 bg-white">
            <span className="font-bold text-[16px]">ACCESSORIES</span>
            </div>
          </div>

            {/* {4 image} */}
          <div className="relative w-[240px] h-[242px]">
            <Image
              src="/media-bg-cover.png" 
              alt="Bottom Right Image"
              width={240}
              height={242}
              className="rounded-md"
            />
            
            <div className="absolute bottom-4 w-170px h-48px ml-5 bg-white">
            <span className="font-bold text-[16px]">KIDS</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default EditorsPick;
