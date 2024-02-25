import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-y-5 h-40 md:gap-x-10 md:flex-nowrap">
        <div className="flex-none w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden relative">
          <Image
            src="/me.jpg"
            alt="me photo"
            //width={500}
            //height={500}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div>
        <h2 className="text-xl font-bold">{`Hi, I'm Jungwoo Yang!`}</h2>
        <br/>
        <p className="text-lg">
        {`I'm a researcher and developer at Qraft Technologies. 
        My main interests are deep learning, quantitative trading and high performance computing.
        I'm always open to learning new things!`}
        </p>
        <br/>
        <p className="text-lg">
        This site is work in progress.
        </p>
        </div>
      </div>
    </div>
  )
}
